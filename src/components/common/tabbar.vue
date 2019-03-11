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
	@import '../../common/style/index.less';
	.tabbar{
		position: fixed;
		.bottom(0);
		width:100%;
		.h(50);
		border-top:1px solid #ccc;
		display:flex;
		justify-content: space-around;
		font-size:@f-size-l;
		.line-h(50);
		.b-radio(10);
		background: @hd-color;
		color: @bg-color;
	}
	.selected{
		color: yellow;
	}
</style>
