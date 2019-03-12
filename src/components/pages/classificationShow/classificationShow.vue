<template>
	<div class="classification-show">
		<!-- <div class="group">
			<p v-for="(item,index) in groupList" :key="index">
				{{item.title}}
			</p>
			<p>
				城市
			</p>
			<p>
				校园
			</p>
			<p>
				房产
			</p>
		</div> -->
		<div class="wrapper">
			<div class="content">
				
				<dl class="show" v-for="(item,index) in groupList" :key="index">
					<dt>-- {{item.title}} --</dt>
					<dd>
						<div class="demo" v-for=" (it,i) in groupList[index].list" :key="i">
							<p class="it-img" @click="showDemo(it.href)">
								<img :src=" '../../../static/img/' + it.img" :alt="it.name">
							</p>
							<p class="it-name">
								{{it.name}}
							</p>
						</div>
					</dd>
				</dl>
				
			</div>
			<!-- you can put some other DOMs here, it won't affect the scrolling -->
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				groupList : []
			};
		},
		created(){
			let groupdatarUrl = "../../../../static/data/groupData.json";
			this.$axios.get(groupdatarUrl).then((resObj) => {
				this.$nextTick(() => {
					this.groupList = resObj.data;
					// console.log("",this.groupList)
				})
			})
		},
		mounted(){
			// console.log("",this.groupList)
// 			let scrollGroup = new BScroll('.wrapperGroup',{
// 				probeType: 3,
// 				scrollX : true,
// 				click : true
// 			});
			let scroll = new BScroll('.wrapper',{
				probeType: 3,
				click : true
			});
			// scroll.on('scroll',this.onscroll);
		},
		methods :{
			showDemo(href){
				// console.log(href)
				this.$router.push({
					name : 'ShowDemoInfo',
					params : {
						href
					}
				})
			}
				
		}
		
		
	}
</script>

<style lang="less">
	@import '~style/index.less';
	*{}
	.classification-show {
		width:100%;
		position: fixed;
		.top(44);
		.bottom(44);
		.padding(0,0,5,0);
		.group{
			overflow-x: auto;
			background:@other-color;
			.h(43);
			display: flex;
			.padding(0,15,0,15);
			p{
				font-size:@f-size-sm;
				flex: 1;
				.line-h(44);
				text-align: center;
				border-bottom:1px solid #999999;
			}
		}
		.wrapper{
			height: 100%;
			overflow: hidden;
			.content{
				.padding(0,0,40,0);
				.show{
					font-size:@f-size-m;
					dt{
						.h(40);
						.line-h(40);
						.padding(0,15,0,15);
						color:@s-title-color;
						text-align: center;
					}
					dd{
						display: flex;
						justify-content: space-around;
						.w(375);
						.padding(0,10,0,10) ;
						box-sizing: border-box;
						flex-wrap:wrap;
						.demo{
							.margin(0,0,10,0);
							border: 2px solid #CCCCCC;
							.padding(8,8,0,8);
							box-shadow:0 5px 10px #e2e2e2;
							.it-img{
								img{
									.w(150);
									.h(130);
									display: block;
								}
							}
							.it-name{
								.line-h(20);
								font-size:@f-size-s;
								text-align: center;
								color: @s-title-color;
							}
						}
					}
					
				}
			}
			
			
		}
	}
</style>
