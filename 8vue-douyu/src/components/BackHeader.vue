<template>
	<header class="clearfix">
		<i @click="back" class="icon icon-arrow-left"></i>
		<span class="title">
			<slot></slot>
		</span>
		<span class="icon icon-user himg"></span>
	</header>
</template>

<script>
	import bus from "../bus.js"
	export default {
		methods:{
			back:function(){
				window.history.back();
			}
		}
	}
</script>

<style scoped>
	header{
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #282828;
		font-size: 16px;
		padding: 0 20px;
		top: 0;
		z-index: 9;
	}
	i{
		margin-right: 20px;
	}
	i,.himg{
		color: #999999;
	}
	.title{
		color: white;
	}
	.himg{
		float: right;
		line-height: 44px;
	}
</style>