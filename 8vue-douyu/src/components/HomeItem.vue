<template>
	<div class="root">
		<div class="rimg">
			<transition name="rpic">
				<img v-show="loaded" @load="imgloaded" :src="picurl"/>
			</transition>
			<img v-show="!loaded" :src="placeholder" />
			<span class="hname">{{room.nickname}}</span>
			<span class="vnum">
				<span class="icon icon-user-md"></span>
				{{room.online|numberfix}}
			</span>
		</div>
		<div class="rname">
			<span class="icon-desktop icon"></span>
			{{room.room_name}}
		</div>
	</div>
</template>

<script>
	import placeholder from "../assets/placeholder.gif";
	
	export default {
		props:["room"],
		data:function(){
			return {
				picurl:this.room.room_src,
				loaded:false,
				placeholder
			}
		},
		methods:{
			imgloaded:function(){
				this.loaded = true
			}
		}
	}
</script>

<style scoped>
	.root{
		display: inline-block;
		width: 14rem;
		margin: 10px;
	}
	.rimg{
		height: 10rem;
		position: relative;
		border-radius: 10px;
		color: white;
		background-size: 100% 100%;
		overflow: hidden;
	}
	.rimg img{
		width: 100%;
		height: 100%;
	}
	
	@media  (max-width: 320px) {
		.root{
			width: 80%;
		}
		.rimg{
			height: 50vw;
		}
	}
	
	
	.hname,.vnum{
		position: absolute;
	}
	.hname{
		left: 10px;
		bottom: 5px;
	}
	.vnum{
		right: 10px;
		bottom: 5px;
	}
	.rname{
		padding: 0 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.rpic-enter-active,.rpic-leave-active{
		transition: opacity 0.5s;
	}
	
	.rpic-enter,.rpic-leave-active{
		opacity: 0;
	}
	
</style>