<template>
	<div class="root" @click="hideClick">
		<div class="bottom">
			<div class="leftbox">
				<ul>
					<router-link to="/">
						<li class="clearfix">
							首页<span class="icon icon-angle-right"></span>
						</li>
					</router-link>
					<router-link to="/cat">
						<li class="clearfix">
							全部分类<span class="icon icon-angle-right"></span>
						</li>
					</router-link>
					<router-link to="/rec">
						<li class="clearfix">
							推荐<span class="icon icon-angle-right"></span>
						</li>
					</router-link>
						<router-link to="/user">
							<li class="clearfix">
								个人中心<span class="icon icon-angle-right"></span>
							</li>
						</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			hideClick:function(){
				this.$emit("hideMenu");
			}
		}
	}
</script>

<style scoped>
	.root{
		top: 0;
		position: fixed;
		height: 100vh;
		width: 100%;
		z-index: 10;
	}
	.bottom{
		position: absolute;
		top: 44px;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,0.1);
	}
	.leftbox{
		width: calc(100% - 100px);
		height: 100%;
		background-color: #282828;
	}
	ul{
		margin: 0;
		padding: 0;
		border-top: groove 1px black;
	}
	
	ul li{
		height: 4.4rem;
		line-height: 4.4rem;
		padding-left: 20px;
		font-size: 1.5rem;
		color: #666666;
		border-bottom: dotted 0.2px #333;
	}
	
	li span{
		float: right;
		line-height: 4.4rem;
		padding-right: 30px;
		font-size: 2rem;
		font-weight: bold;
	}
</style>