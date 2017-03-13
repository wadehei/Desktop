<template>
	<div class="page-root">
    <MainHeader 
    	:weather="weather" 
    	:hotSearch="hotSearch"
    	:positionInfo="positionInfo"
    ></MainHeader>
    
    <Carousel 
    	:carouselArray="carouselArray"
    	style="padding: 4px 0;"
    ></Carousel>
    
    <div v-if="loadComplete">
	    <h2 class="list-title">推荐商家</h2>
	    
	    <ResList :rl="restaurantList"></ResList>
			
			<load-more tip="正在加载更多" style="margin: 4px auto;"></load-more>
    </div>
    
    <div v-else style="text-align: center;">
    	<img src="../../static/img/loading.gif"/>
    </div>
		
    
    <div class="back-top" v-show="isShowBackTop" @click="backTopClick">
    	<b class=" fa fa-arrow-up"></b>
    	<br />
    	<span>顶部</span>
    </div>
    
  </div>
	  
</template>

<script>
	import MainHeader from "../components/MainHeader";
	import Geohash from "../utils/geohash.js";
	import Carousel from "../components/Carousel";
	import ResList from "../components/ResList";
	import {Scroller,LoadMore} from 'vux';
	import bus from "../utils/bus.js";
	
  export default {
		components:{
			MainHeader,
			Carousel,
			ResList,
			Scroller,
			LoadMore
		},
		data:function(){
			return {
				weather:{},
				hotSearch:[],
				latitude:31.23037,
				longitude:121.473701,
				positionInfo:{},
				carouselArray:[],
				restaurantList:[],
				isLoading:false,
				isShowBackTop:false,
				currentOffset:0,
				loadComplete:false
			}
		},
		mounted:function(){
			bus.latitude = this.latitude;
			bus.longitude = this.longitude;
			//请求数据
			this.requestPosition();
			this.requestWeather();
			this.requestHotSearch();
			this.requestCarousel();
			this.requestRestaurantList();
			//绑定事件监听
			this.$el.onscroll = function(e){
				//滚动偏移量
				var offset = e.target.scrollTop;
				this.currentOffset = offset;
				//元素本身高度
				var height = e.target.clientHeight;
				//元素的内容高度
				var contentHeight = e.target.scrollHeight;
				if(offset+height>=contentHeight-20){
					this.requestRestaurantList();
				}
				if(offset>400){
					this.isShowBackTop = true;
				}else{
					this.isShowBackTop = false;
				}
			}.bind(this);
		},
		activated:function(){
			this.$el.scrollTop = this.currentOffset;
		},
		computed:{
			//根据经纬度计算geohash
			gh:function(){
				return Geohash.encode(this.latitude,this.longitude,12);
			}
		},
		methods:{
			//当前所在城市地址请求
			requestPosition:function(){
				//console.log(this.gh);
				this.$http.get("ele/v2/pois/"+this.gh)
				.then(function(res){
//					console.dir(res.data);
					this.positionInfo = res.data;
				}.bind(this));
			},
			//天气请求
			requestWeather:function(){
				this.$http.get("ele/bgs/weather/current",{
					params:{
						latitude:this.latitude,
						longitude:this.longitude
					}
				})
				.then(function(res){
//					console.dir(res.data);
					this.weather = res.data;
				}.bind(this));
			},
			//热搜请求
			requestHotSearch:function(){
				this.$http.get("ele/shopping/v3/hot_search_words",{
					params:{
						latitude:this.latitude,
						longitude:this.longitude
					}
				})
				.then(function(res){
//					console.dir(res.data);
					this.hotSearch = res.data;
				}.bind(this));
			},
			//轮播图内容请求
			requestCarousel:function(){
				this.$http.get("ele/v2/index_entry",{
					params:{
						geohash:this.gh,
						group_type:1,
						"flags[]":"F"
					}
				})
				.then(function(res){
//					console.dir(res.data);
					this.carouselArray = res.data;
				}.bind(this));
			},
			//请求商家列表
			requestRestaurantList:function(){
				if(this.isLoading){
					return;
				}
				this.isLoading = true;
				this.$http.get("ele/shopping/restaurants",{
					params:{
						latitude:this.latitude,
						longitude:this.longitude,
						limit:20,
						offset:this.restaurantList.length,
						"extras[]":"activities",
						terminal:"h5"
					}
				})
				.then(function(res){
//					console.dir(res.data);
					this.restaurantList = this.restaurantList.concat(res.data);
					this.isLoading = false;
					this.loadComplete = true;
				}.bind(this));
			},
			//点击回到顶部
			backTopClick:function(){
				this.$el.scrollTop = 0;
			},
			
		}
  }
</script>

<style scoped>
	.list-title{
		margin: 10px 0 0 0;
		background-color: white;
		font-size: 1.4rem;
		padding: 8px 16px;
		border-top: solid 1px #F3F3F3;
		border-bottom: solid 1px #F3F3F3;
	}
	
	.back-top{
		width: 40px;
		height: 40px;
		position: fixed;
		bottom: 82px;
		right: 20px;
		border: solid 1px grey;
		border-radius: 50%;
		text-align: center;
		color: grey;
		padding-top: 2px;
	}
	.back-top b{
		font-size: 10px;
	} 
	.back-top span{
		font-size: 10px;
	}
	
</style>