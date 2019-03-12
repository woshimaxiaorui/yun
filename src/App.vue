<template>
	<div id="app" v-on:touchmove.prevent>
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default {
		name: 'App',
		components: {
			
		}
	}
</script>

<style lang="less">
	@import '~style/index.less';
	#app {
		/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px; */
		height: 100%;
	}
	
</style>
