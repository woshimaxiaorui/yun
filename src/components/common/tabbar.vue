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
						path:'index',
						name:'Index',
						text:'首页'
					},
					{
						path:'classificationShow',
						name:'ClassificationShow',
						text:'分类'
					},
					{
						path:'ourSever',
						name:'OurSever',
						text:'服务'
					},
					{
						path:'contactUs',
						name:'ContactUs',
						text:'留言'
					}
				]
			};
		}
	}
</script>

<style>

</style>
