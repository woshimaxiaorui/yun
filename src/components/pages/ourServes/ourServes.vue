<template>
	<div class="wrapper" ref="wrapper">
	    <div class="content">
	    	<div class="banner">
	    		<img src="static/img/ourservesbanner.jpg" alt="" />
	    	</div>
	    	<div class="box">
	    		<div class="fuwu active">
	    			<h2>我们的服务</h2>
	    			<p>用心服务  诚信经营  行业零风险</p>
	    			<ul>
	    				<li
	    				v-for="(item,index) in picList"
	    				:key="index"
	    				>
	    					<div class="fwImg">
	    						<img :src='item.pics' alt="" />
	    						<h3>{{item.hTxt}}</h3>
	    					</div>
	    					<p>{{item.pTxt}}</p>
	    				</li>
	    			</ul>
	    		</div>
	    		<div class="gongneng active">
	    			<h2>我们的功能</h2>
	    			<p>用心服务  诚信经营  行业零风险</p>
	    			<ul>
	    				<li
	    				v-for="(item,index) in gnList"
	    				:key="index"
	    			    >
	    					<img :src='item.icon'/>
	    					<p>{{item.recommend}}</p>
	    				</li>
	    			</ul>
	    		</div>
	    		<div class="baozhang active">
	    			<h2>我们的保障</h2>
	    			<p>多年诚信经营“零”投诉  选择我们有保障</p>
	    			<div class="tuwen">
	    				<div class="tu">
	    					<img src="static/img/ourservessgd1.png"/>
	    				</div>
	    				<div class="wen">
	    					<div class="biaoti">
	    						<h3>01</h3>
	    						<p>智能化<span>平台化操作</span></p>
	    					</div>
	    					<ul>
	    						<li>平台化标准操作，简单实用；</li>
	    						<li>线上线下实时辅导，那里不会教那里；</li>
	    						<li>平台化标准操作，简单实用；</li>
	    					</ul>
	    				</div>
	    			</div>
	    			<div class="bgImg">
	    				<img src="static/img/ourservesbg.png" alt="" />
	    				<div class="wen">
	    					<div class="biaoti">
	    						<h3>02</h3>
	    						<p>强有力的<span>市场推广</span></p>
	    					</div>
	    					<ul>
	    						<li>跨平台的渠道合作和各种大中型展会进行宣传加深终端客户对；</li>
	    						<li>产品的印象度，同时将终端客户资源开放推送给优秀的合作伴；</li>
	    					</ul>
	    				</div>
	    			</div>
	    			<div class="tuwen">
	    				<div class="tu" id="tu2">
	    					<img src="static/img/ourservessgd2.png"/>
	    				</div>
	    				<div class="wen">
	    					<div class="biaoti">
	    						<h3>03</h3>
	    						<p>专业的<span>销售支持</span></p>
	    					</div>
	    					<ul>
	    						<li>全力配合合作伙伴销售过程当中的各种销售支持和客服支持；</li>
	    						<li>实时的为客户作伴提供解答产品，技术等方面的问答咨询服务；</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    		<div class="shili active">
	    			<h2>我们的实力</h2>
	    			<p>自主研  自主知识产权  您能看到的远远不止于此</p>
	    			<ul>
	    				<li
	    				v-for="(item,index) in zsList"
	    				:key="index"
	    				@click="open(index,$event)"
	    				>
	    				   <img :src="item.photo"/>
	    				</li>
	    			</ul>
	    		</div>
	    		<div class="fwfw">
	    			<img src="static/img/ourservesdt.png" alt="" />
	    		</div>
	    	</div>
    		<div class="showhide" v-show="showflag" >
    			<div class="showbox">
    				<p @click="close">关闭</p>
    				<img :src="showImage"  />
    			</div>
    		</div>
	    </div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	data() {
		return {
			picList:[
				{pics:'static/img/ourservesafter1.png',hTxt:'市场广阔 潜力巨大',pTxt:'市场潜力大适用面广，大到国际政府项目，小到个人店铺，都可深层应用。'},
				{pics:'static/img/ourservesafter2.png',hTxt:'轻松投入 快速启动',pTxt:'一个人、一台电脑、一台单反、一个云台、一个镜头即可快速启动。'},
				{pics:'static/img/ourservesafter3.png',hTxt:'无脑创业 躺着赚钱',pTxt:'公司全程提供线上线下培训，3-5天轻松即可成为行业老手。'},
				{pics:'static/img/ourservesafter4.png',hTxt:'滴水投入 涌泉回报',pTxt:'回报率高，只需注册成为我们会员，全程线上线下辅导实现轻松收益。'},
				{pics:'static/img/ourservesafter5.png',hTxt:'快速上手 迅速收益',pTxt:'项目制作周期短，从拍摄到上线1-2天即可搞定，轻松赚钱。'},
				{pics:'static/img/ourservesafter6.png',hTxt:'贴近政策 永不落伍',pTxt:'贴近国家政策支持，容易受风投公司青睐，公司全程扶持，大小客户通吃。'}
			],
			gnList:[
				{icon:'static/img/ourservesicon1.jpg',recommend:'个性化的全景场景设置，让每个终端客户都可实现灵活的性定制化展示需求。'},
				{icon:'static/img/ourservesicon2.jpg',recommend:'社交互动一键分享，留言，实时通讯，带客实时预览，弹幕交流实时互动。'},
				{icon:'static/img/ourservesicon3.jpg',recommend:'跨平台打通多渠道接口服务，让终端客户轻松实现线上渠道的直达展示，扩大宣传力度。'},
				{icon:'static/img/ourservesicon4.jpg',recommend:'实用性创新性营销活动，让全景案例与功能深度结合，快速实现流量增长效果转化。'},
				{icon:'static/img/ourservesicon5.jpg',recommend:'VR短视频拍摄、直播等定制化服务，帮助企业以新颖的创意专题、宣传片等进行融入式宣传实现沉浸式影视级体验。'},
				{icon:'static/img/ourservesicon6.jpg',recommend:'场景AR功能让营销更吸引眼球，实现线上多方位互动以强烈的交互效果实现深度营销。'},
				{icon:'static/img/ourservesicon7.jpg',recommend:'轻松在线构建小程序，提升流量，用户，销售额，加强CRM管理系统，持续增加用户的重复性消费。'},
				{icon:'static/img/ourservesicon8.jpg',recommend:'强大的3D环物功能，可轻松将产品360度/720度展示出来，语音特点轻松嵌入搭载场景介绍实现全互动式营销，让终端用户满足场景+产品的全方位展示。'}
			],
			zsList:[
			    {photo:'static/img/ourserveshonor1.png'},
			    {photo:'static/img/ourserveshonor2.png'},
			    {photo:'static/img/ourserveshonor3.png'},
			    {photo:'static/img/ourserveshonor4.png'}
			],
			showflag:false,
			showImage:''
		}
	},
	methods:{
		open(index,event){
			this.showflag=true;
			this.showimg(index)
		},
		close(){
			this.showflag=false;
		},
		showimg(index){
			this.showImage = this.zsList[index].photo;
		}
	},
	mounted(){
		let elobj = this.$refs.wrapper;
		new BScroll(elobj,{click:true});
		
	}
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.wrapper{
	position: fixed;
	.w(375);
	.top(44);
	.bottom(40);
	overflow:hidden;
	background:@bg-color;
	.content{
		.banner{
			.w(375);
			.h(80);
			background:blue;
			img{
				width:100%;
				.h(80);
			}
	    }
	    .box{
	    	.w(375);
	    	.fuwu{
	    		ul{
	    			.padding(0,20,0,20);
	    			.w(335);
	    			li{
	    				float:left;
	    				list-style: none;
	    				.margin(10,8,10,9);
	    				.w(150);
	    				box-shadow: 0 5px 10px rgba(226,226,226,1);
	    				.fwImg{
	    					.w(150);
	    					.h(108);
	    					position:relative;
	    					img{
	    						width: 100%;
	    					}
	    					h3{
	    						width: 100%;
	    						height: 100%;
	    						.line-h(108);
	    						font-size:@f-size-m;
	    						color:rgba(255,255,255,1);
	    						position: absolute;
	    						background:@s-title-color;
	    						.top(0);
	    						.left(0);
	    						text-align: center;
	    						font-weight: normal;
	    					}
	    				}
	    				p{
	    					.w(140);
	    					text-align: left;
	    					.padding(8,5,8,5);
	    					.line-h(18);
	    				}
	    			}
	    		}
	    	}
	    	.gongneng{
	    		clear: both;
	    		ul{
	    			.padding(0,20,0,20);
	    			.w(335);
	    			li{
	    				.w(335);
	    				.h(68);
	    				list-style: none;
	    				display: flex;
	    				img{
	    					.margin(6,10,6,0);
	    				}
	    				p{
	    					text-align: left;
	    				}
	    			}
	    		}
	    	}
	    	.baozhang{
	    		.w(375);
	    		.tuwen{
	    			.w(355);
	    			.padding(0,10,15,10);
	    			.h(120);
	    			display: flex;
	    			.tu{
	    				.w(160);
	    				img{
	    					width:100%;
	    					.h(120);
	    				}
	    			}
	    		}
	    		.bgImg{
	    			.w(375);
	    			.padding(0,0,15,0);
	    			position: relative;
	    			img{
	    				width: 100%;
	    				.h(120);
	    			}
	    			.wen{
	    				position: absolute;
	    				top: 0;
	    				.left(20);
	    			}
	    		}
	    	}
	    	.shili{
	    		.padding(0,20,20,20);
	    		.w(335);
	    		ul{
	    			.w(335);
	    			display: flex;
	    			justify-content: space-between;
	    			li{
	    				.w(80);
	    				list-style:none;
	    				img{
	    					width: 100%;
	    				}
	    			}
	    		}
	    	}
	    	.fwfw{
	    		.padding(10,20,20,20);
	    		.w(335);
	    		img{
	    			width: 100%;
	    		}
	    	}
	    }
	}
	.bnr{
		clear: both;
	}
	.active{
		.padding(30,0,0,0);
		h2{
		    font-size:@f-size-l;
		    font-weight: 600;
		    color:#333;
		    text-align: center;
		}
		p{
			font-size:@f-size-s;
			color: #666666;
			text-align: center;
			.padding(10,0,10,0);
		}
	}
	.wen{
		.w(195);
		.h(120);
		.biaoti{
			display: flex;
			.h(36);
			h3{
				color:rgba(198,199,204,1);
				font-size: @f-size-l;
				.line-h(36);
				.margin(0,10,0,0);
			}
			p{
				color: rgba(51,51,51,1);
				font-weight: 500;
                font-size:@f-size-sm;
				span{
					color:#0454F6;
				}
			}
		}
		ul{
			li{
				width:100%;
				font-size:@f-size-s;
				list-style: none;
				color:rgba(102,102,102,1);
			}
		}
	}
	#tu2{
		.w(160);
		.padding(10,10,10,10);
		
		img{
			width: 100%;
			.h(100);
		}
	}
	.showhide{
		width: 100%;
		height: 100%;
		background:rgba(0, 0, 0, 0.4);
		position: absolute;
		top:0;
		left: 0;
		z-index: 999;
        .showbox{
			position: absolute;
			.bottom(100);
			.left(38);
			.w(300);
			.h(450);
			p{
				font-size:@f-size-l;
				.h(30);
				.line-h(30);
				color:#fff;
				text-align: center;
			}
			img{
				.w(300);
			    .h(420);
			}
        }
	}
}
</style>
