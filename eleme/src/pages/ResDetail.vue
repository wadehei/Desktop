<template>
	<div class="page-after">
		<header>
			<span class="fa fa-arrow-left" @click="backClick"></span>
		</header>
		<ResDetailHeader :headerInfo="headerInfo"></ResDetailHeader>
	</div>
</template>

<script>
	import bus from "../utils/bus.js";
	import ResDetailHeader from "../components/ResDetailHeader";
	export default {
		components:{
			ResDetailHeader
		},
		data:function(){
			return {
				headerInfo:{},
			}
		},
		activated:function(){
			this.initData();
			this.requestHeaderInfo();
		},
		methods:{
			backClick:function(){
				this.$router.back();
			},
			initData:function(){
				this.headerInfo = {};
			},
			requestHeaderInfo:function(){
				this.$http.get("ele/shopping/restaurant/"+this.$route.params.resid,{
					params:{
						latitude:bus.latitude,
						longitude:bus.longitude,
						"extras[]":["activities","album","license","identification","statistics"]
					}
				})
				.then(function(res){
//					console.dir(res.data);
					this.headerInfo = res.data;
				}.bind(this));
			}
		}
	}
</script>

<style scoped>
	header{
		height: 44px;
		background-color: #0096ff;
	}
	header span{
		font-size: 32px;
		line-height: 44px;
		margin-left: 8px;
		color: white;
	}
</style>