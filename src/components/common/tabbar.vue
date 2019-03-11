<template>
	<div class="tabbar">
		<router-link v-for='(item,index) in tabs' :key='index' :to='item.path' tag='div' active-class='selected'>
		<span>{{item.text}}</span>
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
						text:'首页'
					},
					{
						path:'/home/classificationShow',
						name:'ClassificationShow',
						text:'分类'
					},
					{
						path:'/home/ourServes',
						name:'OurSever',
						text:'服务'
					},
					{
						path:'/home/contactUs',
						name:'ContactUs',
						text:'留言'
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
	}
	.selected{
		color: yellow;
	}
</style>
