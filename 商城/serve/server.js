var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var routes=require('./routes/index')

app.use(bodyParser.json());
app.use(require('body-parser').urlencoded({ extended: true }));

// －－－－加入此代码,解决跨域请求的问题－－－－－－－－－
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
})
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
routes(app);
app.listen(3000, function () {
    console.log('node is ok')
})
