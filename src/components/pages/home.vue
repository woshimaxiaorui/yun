<template>
	<div class="home">
		我是父页面
		<router-view></router-view>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from '@/components/common/tabbar';
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Tabbar
		}
	}
</script>

<style>

</style>
