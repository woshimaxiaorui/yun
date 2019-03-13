<template>
	<div class="welcome">
		<iframe src="http://www.yunjing720.com/index.php?s=tour/banner/index&tid=41bd5bb46ac156eddedbd107c58ddf89"
		 frameborder="0"></iframe>
			 <transition-group
			enter-active-class = "animated fadeInDown"
			class='filter'
			>
				<div class="hello1" v-show="showOne" :key='1'>Hello</div>
				<div class="hello" v-show="showTwo" :key='2'>欢迎来到云景中国</div>	
			</transition-group>
		 
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
				toIndex: '/home/index',
				showOne:false,
				showTwo:false
			};
		},
		methods: {
			goIndex() {
				//编程式导航前往首页（index.vue）
			},
			showidx() {
				this.showpoi = !this.showpoi;
			},
			ishow(){
				this.showOne = !this.showOne;
				setTimeout(()=>{
					// console.log("222")
					this.ishows()
				},2000)
			},
			ishows(){
				this.showTwo = !this.showTwo
			}
		},
		mounted() {
			this.showidx();
			setTimeout(() => {
				// console.log("111")
				this.ishow()
			}, 2000);
			
		}
	}
</script>

<style lang="less">
	@import '../../common/style/index.less';

	.welcome {
		width: 100%;
		height: 100%;

		iframe {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.shouye {
			.w(150px);
			.h(40px);
			.line-h(40px);
			position: fixed;
			bottom: 15%;
			left: 50%;
			.margin(0,0,0,-75);
			background: rgba(255, 255, 255, .1);
			font-size: @f-size-m;
			color: rgba(255, 255, 255, 0.9);
			border: 2px solid rgba(255, 255, 255, 0.4);
			text-align: center;
			.b-radio(5);
		}
		.filter{
			.hello1{
				position:fixed;
				.top(250);
				.left(150);
				color:#fff;
				margin:0 auto;
				display:block;
				text-align:center;
				white-space:nowrap;
				font-family:'Times New Roman';
				font-size:30px;
			}
			.hello{
				position:fixed;
				.top(300);
				.left(50);
				color:#fff;
				display:block;
				text-align:center;
				white-space:nowrap;
				font-family:'楷体';
				font-size:36px;
			}
		}
	}
</style>
