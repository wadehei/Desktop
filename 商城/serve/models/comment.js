/**
 * Created by Administrator on 2017/2/11.
 */

var mongodb=require('./db');

function Comment(name,title,time,comment){
    this.name=name;
    this.title=title;
    this.time=time;
    this.comment=comment;
}

Comment.prototype.save=function(callback){
    var name=this.name,
        title=this.title,
        time=this.time,
        comment=this.comment

    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        db.collection('posts',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.update({
                name:name,
                title:title,
                'time.minute':time
            },{
                $push:{comments:{
                    $each:[comment],
                    $sort:{time:-1}
                }}
            },function(err,post){
                mongodb.close();
                if(err){
                    return callback(err);
                }
                return callback(null,post);
            })
        })
    })



}

module.exports=Comment;
