<template>
	<div class="tabbar">
		<router-link v-for='(item,index) in tabs' :key='index' :to='item.path' tag='div' active-class='selected'>
		<span :class="item.cl"></span>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs:[
					{
						path:'/home/index',
						name:'Index',
						text:'首页',
						cl:'iconfont icon-shouye'
					},
					{
						path:'/home/classificationShow',
						name:'ClassificationShow',
						text:'分类',
						cl:'iconfont icon-fenlei'
					},
					{
						path:'/home/ourServes',
						name:'OurSever',
						text:'服务',
						cl:'iconfont icon-servicenum'
					},
					{
						path:'/home/contactUs',
						name:'ContactUs',
						text:'留言',
						cl:'iconfont icon-liuyan'
					}
				]
			};
		}
	}
</script>

<style lang="less">
	@import '~style/index.less';
	.tabbar{
		position: fixed;
		.bottom(0);
		.w(375);
		.h(40);
		
		display:flex;
		justify-content: space-around;
		font-size:@f-size-m;
		.line-h(40);
		.b-radio4(5,5,0,0);
		background: @hd-color;
		color: @bg-color;
		span{
			font-size:22px;
		}
	}
	.selected{
		color: yellow;
	}
</style>
