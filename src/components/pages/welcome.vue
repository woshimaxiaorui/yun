<template>
	<div class="welcome">
		<iframe src="http://www.yunjing720.com/index.php?s=tour/banner/index&tid=41bd5bb46ac156eddedbd107c58ddf89"
		 frameborder="0"></iframe>
		<router-link :to='toIndex' tag='div' class='shouye'>
			开启全景世界
		</router-link>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				showpoi: false,
				toIndex: '/home'
			};
		},
		methods: {
			goIndex() {
				//编程式导航前往首页（index.vue）
			},
			showidx() {
				this.showpoi = !this.showpoi;
			}
		},
		mounted() {
			// 			setTimeout(()=>{
			// 				this.showidx();
			// 			},1000)
			this.showidx();
		}
	}
</script>

<style lang="less">
	@import '../../common/style/index.less';

	* {
		position: relative;
	}

	.welcome {
		width: 100%;
		height: 100%;

		iframe {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.shouye {
			.w(200px);
			.h(50px);
			.line-h(50px);
			position: fixed;
			bottom: 15%;
			left: 23%;
			background: rgba(0, 0, 0, .1);
			font-size: @f-size-l;
			color: rgba(255, 255, 255, 0.9);
			border: 2px solid #666;
			text-align: center;
			
		}
	}
</style>
