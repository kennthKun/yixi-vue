<template>
	<div>
		<nav-header></nav-header>
		<nav-banner></nav-banner>
		<div class="mainBody"> 
			<section class="sbw1280 pdt60"> 
			<!--base title start-->
				<div class="baseSectionTitle tw400"><span>最新专题</span></div>
		    <!--base title over-->
		    <ul class="baseTopicList">
					<!--<li v-for="item in ContentList">--> 
					<li v-for="(item,index) in ContentListOne" v-if="index<=1">
					<!--base topic box-->
						<div class="baseTopicBox" v-bind:style="{backgroundImage: 'url(' +item.background+ ')'}" style="height: 360px;"> 
							<!--topic cover start-->
							<div class="topicCover untopicCover" ref="topics" v-on:mouseout="headboxhide(index)" v-on:mouseover="headboxShow(index)">
								<a href="http://yixi.tv/album/183">
									<h2>{{item.title}}</h2>
									<span class="topicDescription">{{item.desc}}</span>
									<div class="headbox"><span class="title">您可以看到以下讲者的视频</span>
										<ul class="topicBoxHeadBoxList">
											<li>
												<div class="baseHeadContent"><img :src=item.lectures[0].lecturer.pic></div>
												<span class="name">{{item.lectures[0].nickname}}</span>
											</li>
										</ul>
									</div>
								</a>
							</div>
							<!--topic cover over-->
							<a href="" class="topicLink" v-on:mouseover="headboxShow(index)" v-on:mouseout="headboxhide(index)">{{item.title}}</a>
						</div>
					</li>
				</ul>
				<div class="clear"></div>
			</section>
			<section class="gray pdt80"> 
        <!--base title start-->
        <div class="baseSectionTitleRed tw400"><span>听君一席话</span></div>
        <!--base title over--> 
        <!--base Paragraph-->
        <div id="quotes" class="paragraphBox"> <span class="baseParagraph">"我的公益开始就是一个感性的过程，那种很理想主义的：想到什么让我一感动一哭我就去做。然后逐渐地我觉得需要一个团队，需要更加专业化，需要更多力量的参与，逐渐我开始在思考，我们的公益应该往哪里走。"</span><span class="name">－王秋扬</span> </div>
    </section>
    
    <!--new lecture section!!!!-->
    <section class="pdt60 sbw1240"> 
			<div class="baseSectionTitle tw400"><span>最新演讲</span></div>
			<ul class="baseVideoList">
				<li v-for="(item,index) in ContentListOne" v-if="index<=5">
					<div class="baseVideoBox">
							<div class="videoContent" v-bind:style="{backgroundImage: 'url(' +item.lectures[0].cover+ ')'}"> 
								<div class="videoCover" ref="vides">
									<a href="http://yixi.tv/lecture/420">
										<div class="videoHeadBox">
											<div class="baseHeadContent videopos"><img :src=item.lectures[0].lecturer.pic></div>
										</div>
										<span class="name">茅明睿</span> 
										<span class="speakersDescription">“城市象限”创始人</span> 
										<ul class="playInfoList">
											<li class="playTime">67428</li>
											<li class="liked">193</li>
											<li class="comment">131</li>
										</ul>
									</a>
								</div>
							</div>
							<span class="videoTitle">{{item.lectures[0].title}}</span>
						</div>
					</li>
				</ul>
        <div class="clear"></div>
    </section>
		</div>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import '@/assets/css/content'
	import NavHeader from '@/components/NavHeader'
	import NavFooter from '@/components/Footer'
	import NavBanner from '@/components/NavBanner'
	export default {
	  name: 'content',
	  data() {
	  		return {
	  			ContentList:[],
	  			ContentListOne:[],
	  		}
	  },
	  mounted: function(){
	  		this.getContentList();
	  },
	  components: {
	  		NavHeader,
	  		NavFooter,
	  		NavBanner
	  },
	  methods: {
	  		getContentList(){
	  			this.$http.get("/album").then((result)=>{
	  				let res = result.data.data;
	  				for(var i=0; i <6; i++){
	  					this.ContentListOne.push(res[i]);
	  				}
	  			})
	  		},
	  		headboxShow(index){
	  			console.log(this.$refs.topics)
				this.$refs.topics[index].style.top = '0px';
	  		},
	  		headboxhide(index){
	  			this.$refs.topics[index].style.top = "-100%";
	  		}
	  }
	}
</script>