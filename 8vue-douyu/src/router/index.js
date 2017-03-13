import Vue from 'vue'
import Router from 'vue-router'

import Hot from "../pages/Hot"
import Category from "../pages/Category"
import Recommend from "../pages/Recommend"
import UserCenter from "../pages/UserCenter"
import RoomList from "../pages/RoomList"

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: Hot
    },
    {
      path: '/cat',
      component: Category
    },
    {
      path: '/rec',
      component: Recommend
    },
    {
      path: '/user',
      component: (resolve) =>{
        require('../pages/UserCenter',resolve)
      }
    },
    {
    	//路由参数，当跳转地址为/games/xxxx/xxxx时，都
    	//跳转RoomList页面。
    	path:"/games/:cateid/:gn",
    	component:RoomList
    }
  ]
});

//router.beforeEach(function(to,from,c){
//	console.dir(to);
//	console.dir(from);
//	//console.log(c);
//	c();
//});


export default router;