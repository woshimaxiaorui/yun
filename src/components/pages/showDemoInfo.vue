<template>
	
	<div class="show-demo">
		<div class="showdemo-head">
			<p class="goUp" @click="goBack()">
				<span class="iconfont icon-ffanhui-" style="font-size:30px"></span>
			</p>
			<!-- <p  class="logo">
				<img src="../../assets/img/logoBottom.png" alt="">
			</p> -->
		</div>
		<div class="show-iframe">
			<p class="showload" v-if="showLoadding">
				<img src="../../../static/img/timg.gif" alt="">
			</p>
			<iframe ref="myIframe" :src="stateUrl" frameborder="0"></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showSrc : "",
				showLoadding:true
			};
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			saveUrlStore(){
				this.$store.commit('saveIframeUrl',this.$route.params);
				// console.log("????",this.$store.state.aboutIframe.iframUrl.href)
			}
		},
		mounted(){
			this.$refs.myIframe.src = this.$store.state.aboutIframe.iframUrl.href;
			this.$refs.myIframe.contentWindow.location.reload(true);
			this.$refs.myIframe.onload = ()=>{
				// console.log(11111);
				this.showLoadding = false;
			}
			this.saveUrlStore();
			
		},
		computed: {
			showUrl(){
				// console.log(this)
				return this.$route.params
			},
			stateUrl(){
				// console.log("seturl",this.$store.state.aboutIframe.iframUrl.href)
				return this.$store.state.aboutIframe.iframUrl.href;
			}
		},
	}
</script>

<style lang="less" scoped>
	@import '~style/index.less';
	.show-demo{
		height:100%;
		
		.show-iframe{
			position: fixed;
			height: 100%;
			.top(0);
			.bottom(0);
			.showload{
				position: fixed;
				.top(40);
				.bottom(0);
				.w(375);
				img{
					width: 100%;
					height: 100%;
				}
			}
			iframe{
				.w(375);
				height: 100%;
			}
		}
		
		
		.showdemo-head{
			// background:@hd-color;
			position:fixed;
			.h(40);
			z-index: 10;
			display: flex;
			.goUp{
				.w(60);
				.line-h(44);
				.padding(0,10,0,16);
				color: @bg-color;
				font-size: @f-size-m;
			}
// 			.logo{
// 				flex: 1;
// 				align-self: center;
// 				img{
// 					.h(22);
// 					display: block;
// 					.margin(0,0,0,100);
// 				}
// 			}
		}
		
	}
	
</style>
