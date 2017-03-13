<template>
	<div>
		<HeaderNav>全部分类</HeaderNav>
		
		<div>
			<router-link v-for="g in gameList" :to="'/games/'+g.cate_id+'/'+g.game_name">
				<GameItem :game="g"></GameItem>
			</router-link>
		</div>
		
	</div>
	
</template>

<script>
	import share from "./shareAttr.js";
	import GameItem from "../components/GameItem"
	export default{
		mixins:[share],
		data:function(){
			return {
				gameList:[]
			}
		},
		components:{
			GameItem
		},
		methods:{
			gameItemClick:function(e){
				console.dir(e);
			}
		},
		created:function(){
			this.$http.get("/douyuapi/api/RoomApi/game")
			.then(function(res){
//				console.dir(res.body);
				this.gameList = res.body.data;
			},function(){
				alert("请求失败");
			});
		}
	}
</script>

<style scoped>
	
</style>