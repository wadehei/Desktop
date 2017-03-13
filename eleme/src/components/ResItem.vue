<template>
	<div class="pri-com-root">
		<div v-if="res.is_new" class="new-mark">
			<span>新店</span>
		</div>
		<img class="res-ico" :src="res.image_path|isf"/>
		
		<div class="right-box">
			<div class="c-top">
				<h3 :class="{'pre-name':res.is_premium}">{{res.name}}</h3>
				<div>
					<div v-for="it in res.supports">{{it.icon_name}}</div>
				</div>
			</div>
			<div class="c-mid">
				<div class="mid-left">
					<rater v-model="res.rating" active-color="#FFAA0C" :font-size="starSize" disabled></rater>
					<span>{{res.rating}}</span>
					<div>月售{{res.recent_order_num}}单</div>
				</div>
				<div class="mid-right">
					<div class="zsd" v-if="res.delivery_mode">准时达</div>
					<div class="fnzs" v-if="res.delivery_mode">蜂鸟转送</div>
				</div>
			</div>
			<div class="c-bot">
				<div class="bot-left">
					<div>￥{{res.float_minimum_order_amount}}元起送</div>
					<span class="pre-x">配送费约￥{{res.float_delivery_fee}}</span>
				</div>
				<div class="bot-right">
					<div>{{res.distance|distanceFilter}}km</div>
					<span class="pre-x">{{res.order_lead_time}}分钟</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {Rater} from 'vux';
	export default {
		components:{
			Rater
		},
		data:function(){
			return {
				rat:3.7,
				starSize:15
			}
		},
		props:["res"],
		methods:{
			//计算星星尺寸
			calcStarSize:function(){
				var http = document.getElementsByTagName("html")[0];
				this.starSize = http.style.fontSize.slice(0,-2)*1.2;
//				console.log(this.starSize);
			},
//			//被点击
//			itemClick:function(){
//				console.log(this.res.name);
//			}
		},
		mounted:function(){
			this.calcStarSize();
			window.addEventListener("resize",this.calcStarSize);
		},
		destroyed:function(){
			window.removeEventListener("resize",this.calcStarSize);
		}
	}
</script>

<style scoped>
	.pri-com-root{
		position: relative;
		background-color: white;
		border-bottom: solid 1px #F3F3F3;
		padding: 8px 8px;
		display: flex;
		width: 100%;
	}
	.new-mark{
		position: absolute;
		left: 0;
		top: 0;
		height: 3rem;
		width: 3rem;
		background: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
	}
	.new-mark span{
		color: white;
		font-weight: bold;
		display: block;
		transform: rotate(-45deg);
		font-size: 0.8rem;
	}
	.res-ico{
		width: 6rem;
		height: 6rem;
	}
	.right-box{
		width: calc(100% - 6rem - 8px);
		
		margin-left: 8px;
		display: flex;
		flex-direction: column;
	}
	
	.c-top{
		flex-basis: 35%;
		display: flex;
	}
	
	
	.c-top h3{
		flex-basis: 70%;
		margin: 0;
		font-size: 1.4rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.pre-name:before{
		content: "品牌";
		font-weight: bold;
		background-color: #FFD930;
		font-size: 1rem;
		padding: 2px;
		border-radius: 2px;
		margin: 0 4px;
	}
	
	.c-top>div{
		flex-grow: 1;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}
	
	.c-top>div>div{
		width: 1.2rem;
		height: 1.2rem;
		margin-left: 4px;
		color: grey;
		border: solid 1px lightgrey;
		font-size: 1rem;
	}
	
	.c-mid{
		flex-basis: 35%;
		margin-top: 2px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.mid-left{
		display: flex;
	}
	
	.mid-left>span{
		color: #ff6000;
		margin: 0 4px;
	}
	
	.mid-left>div{
		color: grey;
	}
	
	.mid-right{
		display: flex;
		font-size: 0.9rem;
	}
	
	.zsd{
		color: #2395FF;
		border: solid 1px #2395FF;
		border-radius: 2px;
		padding: 1px;
	}
	.fnzs{
		margin-left: 4px;
		color: white;
		background-color: #2395FF;
		border-radius: 2px;
		padding: 1px 2px;
	}
	
	
	.c-bot{
		flex-basis: 30%;
		margin-top: 2px;
		display: flex;
		align-items: flex-end;
		font-size: 0.9rem;
		justify-content: space-between;
	}
	
	.bot-left{
		display: flex;
		color: grey;
	}
	
	.bot-left>span{
		margin-left: 4px;
	}
	.pre-x:before{
		content: "/ ";
		color: grey;
	}
	
	.bot-right{
		display: flex;
	}
	
	.bot-right>div{
		color: grey;
	}
	
	.bot-right>span{
		color: #2395FF;
	}
</style>