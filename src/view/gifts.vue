<template>
	<div>
		<nav-header></nav-header>
		<section>
			<div class="secondBnner" style="background-image: url(http://static.yixi.tv/background/2015-02-12/11985b21104e15523100c13d183b086f.1240x350.jpg);"></div>
		</section>
		<section class="sbw1240 pdt40 cutline">
			<h2>礼物</h2>
		</section>
		<section class="sbw1240 pdt40">
			<ul class="baseGiftList clearfix">
				<li>
					<a href="http://yixi.tv/gift/2" class="baseGiftListLink">
						<div class="giftImgBox" style="background-image: url(http://static.yixi.tv/background/2015-08-07/a358eb36a21395925169540849302f5a.450x450.jpg)"></div>
						<div class="giftWordBox"><span class="mainGiftTitle">美食家欧阳应霁设计的工装围裙</span><span>一个礼物</span></div>
					</a>
				</li>
				<li>
					<a href="http://yixi.tv/gift/1" class="baseGiftListLink">
						<div class="giftImgBox" style="background-image: url(http://static.yixi.tv/background/2015-02-13/261b001647183bf3be1bad79f70f40c1.450x450.jpg)"></div>
						<div class="giftWordBox"><span class="mainGiftTitle">田沁鑫的「一个礼物」</span><span>田沁鑫</span></div>
					</a>
				</li>
			</ul>
		</section>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import '@/assets/css/record'
	import NavHeader from '@/components/NavHeader'
	import NavFooter from '@/components/Footer'
	export default {
	  name: 'gifts',
	  components: {
	  		NavHeader,
	  		NavFooter
	  }
	}
</script>

<style>
section {
  display: block;
  clear: both;
}
.secondBnner {
    width: 100%;
    height: 350px;
    max-width: 1240px;
    margin: 0 auto;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
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
.baseGiftList {
    width: 100%;
}
.baseGiftList li {
    width: 33.3%;
    box-sizing: border-box;
    float: left;
    margin-bottom: 20px;
}
a.baseGiftListLink{
    display: block;
    border: 1px solid #fff;
}
.baseGiftList .giftImgBox {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.baseGiftList .giftWordBox {
    border-top: 1px dashed #ededed;
    margin: 0px 5px;
}
.baseGiftList .giftWordBox .mainGiftTitle {
    font-size: 2em;
    line-height: 2em;
    color: #cc3434;
}
.baseGiftList .giftWordBox span {
    display: block;
    width: 100%;
    font-size: 1.4em;
    line-height: 2em;
    color: #999;
    text-align: center;
}
</style>