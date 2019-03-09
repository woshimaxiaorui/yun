<template>
	<div class="welcome">
		我是欢迎页面
		<botton @touchend="goIndex"></botton>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goIndex(){
				//编程式导航前往首页（index.vue）
			}
		}
	}
</script>

<style>

</style>
