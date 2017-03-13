var User = require('../models/user');
var mongodb = require('../models/db');
module.exports = function (app) {
    app.post('/register', function (req, res) {
        var name = req.body.name;
        var password = req.body.password;
        var email = req.body.email;
        var tel = req.body.tel;
        var newUser = new User({
            name: name,
            password: password,
            email: email,
            tel: tel
        })

        User.get(newUser.name, function (err, user) {
            if (err) {
                res.json({ code: 'error', message: '查询失败' })
                return;
            }
            if (user) {
                res.json({ code: 'error', message: '用户已存在' })
                return;
            }
            newUser.save(function (err, user) {
                if (err) {
                    res.json({ code: 'error', message: '用户已存在' })
                    return
                }
                //存放到session中
                res.json({ code: 'success', message: '注册成功' })
            })
        })

    })
    app.get('/getFlash', function (req, res) {
        mongodb.open(function (err, db) {
            if (err) {
                res.json({ code: 'error', message: '数据库打开失败' })
                return;
            };
            db.collection('flash', function (err, collection) {
                if (err) {
                    mongodb.close();
                    res.json({ code: 'error', message: '查询集合失败' });
                    return;
                }
                var query = {}
                collection.find(query).toArray(function (err, flash) {
                    mongodb.close();
                    if (err) {
                        res.json({ code: 'error', message: '查询内容失败' });
                        return;
                    }
                    res.json({ code: 'error', message: '查询成功', data: flash });
                })
            })

        })
    })
    app.get('/getProduct', function (req, res) {
        mongodb.open(function (err, db) {
            if (err) {
                res.json({ code: 'error', message: '数据库打开失败' })
                return;
            };
            db.collection('products', function (err, collection) {
                if (err) {
                    mongodb.close();
                    res.json({ code: 'error', message: '查询集合失败' });
                    return;
                }
                collection.findOne({ id: req.query.id }, function (err, product) {
                    mongodb.close();
                    if (err) {
                        res.json({ code: 'error', message: '查询内容失败' });
                        return;
                    }
                    res.json({ code: 'error', message: '查询成功', data: product });
                })
            })

        })
    })

    app.post('/login', function (req, res) {
        console.log(req.body);
        //    var name=req.body.username,
        //         password=req.body.password;
        mongodb.open(function (err, db) {
            if (err) {
                res.json({ code: 'error', message: '数据库打开失败' })
                return;
            };
            db.collection('users', function (err, collection) {
                if (err) {
                    mongodb.close();
                    res.json({ code: 'error', message: '查询集合失败' });
                    return;
                }
                collection.findOne({ name: req.body.username }, function (err, user) {
                    mongodb.close();
                    if (err) {
                        res.json({ code: 'error', message: '查询内容失败' });
                        return;
                    }
                    if(req.body.password == user.password){
                         res.json({ code: 'success', message: '查询成功', data: user });
                    }else {
                        res.json({ code: 'passerror', message: '密码错误', data: user });
                    }
                    
                })
            })

            })
        })
    }