<template>
	<div class="root">
		<img :src="room.room_src"/>
		<div class="text-content">
			<p class="room-name">{{room.room_name}}</p>
			<p class="zhubo"><span class="icon icon-user"></span>{{room.nickname}}</p>
			<p class="vnum"><span class="icon icon-eye-open"></span>{{room.online}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:["room"],
	}
</script>

<style scoped>
	.root{
		border-bottom: solid 1px grey;
		padding: 10px;
		vertical-align: top;
	}
	.text-content{
		display: inline-block;
		width: 55%;
		vertical-align: top;
	}
	img{
		width: 40%;
	}
	.room-name{
		font-size: 1.2rem;
	}
	.zhubo,.vnum{
		color: darkgrey;
	}
</style>