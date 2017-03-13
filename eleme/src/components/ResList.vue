<template>
	<div>
		<router-link v-for="r in rl" :to="'/main/resDetail/'+r.id">
			<ResItem :res="r"></ResItem>
		</router-link>
		
	</div>
</template>

<script>
	import ResItem from "./ResItem";
	export default {
		components:{
			ResItem
		},
		props:["rl"]
	}
</script>

<style scoped>
</style>