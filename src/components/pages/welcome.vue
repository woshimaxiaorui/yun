<template>
	<div class="welcome">
		<iframe src="http://www.yunjing720.com/index.php?s=tour/banner/index&tid=41bd5bb46ac156eddedbd107c58ddf89" frameborder="0"></iframe>
		<div class="poi" ref='poi' v-show='showpoi'>
			<router-link
				:to='toIndex'
				tag='div'
				class='shouye'
				>
				开启全景模式
			</router-link>
		</div>
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
		methods:{
			goIndex(){
				//编程式导航前往首页（index.vue）
			},
			showidx(){
				this.showpoi = !this.showpoi;
			}
		},
		mounted(){
// 			setTimeout(()=>{
// 				this.showidx();
// 			},1000)
			this.showidx();
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
		.poi{
			position: fixed;
			top:0;right:0;bottom:0;left:0;
			margin:auto;
			width:100%;
			height:100%;
			text-align: center;
			.shouye{
				.w(200px); .h(50px); .line-h(50px); 
				position: absolute; bottom: 15%; left: 23%; 
				background: rgba(0,0,0,.1); 
				font-size: @f-size-l; color: rgba(255,255,255,0.9);
				border: 2px solid #666;
				}
		}
	}
	
</style>
