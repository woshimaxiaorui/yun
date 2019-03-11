<template>
	<div class="head">
		<p class="goUp">
			《
		</p>
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
	@import '../../common/style/index.less';
	.head{
		position: fixed;
		.top(0);
		width:100%;
		.h(44);
		background:@hd-color;
		display: flex;
		justify-content: space-around;
		font-size: @f-size-l;
		.goUp{
			.w(50);
		}
	}
</style>
