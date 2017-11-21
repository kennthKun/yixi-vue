<template>
	<div>
		<nav-header></nav-header>
		<div class="mainBody">
			<section>
				<div class="secondBnnerForDetail" style=" background-image: url(http://static.yixi.tv/background/2015-02-13/9b615a14ee38236299c9d20c1185f805.1240x350.jpg);"></div>
			</section>
			<section class="sbw1240 pdt40 cutline">
				<h2>专题集</h2>
			</section>
			<section class="sbw1240 pdt40">
					<!--base topic list-->
					<ul class="mainTopicList clearfix mb30">
						<!--base topic list cell-->
 						<li class="mainTopicListCell" v-for = "(item,index) in ContentList" v-if = "index <= 19">
							<div class="topicImg" v-bind:style="{backgroundImage: 'url(' +item.background+ ')'}">
							<div class="wordBg"></div>
							<span class="title">{{item.title}}</span>
							<span class="date">{{item.lectures.time}}</span></div>
							<span class="desc">{{item.desc}}</span>
 							<span class="watchTitle">您可以看到以下讲者的视频</span>
							<ul class="mainTopicHeadList clearfix">
								<li>
									<div class="headBox"><img :src=item.lectures[0].lecturer.pic></div>
									<span class="name">{{item.lectures[0].lecturer.nickname}}</span>
								</li>
							</ul>
							<a href="http://yixi.tv/album/183" class="mainTopicListButton">查看详细内容</a>
						</li>
						<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
						  ...
						</div>
					</ul>
        </section>
        <div class="pageSelectBox">
					<div class="pageSelectList">
						<a href="" class="disabled">&laquo;</a>
						<a href="" class="active">1</a>
						<a href="http://yixi.tv/albums?page=2">&raquo;</a>        
					</div>
				</div>
		</div>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import NavHeader from '@/components/NavHeader'
	import NavFooter from '@/components/Footer'
	export default {
	  name: 'special',
	  data() {
	  		return {
	  			ContentList:[],
	  			busy:true,
	  			page:1,
	  			pagesize:8,
	  		}
	  },
	  mounted: function(){
	  	this.getContentList();
	  },
	  components: {
	  		NavHeader,
	  		NavFooter
	  },
	  methods: {
	  		getContentList(){
	  			let param = {
	  				page:this.page,
	  				pagesize:this.pagesize
	  			}
	  			this.$http.get("/album").then((result)=>{
					console.log(result)
	  				let index = result.data.data.length
	  				let res = result.data.data;
					this.ContentList = res;
					console.log(this.ContentList)
	  			})
	  		},
	  		loadMore(){
//	  			console.log(6666666)
//	  			this.busy = true;
	  			setTimeout(() => {
//	        for (var i = 0, j = 10; i < j; i++) {
//	          this.data.push({ name: count++ });
//	        }
//	        this.busy = false;
					console.log(111111)
	      }, 1000);
	  		}
	  }
	}
</script>

<style>
/*顶部图片*/
.mainBody {
  position: relative;
}
section {
  display: block;
  clear: both;
}
.secondBnnerForDetail {
  width: 100%;
  height: 350px;
  max-width: 1240px;
  margin: 0 auto;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.cutline {
    border-bottom: 1px solid #aaa;
}
.pdt40 {
    padding: 40px 0px;
}
.sbw1240 {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
}
h2 {
    font-size: 3em;
    line-height: 40px;
    display: inline-block;
    font-weight: 300;
}
/*主体*/
.pdt40 {
    padding: 40px 0px;
}
.sbw1240 {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
}
.mainTopicList {
    width: 100%;
}
.mb30 {
    margin-bottom: 30px;
}
.clearfix {
}
.mainTopicListCell {
    width: 49.5%;
    box-sizing: border-box;
    background-color: #f2f2f2;
    margin: 0.2%;
    float: left;
    text-align: center;
    box-shadow: 0px 1px 2px #bbb;
    border: 1px solid #fff;
    min-height: 614px;
}
.mainTopicListCell .topicImg {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    height: 90px;
    padding-top: 170px;
    position: relative;
}
.mainTopicListCell .topicImg .wordBg {
    position: absolute;
    bottom: 0px;
    background-color: #000;
    opacity: 0.2;
    width: 100%;
    height: 90px;
}
.mainTopicListCell .topicImg .title {
    display: block;
    width: 100%;
    color: #fff;
    text-shadow: 0px 1px 2px #333;
    text-align: center;
    font-size: 2em;
    line-height: 2em;
    padding: 10px 0px 5px 0px;
    position: relative;
}
.mainTopicListCell .topicImg .date {
    font-size: 1.3em;
    text-align: center;
    display: block;
    color: #dedede;
    position: relative;
}
.mainTopicListCell .desc {
    font-size: 1.6em;
    line-height: 1.5em;
    text-align: justify;
    padding: 20px 10px 0px 10px;
    min-height: 110px;
    display: block;
    position: relative;
    overflow: hidden;
}
.watchTitle {
    border-top: 1px dashed #dedede;
    display: block;
    font-size: 1.6em;
    text-align: center;
    color: #999;
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px 10px;
}
.mainTopicHeadList {
    max-width: 360px;
    display: inline-block;
    margin: 0 auto;
}
.mainTopicHeadList li {
    width: 20%;
    box-sizing: border-box;
    width: 72px;
    padding: 0px 5px;
    float: left;
    min-height: 58px;
}
.mainTopicHeadList .headBox {
    border: 2px solid #fff;
    box-shadow: 0px 1px 2px #666;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
}
.mainTopicHeadList .headBox img {
    width: 100%;
    float: left;
}
.mainTopicHeadList .name {
    width: 100%;
    display: block;
    font-size: 1.2em;
    line-height: 1.4em;
    height: 2.8em;
    color: #666;
    word-break: break-all;
    padding: 10px 0px;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.mainTopicListButton:link, .mainTopicListButton:visited {
    width: 100%;
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 1.8em;
    text-align: center;
    background-color: #f2f2f2;
    border-top: 1px solid #e27d7d;
    color: #e27d7d;
}
a:link, a:visited {
    text-decoration: none;
    color: #333;
}
.pageSelectBox {
    padding-top: 20px;
    width: 100%;
}
.pageSelectList {
    margin: 0 auto;
    display: block;
    line-height: 40px;
    text-align: center;
}
.pageSelectList a:link, .pageSelectList a:visited {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    margin: 0px 10px;
    color: #fff;
    font-size: 1.3em;
}
a:link, a:visited {
    text-decoration: none;
    color: #333;
}
.pageSelectList a.active {
    background-color: #cc3434;
    color: #fff;
    cursor: default;
}
.pageSelectList a:link, .pageSelectList a:visited {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    margin: 0px 10px;
    color: #fff;
    font-size: 1.3em;
}
</style>