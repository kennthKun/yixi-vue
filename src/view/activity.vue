<template>
	<div>
		<nav-header></nav-header>
		<section>
			<div class="secondBnnerForDetail" style=" background-image: url(http://static.yixi.tv/background/2015-03-19/da80c388c268f3a72964f26de22600a1.1240x350.jpg);"></div>
		</section>
		<section class="sbw1240 pdt40 cutline">
			<h2>活动</h2>
		</section>
		<section class="sbw1240 pdt40">
	    <div class="baseSectionTitleDetail tw400 mb40"><span>时间表</span></div>
	    <!--base time line-->
			<table id="baseTimeLineList" class="baseTimeLineList mb60" cellpadding="0" cellspacing="0">
				<tr>
					<th>场次</th>
					<th>日期</th>
					<th>地点</th>
					<th class="speaker">讲者</th>
		    </tr>
		    <tr>
					<td>第41期</td>
					<td>2016-03-06</td>
					<td>上海</td>
					<td>
						<span>张辰亮<a href="http://yixi.tv/lecture/351">「《海错图》笔记」</a></span>
						<span>陈淑慧<a href="http://yixi.tv/lecture/353">「好事地图」</a></span>
						<span>刘良鹏<a href="http://yixi.tv/lecture/354">「汉字小的时候」</a></span>
						<span>王海达Alex<a href="http://yixi.tv/lecture/355">「傲娇的雪糕」</a></span>
						<span>贝天牧<a href="http://yixi.tv/lecture/356">「牧羊地」</a></span>
						<span>周鍊<a href="http://yixi.tv/lecture/359">「光外有光」</a></span>
						<span>周奇墨<a href="http://yixi.tv/lecture/360">「严肃点，我要搞笑了」</a></span>
						<span>中山大树<a href="http://yixi.tv/lecture/369">「一个人的电影节」</a></span>
					</td>
				</tr>
	    </table>
	  </section>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import NavHeader from '@/components/NavHeader'
	import NavFooter from '@/components/Footer'
	export default {
	  name: 'activity',
	  data() {
	  		return {
	  			ContentList:[],
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
	  			this.$http.get("/album").then((result)=>{
					console.log(result)
	  				let index = result.data.data.length
	  				let res = result.data.data;
					this.ContentList = res;
					console.log(this.ContentList)
	  			})
	  		}
	  }
	}
</script>

<style>
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
h2 {
    font-size: 3em;
    line-height: 40px;
    display: inline-block;
    font-weight: 300;
}
.sbw1240 {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
}
.sbw1240 {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
}
section {
    display: block;
    clear: both;
}
.baseSectionTitleDetail {
    height: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.2em;
    border-top: 2px solid #CC3434;
    border-bottom: 2px solid #CC3434;
    color: #CC3434;
    box-sizing: border-box;
    font-size: 1.8em;
    margin: 0px auto 10px auto;
}
.mb40 {
    margin-bottom: 40px;
}
.tw400 {
    max-width: 400px;
    width: 90%;
}
.baseTimeLineList {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 40px;
}
.mb60 {
    margin-bottom: 60px;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.grayBg {
    background-color: #f8f8f8;
}
.baseTimeLineList th {
    line-height: 50px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #dedede;
    text-align: left;
    text-indent: 10px;
    font-size: 1.4em;
}
.baseTimeLineList .speaker {
    width: 40%;
}
.baseTimeLineList td {
    font-size: 1.3em;
    line-height: 1.5em;
    text-indent: 10px;
    padding: 10px 0px;
}
.baseTimeLineList span {
    display: block;
    line-height: 1.5em;
}
</style>