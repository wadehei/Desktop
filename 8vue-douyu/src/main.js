// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"

import FontAwesome from "./assets/Font-Awesome/css/font-awesome.css"


Vue.use(VueResource);

Vue.filter("numberfix",function(v){
	return v<10000?v:(v/10000).toFixed(2)+"万";
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


function calcRem(){
	var http = document.getElementsByTagName("html")[0];
	var w = document.documentElement.clientWidth;
	if(w<320){
		http.style.fontSize = "10px";
	}else if(w<640){
		http.style.fontSize = w/32+"px";
	}else{
		http.style.fontSize = "20px";
	}
}
calcRem();
window.onresize = function(){
	calcRem();
}

