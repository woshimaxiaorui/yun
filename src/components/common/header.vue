<template>
	<div class="head">
		<!-- <p class="goUp">
			《
		</p> -->
		<p class="logo">
			<img src="../../assets/img/logoBottom.png" alt="">
		</p>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	@import '~style/index.less';
	.head{
		position: fixed;
		.top(0);
		.w(375);
		.h(44);
		background:@hd-color;
		display: flex;
		justify-content: space-between;
		font-size: @f-size-l;
		.line-h(44);
		z-index: 10;
// 		.goUp{
// 			.w(20);
// 			.padding(0,10,0,10);
// 			color: @bg-color;
// 		}
		.logo{
			flex: 1;
			align-self: center;
			img{
				.h(22);
				display: block;
				margin:0 auto ;
			}
		}
	}
	
</style>
