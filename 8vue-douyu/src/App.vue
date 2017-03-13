<template>
  <div id="app">
    <transition name="sideMenuAni">
    	<SideMenu @hideMenu="hideMenu" v-show="showSideMenu"></SideMenu>
        <!--<v-slide></v-slide>-->
	</transition>
    <transition name="slide">
    	<router-view></router-view>
    </transition>
  </div>
</template>

<script>

import SideMenu from "./components/SideMenu";
import bus from "./bus.js";

export default {
  name: 'app',
  components:{
  	SideMenu:SideMenu
	//   'v-slide':SideMenu
  },
  data:function(){
  	return {
  		showSideMenu:false
  	}
  },
  methods:{
  	hideMenu:function(){
  		this.showSideMenu = false;
  	},
  	showMenu:function(){
  		this.showSideMenu = true;
  	}
  },
  mounted:function(){
		bus.$on("menuClick",this.showMenu);
  },
  watch:{
  	$route:function(to,from){
//		console.log(to);
//		console.log(from);
  	}
  }
}
</script>

<style scoped>
	.sideMenuAni-enter-active,.sideMenuAni-leave-active{
		transition: all 0.5s;
	}
	.sideMenuAni-enter,.sideMenuAni-leave-active{
		opacity: 0;
		transform: translateX(-100%);
	}
	
	
	.slide-enter{
  	transform: translateX(100%);
	}
	.slide-enter-active{
		transition: all .5s;
	}
	
	.slide-leave-active {
	  position: absolute;
	  transition: all .5s;
	  transform: translate(-30%);
	}
	
	
	
</style>
