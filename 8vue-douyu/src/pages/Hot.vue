<template>
	<div>
		<HeaderNav>首页</HeaderNav>
		
		<p v-if="status=='fail'">网络出问题了</p>
		<span v-if="status=='loading'" class="icon-refresh icon-spin"></span>
		
		<div class="room-list" v-if="status=='success'">
			<HomeItem v-for="room in roomlist" :room="room"></HomeItem>
			<div class="justify-fix"></div>
			<div class="justify-fix"></div>
			<div class="justify-fix"></div>
		</div>
		<p v-if="status=='success'" class="loading-icon">
			<span class="icon-refresh icon-spin"></span>
		</p>
		
	</div>
	
	
</template>

<script>
	import share from "./shareAttr.js";
	import HomeItem from "../components/HomeItem";
	export default{
		data:function(){
			return {
				roomlist:[],
				status:"loading",
				isLoadingMore:false
			}
		},
		components:{
			HomeItem
		},
		mixins:[share],
		methods:{
			//请求热门直播
			refresh:function(){
				this.$http.get("/douyuapi/api/RoomApi/live")
				.then(function(res){
//					console.log(res.body);
					if(res.body.error!=0){
						this.status = "fail";
					}else{
						this.status = "success";
						this.roomlist = res.body.data;
					}
				},function(err){
					this.status = "fail";
				});
			},
			//当组件根标签发生滚动时的回调函数
			didScroll:function(e){
				//body内容高度
				var contentHeight = document.body.clientHeight;
				//滚动偏移量
				var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				//窗口高度
				var windowH = window.innerHeight;
				
				if(windowH+scrollTop>contentHeight-10){
//					console.log("要请求更多了");
					if(!this.isLoadingMore){
						this.loadMore();
					}
				}
			},
			//请求更多数据
			loadMore:function(){
				console.log(this.roomlist.length/30);
				this.$http.get("/douyuapi/api/RoomApi/live",{
					params:{offset:this.roomlist.length/30}
				}).then(function(res){
					this.roomlist = this.roomlist.concat(res.body.data);
					this.isLoadingMore = false;
				},function(){
					this.isLoadingMore = false;
					alert("加载更多失败，请再次尝试");
				});
				
				this.isLoadingMore = true;
			}
		},
		mounted:function(){
			this.refresh();
//			console.log("重新刷新了");
			window.onscroll = this.didScroll;
		},
		destroyed:function(){
			window.onscroll = null;
		}
	}
</script>

<style scoped>
	.room-list{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		
	}
	.justify-fix{
		display: inline-block;
		width: 14rem;
		margin: 0 10px;
	}
	
	.loading-icon{
		text-align: center;
		font-size: 2rem;
		margin: 0;
	}
	
</style>