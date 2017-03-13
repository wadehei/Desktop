<template>
	<div>
		<BackHeader>{{$route.params.gn}}</BackHeader>
		
		<!--<p>{{$route.params.cateid}}</p>-->
		
		<div>
			<GMItem v-for="r in roomlist" :room="r"></GMItem>
		</div>
		
		
	</div>
	
	
</template>

<script>
	import BackHeader from "../components/BackHeader";
	import share from "./shareAttr.js";
	import GMItem from "../components/GMItem";
	export default {
		components:{
			BackHeader,
			GMItem
		},
		mixins:[share],
		data:function(){
			return {
				roomlist:[]
			}
		},
		created:function(){
			this.$http.get("/douyuapi/api/RoomApi/live/"+this.$route.params.cateid)
			.then(function(res){
				//console.log(res.body);
				this.roomlist = res.body.data;
			});
		}
	}
</script>

<style scoped>
</style>