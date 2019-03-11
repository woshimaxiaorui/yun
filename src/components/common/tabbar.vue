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
	
</style>
