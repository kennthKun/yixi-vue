<template>
	<div>
		<nav-header></nav-header>
 		<section>
			<div class="secondBnnerForDetail" style=" background-image: url(http://static.yixi.tv/background/2015-02-13/d2c50498b7d8132175fd8b4d2c11b1dc.1240x350.jpg);"></div>
		</section>
        <!--section for list!!!!-->
		<section class="sbw1240 pdt40 cutline">
			<h2>关于</h2>
		</section>
        <!--main list section-->
		<section class="pdt40"> 
		  <!--base title start-->
		  <div class="baseSectionTitle tw400"><span>关于一席</span></div>
		  <!--base title over-->
			<div class="aboutUs">
        <p>听君一席话，胜读十年书</p>
        <p>一席是一个独立媒体</p>
        <p>2012年成立于北京，制作了【一席】和【枝桠】两档节目</p>
        <p>一席现场演讲，目前在北京、上海、深圳、武汉、香港、台北等城市举办</p>
			</div>
		</section>
		<section class="pdt40 gray"> 
			<div class="baseSectionTitle tw400"><span>加入或赞助一席</span></div>
			<div class="aboutUs">
				<p>yixitv@vip.163.com</p>
			</div>
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
.pdt40 {
    padding: 40px 0px;
}
section {
    display: block;
    clear: both;
}
section, aside {
    display: block;
}
.baseSectionTitle {
    height: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.2em;
    border-top: 2px solid #CC3434;
    border-bottom: 2px solid #CC3434;
    color: #CC3434;
    box-sizing: border-box;
    font-size: 1.8em;
    margin: 0px auto 40px auto;
}
.tw400 {
    max-width: 400px;
    width: 90%;
}

.aboutUs {
    width: 100%;
    text-align: center;
}
.aboutUs p {
    font-size: 1.8em;
    line-height: 1.8em;
    padding-top: 10px;
}
.pdt40 {
    padding: 40px 0px;
}
.gray {
    background-color: #f2f2f2;
}
section {
    display: block;
    clear: both;
}
</style>