<template>
	<div class="home">
		<Header></Header>
		<router-view></router-view>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Header from '@/components/common/header';
	import Tabbar from '@/components/common/tabbar';
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Header,
			Tabbar
		}
	}
</script>

<style>

</style>
