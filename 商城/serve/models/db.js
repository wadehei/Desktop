/**
 * Created by Administrator on 2017/2/8.
 */
var settings = require('../settings');//引入数据库配置文件
var Db = require('mongodb').Db;  //创建数据库连接实例
var Connection = require('mongodb').Connection;//连接命令
var Server = require('mongodb').Server //服务器

module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true})