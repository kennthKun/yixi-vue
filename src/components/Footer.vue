<template>
	<div>
		<div class="footer clearfix">
			<div class="footerBox">
				<div class="baseFootBox newCommom">
					<span class="title">最新评论</span>
					<div class="footCutLine"></div>
					<ul class="newCommonList">
             <li class="clearfix">
		            <div class="headBox">
		                <div class="head"><img src="../assets/head_black90@2x.png"></div>
		            </div>
		            <div class="wordBox">
		                <span class="name">599ad58902f4b</span>
		                <span class="common"><a href="http://yixi.tv/lecture/420">无法播放，差评。</a></span>
		            </div>
              </li>
           </ul>
				</div>
				<div class="baseFootBox contact">
					<span class="title">一席@关联</span>
           <div class="footCutLine"></div>
           <ul class="baseFootList">
              <li><a href="http://www.youku.com/u/UNDg0NTA2OTY0/videos" target="_blank">一席@优酷</a></li>
              <li><a href="http://weibo.com/yixiclub" target="_blank">一席@微博</a></li>
              <li><a href="http://site.douban.com/173709/" target="_blank">一席@豆瓣</a></li>
              <li><a href="https://www.facebook.com/pages/%E4%B8%80%E5%B8%AD/510008329046931"
                     target="_blank">一席@Facebook</a></li>
              <li class="footWeixin"><a href="">一席@微信</a>
                  <div>请在微信中搜索公众号<span>yixiclub</span>关注我们。<br/>谢谢。</div>
              </li>
          </ul>
				</div>
				<div class="baseFootBox QA">
					<span class="title">支持</span>
           <div class="footCutLine"></div>
           <ul class="baseFootList">
              <li><a href="http://yixi.tv/about">常见问题</a></li>
              <li><a href="http://yixi.tv/activities">活动时间表</a></li>
              <li><a href="http://yixi.tv/feedback" target="_blank">用户反馈</a></li>
	          </ul>
				</div>
				<div class="baseFootBox downloadApp">
					<span class="title">app</span>
           <div class="footCutLine"></div>
           <div class="coedDownloadBox">
              <div class="comingCover"></div>
              <div class="iosHead">for&nbsp;iOS</div>
              <div class="bitMapBox"><img src="../assets/Bitmap_ios.png"></div>
              <a href="https://itunes.apple.com/cn/app/yi-xi/id912814691?mt=8" class="itunesDownloadButton"
                 target="_blank"></a>
           </div>
	          <div class="coedDownloadBox ml10">
	              <div class="comingCover"></div>
	              <div class="androidHead">for&nbsp;Android</div>
	              <div class="bitMapBox"><img src="../assets/bitmap_android.png"></div>
	              <a href="#" class="androidDownloadButton"></a>
	          </div>
				</div>
			</div>
		</div>
		<div class="lastFoot">
      <div class="lastFootBox">
        <ul class="lastList">
          <li class="weibo"><a href="http://weibo.com/yixiclub"></a></li>
          <li class="youku"><a href="http://www.youku.com/u/UNDg0NTA2OTY0/videos"></a></li>
          <li class="facebook"><a href="https://www.facebook.com/pages/%E4%B8%80%E5%B8%AD/510008329046931"></a></li>
        </ul>
      <span><a href="#">&copy;</a>&nbsp;2014&nbsp;一席.&nbsp;京ICP备13001689号-1</span></div>
    </div>
	</div>
</template>

<script>
	export default {
	  name: 'NavFooter'
	}
</script>

<style>
	.footer {
    width: 100%;
    clear: both;
    background-color: #666;
	}
	.footerBox {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 0px;
	}
	.baseFootBox {
    float: left;
    box-sizing: border-box;
    clear: right;
	}
	.newCommom {
    width: 40%;
    padding: 0px 0.5%;
    min-width: 300px;
	}
	.footerBox .contact {
    width: 16%;
    padding: 0px 0.5%;
	}
	.footerBox .QA {
    width: 16%;
    padding: 0px 0.5%;
	}
	.footerBox .downloadApp {
    width: 24%;
    float: right;
    padding: 0px 0.5%;
    width: 300px;
	}
	.footCutLine {
    width: 100%;
    margin-top: 5px;
    border-top: 1px solid #999;
    height: 10px;
    clear: both;
	}
	.newCommom .title {
    background-image: url(../assets/common_foot.png);
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    line-height: 2em;
    font-size: 1.4em;
    color: #ccc;
    padding-left: 30px;
    box-sizing: border-box;
	}
	.contact .title {
    background-image: url(../assets/contect_foot.png);
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    line-height: 2em;
    font-size: 1.4em;
    color: #ccc;
    padding-left: 30px;
    box-sizing: border-box;
	}
	.baseFootList li {
    text-indent: 2.5em;
    line-height: 3.5em;
	}
	.footWeixin div {
    display: block;
    font-size: 1.4em;
    color: #aaa;
    padding: 5px 0px;
    border-top: 1px dashed #555;
    border-bottom: 1px dashed #555;
    text-indent: 0px;
    padding-left: 2em;
    line-height: 1.3em;
	}
	.footWeixin div span {
    color: #ccc;
	}
	.newCommonList {
    width: 100%;
	}
	.newCommonList li {
    max-height: 80px;
    margin-bottom: 10px;
    width: 100%;
	}
	.newCommonList li .headBox {
    float: left;
    max-width: 36px;
    width: 9%;
	}
	.newCommonList li .headBox .head {
    width: 100%;
    max-width: 36px;
    border-radius: 50%;
    border: 1px solid #fff;
    overflow: hidden;
    box-sizing: border-box;
	}
	.newCommonList li .wordBox {
    float: left;
    width: 91%;
    padding-left: 10px;
    box-sizing: border-box;
	}
	.newCommonList li .wordBox .name {
    display: block;
    color: #ccc;
    font-size: 1.3em;
    line-height: 1.6em;
	}
	.newCommonList li .wordBox .common {
    display: block;
    font-size: 1.3em;
    line-height: 1.6em;
    max-height: 64px;
    overflow: hidden;
	}
	.newCommonList li .headBox .head img {
    width: 100%;
    float: left;
	}
	.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
	}
	.QA .title {
    background-image: url(../assets/support_foot.png);
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    line-height: 2em;
    font-size: 1.4em;
    color: #ccc;
    padding-left: 30px;
    box-sizing: border-box;
	}
	.downloadApp .title {
    background-image: url(../assets/app_foot.png);
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    line-height: 2em;
    font-size: 1.4em;
    color: #ccc;
    padding-left: 30px;
    box-sizing: border-box;
	}
	.lastFoot {
    width: 100%;
    background-color: #444;
    margin-top: -3px;
	}
	.lastFootBox {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    color: #ccc;
    line-height: 40px;
	}
	.lastList {
    float: right;
    height: 40px;
	}
	.lastList li {
    width: 24px;
    padding: 8px 10px;
    height: 24px;
    float: left;
	}
	.lastList li a {
    display: block;
    width: 100%;
    height: 100%;
	}
	.weibo {
    background-image: url(../assets/weibo.png);
    background-position: center center;
    background-repeat: no-repeat;
	}
	.youku {
    background-image: url(../assets/youku.png);
    background-position: center center;
    background-repeat: no-repeat;
	}
	.facebook {
    background-image: url(../assets/facebook.png);
    background-position: center center;
    background-repeat: no-repeat;
	}
	.coedDownloadBox {
    width: 50%;
    max-width: 135px;
    float: left;
    position: relative;
    overflow: hidden;
	}
	element.style {
    bottom: -100%;
	}
	.comingCover {
    position: absolute;
    width: 100%;
    height: 140px;
    bottom: -100%;
    background-image: url(../assets/back_img.png);
    background-position: center center;
    background-repeat: repeat;
    background-color: #222;
    text-align: center;
    line-height: 140px;
    color: #ccc;
    font-size: 1.2em;
    transition: .1s all;
	}
	.coedDownloadBox .iosHead {
    background-image: url(../assets/itunes_dev.png);
    background-repeat: no-repeat;
    background-position: 123% bottom;
    height: 24px;
    line-height: 36px;
    width: 100%;
    color: #ededed;
	}
	.coedDownloadBox:hover .comingCover{
		bottom: 50px;
	}
	.bitMapBox {
    text-align: center;
    padding-top: 10px;
	}
	.itunesDownloadButton {
    background-image: url(../assets/itunes.png);
    background-position: center center;
    background-repeat: no-repeat;
    width: 135px;
    height: 40px;
    margin: 0 auto;
    display: inline-block;
    margin-top: 10px;
	}
	.ml10 {
    margin-left: 10px;
	}
	.coedDownloadBox .androidHead {
    background-image: url(../assets/adnroid.png);
    background-repeat: no-repeat;
    background-position: right bottom;
    height: 24px;
    line-height: 36px;
    width: 100%;
    color: #ededed;
	}
	.androidDownloadButton {
	    background-image: none;
	    background-position: center center;
	    background-repeat: no-repeat;
	    width: 135px;
	    height: 40px;
	    margin: 0 auto;
	    display: inline-block;
	    margin-top: 10px;
	}
</style>