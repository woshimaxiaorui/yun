<template>
	<div class="welcome">
		<iframe src="http://www.yunjing720.com/index.php?s=tour/banner/index&tid=41bd5bb46ac156eddedbd107c58ddf89" frameborder="0"></iframe>
		<!-- <p>
			我是欢迎页面
			<botton @touchend="goIndex"></botton>
		</p> -->
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

<style lang="less">
	@import '../../common/style/index.less';
	
	*{position: relative;}
	.welcome{
		width: 100%;
		height: 100%;
		iframe{
			position:relative;
			width: 100%;
			height: 100%;
		}
	}
	
</style>
