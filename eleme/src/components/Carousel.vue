<template>
	<div class="pri-com-root">
		<swiper auto loop dots-position="center" style="height: 140px;">
      <swiper-item v-for="pa in fixedArray">
      	<CarPage :items="pa"></CarPage>
      </swiper-item>
    </swiper>
	</div>
	
</template>

<script>
	import {Swiper,SwiperItem} from 'vux';
	import CarPage from "./CarPage";
	export default {
		props:["carouselArray"],
		components:{
			CarPage,
			Swiper,
			SwiperItem
		},
		computed:{
			//每8个放一个数组，然后把所有数组再放入数组
			fixedArray:function(){
				var bigArray = [];
				var smArray = [];
				for (var i = 0;i<this.carouselArray.length;i++) {
					smArray.push(this.carouselArray[i]);
					if((i+1)%8==0||i==this.carouselArray.length-1){
						bigArray.push(smArray);
						smArray = [];
					}
				}
				return bigArray;
			}
		}
	}
</script>

<style scoped>
	.pri-com-root{
		background-color: white;
	}
</style>