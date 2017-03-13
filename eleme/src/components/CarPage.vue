<template>
	<div class="pri-com-root">
		<div class="page-item" v-for="it in items">
			<img :src="it.image_url|addPrefix"/>
			<br />
			<span>
				{{it.title}}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:["items"]
	}
</script>

<style scoped>
	.pri-com-root{
		display: flex;
		flex-wrap: wrap;
	}
	.page-item{
		width: 25%;
		height: 70px;
		/*background-color: greenyellow;
		border: solid 1px black;*/
		text-align: center;
	}
	img{
		width: 40px;
		height: 40px;
	}
	
	span{
		font-size: 12px;
		color: grey;
	}
</style>