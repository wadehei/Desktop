/**
 * Created by Administrator on 2017/2/8.
 */
var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.tel=user.tel;
}

module.exports = User;

User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email,
        tel:this.tel
    }
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();//不关数据库会消耗新能
                return callback(err)
            }
            collection.insert(user, {safe: true}, function (err, user) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                console.log(user);
                callback(null, user.ops[0])//返回用户数据中的用户名

            })
        })
    })

}

User.get = function (name, callback) {
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('users', {safe: true}, function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.findOne({name: name}, function (err, user) {
                mongodb.close();
                if (err) {
                    return callback(err)
                }
                callback(null, user)//直接返回用户信息
            })
        })
    })
}
