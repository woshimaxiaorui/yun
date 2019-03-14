<template>
	<div class="index" id="wrapper">
		<div class="content">
			<Banner></Banner>
			<div class="main">
				<div class="m-title">
					<h3>功能服务</h3>
					<p>云景720行业内一马当先，集多功能应用制作发布一体化门户平台</p>
				</div>
				<div class="m-list">
					<dl v-for="(item,index) in mlist"
						:key='index'
					>
						<dt><img :src="item.icon" width="30"></dt>
						<dd>
							<h3>{{item.title}}</h3>
							<ul>
								<li v-for="(group,index) in item.con"
								:key="index"
								>
									{{group}}
								</li>
							</ul>
						</dd>
					</dl>
				</div>
			</div>
			<div class="anli">
				<div class="an-title">
					<h3>汇集案例展示</h3>
					<div class="an-tab">
						<mt-button @click="click($event,index)" v-for="(item,index) in btnlist" :key="index" :type="activeClass(index)">{{item}}</mt-button>
					</div>
				</div>
				<mt-tab-container v-model="active">
					<mt-tab-container-item id="tab-container1">
						<!-- <mt-cell title="tab-container 1"> -->
						<div class="anli-list" v-for="(item,index) in anlist"
							:key="index"
						>
							<img :src="item.img" class="anli-img" @click="gopage(item.href)">
							<span>{{item.txt}}</span>
						</div>	
						<!-- </mt-cell> -->
					</mt-tab-container-item>
					<mt-tab-container-item id="tab-container2">
						<div class="anli-list" v-for="(item,index) in anlist1"
							:key="index"
						>
							<img :src="item.img" class="anli-img" @click="gopage(item.href)">
							<span>{{item.txt}}</span>
						</div>	
					</mt-tab-container-item>
					<mt-tab-container-item id="tab-container3">
						<div class="anli-list" v-for="(item,index) in anlist2"
							:key="index"
						>
							<img :src="item.img" class="anli-img" @click="gopage(item.href)">
							<span>{{item.txt}}</span>
						</div>	
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
			<div class="zuozhe">
				<div class="z-title">
					<h3>活跃的创作者</h3>
					<p>与您分享平台活跃度较高的优秀全景爱好者</p>
				</div>
				<Lunbo></Lunbo>
			</div>
			<div class="yunjing">
				<div class="y-title">
					<h3>云景中国</h3>
					<p>云景看世界  世界看云景</p>
				</div>
				<div class="y-video">
					<div class="y-con">
						<img src="static/img/bofang.svg" v-show="videoshow" @touchstart="videoclick">
						<video class="video-show" autobuffer autoloop loop controls ref="videos">
							<source src="http://www.yunjing720.com/themes/yunjing720/public/assets/video/yunjing720.mp4">
						</video>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
import BScroll from 'better-scroll'
import 'mint-ui/lib/style.css'
import Banner from '@/components/common/banner'
import Lunbo from './lunbo'
	export default {
		data() {
			return {
				btnlist:['城市','景观','航拍'],
				btnIndex:0,
				mlist:[
					{icon:'static/img/vr.png',title:'VR全景',con:['分享式全景，制作，高缓存','技术处理，全套数字系统适',' 配于各终端']},
					{icon:'static/img/display.png',title:'跨平台展示',con:['系统深度功能定制开发，强','大站外嵌入功能，自由嵌入',' 到各大平台网站']},
					{icon:'static/img/function.png',title:'功能应用',con:['便捷接口化服务，一键设置','实现个性化展示，海量插件制作',' 功能调用']},
					{icon:'static/img/experience.png',title:'沉浸式体验',con:['作营销一体化服务，强大的交','互体验，深度感受视 听 触觉',' 全方位的用户体验']}
				
				],
				activelist:[{'城市':'tab-container1','景观':'tab-container2','航拍':'tab-container3'}],
				active:'tab-container1',
				anlist:[{img:'static/img/city1.jpg',txt:'本色摄影',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=5c3e4753f80f2c1644c15bafa4f584a5'},{img:'static/img/city2.png',txt:'华能贵诚信托',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=92a3d72b5563dc2044fbfba5f4a40807'},{img:'static/img/city3.jpg',txt:'山东费县',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=ad50260b6c43ee1192c14fd68b041b9a'},{img:'static/img/city4.png',txt:'聚焦儿童摄影',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=b98976b4796903d3fcd92376ff7b3575'}],
				anlist1:[{img:'static/img/fj1.png',txt:'颐和园',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=99e1ad12f4f22630f5cdf86f2a8b2142'},{img:'static/img/fj2.png',txt:'青海坎布拉景区',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=6e4f871422d3e5a94e1ca5c2dc373793'},{img:'static/img/fj3.jpg',txt:'起凤小学测试',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=5d81360c3656ef806b67a241690abb84'},{img:'static/img/fj4.jpg',txt:'达拉特旗',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=a03fd78f2698e9967fa13a0aa5b11c95'}],
				anlist2:[{img:'static/img/hp1.jpg',txt:'青海',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=42896ddb0d5414d3fe27a3509257247e'},{img:'static/img/hp2.jpg',txt:'葛各庄全景',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=2a7515d7e2be9f507a2410e5093cff2a'},{img:'static/img/hp3.jpg',txt:'西狄头村全景',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=942be3db1a4ac4022e74e93a7a32cfed'},{img:'static/img/hp4.jpg',txt:'胡各庄全景',href:'http://www.yunjing720.com/index.php?s=tour/index/index&tid=8c93af276cddde1716ed21afa7e02644'}],
				videoshow:true
			}
		},
		components:{Banner,Lunbo},
		methods:{
			click(e,index){
				// console.log(e,index)
				this.btnIndex = index
				this.active = this.activelist[0][e.target.innerText]
			},
			activeClass(index){
				return index == this.btnIndex ? 'primary' : 'default'
			},
			videoclick(){
				// console.log(this.$refs.videos)
				this.$refs.videos.style.display = 'block'
				return this.videoshow = !this.videoshow
			},
			gopage(href){
				// console.log(href)
				this.$router.push({
					name : 'ShowDemoInfo',
					params : {
						href
					}
				})
			}
		},
		mounted(){
			setTimeout(()=>{
				this.scroll = new BScroll('#wrapper',{
					click:true
				})
			},500)
		}
	}
</script>

<style lang='less' scope>
@import '~style/index.less';
.index{
	position: fixed;
	.top(44);
	.bottom(40);
	.main{
		.w(375);
		.m-title{
			.h(50);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h3{
				font-size: @f-size-l;
				text-align: center;
				font-weight: 600;
				.margin(20,0,10,0)
			}
			p{
				font-size:12px;
				text-align: center;
				.margin(0,0,5,0)
			}
		}
		.m-list{
			// display: flex;
			// justify-content: center;
			// align-items: center;
			width: 100%;
			overflow-x:auto;
			.margin(10,0,0,0);
			dl{
				width: 50%;
				text-align: center;
				float: left;
				dd{
					h3{
						font-size: @f-size-sm;
						font-weight: 600;
						.margin(0,0,10,0)
					}
					li{
						list-style: none;
						font-size: @f-size-s;
					}
				}
			}
		}

	}
	.anli{
		// position: relative;
		.an-title{
			text-align: center;
			// position:relative;
			// top:0;
			// left:0;
			h3{
				font-size: @f-size-l;
				.margin(20,0,10,0)
			}
			.an-tab{
				display: flex;
				align-items: center;
				justify-content: center;
				.h(40);
				.mint-button{
					.h(30);
					font-size: @f-size-sm;
					.margin(0,10,0,10)
				}
			}
		}
		.mint-tab-container-item{
			.padding(0,5,0,5)
		}
		.anli-list{
			float: left;
			position:relative;
			.margin(0,5,0,0);
			.anli-img{
				.w(180);
				.h(130);
				
			}
			span{
				position:absolute;
				.bottom(10);
				display: block;
				width: 100%;
				font-size: @f-size-s;
				color:#fff;
				text-align: right;
				background:rgba(0,0,0,0.29);
			}
		}
	}
	.zuozhe{
		text-align: center;
		h3{
			font-size: @f-size-l;
			.margin(20,0,10,0)
		}
		p{
			font-size:12px;
			.margin(0,0,5,0)
		}
	}
	.yunjing{
		text-align: center;
		.h(300);
		background:url('../../../../static/img/videobg.jpg');
		background-size: cover;
		h3{
			font-size: @f-size-l;
			.margin(20,0,10,0)
		}
		p{
			font-size:12px;
			.margin(0,0,5,0)
		}
		.y-video{
			width: 100%;
			.h(240);
			display: flex;
			justify-content: center;
			align-items: center;
			.y-con{
				width:80%;
				height:80%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 5px;
				background:rgba(255,255,255,0.6);
				.video-show{
					width: 100%;
					height:100%;
					display:none;
				}
				
			}
		}
	}
}
</style>
