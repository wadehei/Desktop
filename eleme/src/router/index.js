import Vue from 'vue';
import Router from 'vue-router';
import Main from '../pages/Main';
import ResDetail from '../pages/ResDetail';

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/',
      component: Main
    },
    {
      path: '/main/resDetail/:resid',
      component: ResDetail
    },
  ]
});






export default router;