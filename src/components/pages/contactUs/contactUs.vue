<template>
	<div class="contact-us" ref='cu-wrap'>
		<div class="cu-bbs" @func='loadcomment'>
			<ul>
				<li>
					<input type="hidden"/>
				</li>
				<li class="cu-us">YourName：<input type="text" v-model="username" /></li>
				<li>
					<textarea 
						class="cu-txt" 
						v-model="content"
					>
					</textarea>
				</li>
				<li class="cu-btn"><span @click="postcomment">Commit</span></li>
			</ul>
		</div>
		<div class='cu-info' >
			<div class="cui-con" @upda='params()'>
				<div class="cuic-tnt" v-for="(items,index) in list" :key='index'>
					<div class="cut-user">USER:{{items.user}}</div>
					<div class="cut-cont"> {{items.content}}</div>
					<ul>
						<li class="cut-time">{{items.id}}</li>
						<li class="cut-act">
							<span @click="deletecomment(items.id)">DELETE</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				username:'',
				content:'',
				list:[]
			};
		},
		methods:{
			postcomment(){
				let myDate = new Date();
				let time = myDate.toLocaleString( );
				let comment = {'id': time,'user': this.username,'content': this.content};
				let list = JSON.parse(localStorage.getItem('cmts') || '[]');
//				console.log(comment,list)
				list.unshift(comment);
				localStorage.setItem('cmts',JSON.stringify(list));
				this.username = this.content = null;
				this.list = JSON.parse(localStorage.getItem('cmts') || '[]');
				this.$emit('func');
			},
			loadcomment(){
				let list = JSON.parse(localStorage.getItem('cmts') || '[]');
				this.list = list;
			},
			deletecomment(id){
				let list = JSON.parse(localStorage.getItem('cmts') || '[]');
				for(let i=0;i<list.length;i++){
					if(list[i].id == id){
						list.splice(i,1);
						localStorage.setItem('cmts',JSON.stringify(list));
						this.list = list;
						// console.log(this.list)
					}
				}
				
			}
		},
		computed:{
			params(){
				return function(){
						let list = JSON.parse(localStorage.getItem('cmts') || '[]');
						return this.list = list;
				}
			}
		},
		created(){
			setTimeout(()=>{
				this.$nextTick(this.loadcomment());
			},500)
//			localStorage.setItem('cmts','[]');
		},
		mounted(){
			new BScroll('.cu-info',{probetype:3,click:true})
		}
	}
</script>

<style lang="less" scoped>
	@import '~style/index.less';
	.contact-us{ position: fixed; .top(44); .right(0); .bottom(50); .left(0);
		li{list-style: none;}
		.cu-bbs{ .w(375); .h(200); box-sizing: border-box; .padding(10,20,10,20);border-bottom: 1px solid #999;
			.cu-txt{.w(335); .h(100); border: 1px solid #999; font-size: @f-size-l;}
			.cu-us{ .h(35); font-size: @f-size-l; .line-h(35); .margin(0,0,5px,0);
				input{ .h(20); border: 1px solid #999; background: rgba(255,255,255,0.3);}
			}
			.cu-btn{ 
				span{ .w(75); .h(28); background: @hd-color; color: #fff; float: right; font-size: @f-size-s; text-align: center; .line-h(28);}
			}
		}
		.cu-info{
			position: fixed; .top(244); .right(0); .bottom(50); .left(0);
			overflow: hidden; .padding(15px,0,0,0);
			.cui-con{
				.cuic-tnt{ .w(375); border-bottom: 1px dashed #999; box-sizing: border-box; .padding(0,12px,0,12px); .margin(0,0,10px,0);
					.cut-user{ .w(375); .h(35); font-size: @f-size-sm; .line-h(35); color: #666;}
					.cut-cont{ font-size: @f-size-l; color: #000;}
					ul{ .h(35); .line-h(35);
						.cut-time{float: left; font-size: @f-size-s; color: #ccc;}
						.cut-act{float: right; font-size: @f-size-sm; color: #666;}
					}
				}
			}
		}
	}
</style>
