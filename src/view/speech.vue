<template>
	<div>
		<nav-header></nav-header>
		<div class="mainBody">
			<section>
				<div class="secondBnnerForDetail" style=" background-image: url(http://static.yixi.tv/background/2015-02-13/b2f29f86c15fc6828848737d10926998.1240x350.jpg);"></div>
			</section>
			<section class="sbw1240 pdt40 cutline">
				<h2>演讲集</h2>
				<div class="listChangesBox">
					<ul>
						<li class="listAll active"><router-link to="http://yixi.tv/lectures/all">全部</router-link></li>
						<li class="listTime"><router-link to="http://yixi.tv/lectures/time">场次</router-link></li>
						<li class="listClass"><router-link to="http://yixi.tv/lectures/category">类别</router-link></li>
					</ul>
				</div>
			</section>
			<router-view></router-view>
		</div>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import NavHeader from '@/components/NavHeader'
	import NavFooter from '@/components/Footer'
	export default {
	  name: 'speech',
	  data() {
	  		return {
	  			ContentList:[]
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
	  			})
	  		}
	  }
	}
</script>
<style>
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
.listChangesBox {
    float: right;
}
.listChangesBox ul {
    height: 40px;
}
.listChangesBox ul .active {
    background-color: #cc3434;
}
.listChangesBox .listAll {
    background-image: url(../assets/list_all.png);
    background-position: 112px center;
    background-repeat: no-repeat;
    font-size: 1.3em;
}
.listChangesBox ul li {
    float: left;
    width: 140px;
    height: 40px;
    line-height: 40px;
    background-color: #dedede;
    text-indent: 1em;
    margin-left: 20px;
}
.listChangesBox .listTime {
    background-image: url(../assets/list_time.png);
    background-position: 112px center;
    background-repeat: no-repeat;
    position: relative;
    font-size: 1.3em;
}
.listChangesBox ul .active a {
    cursor: default;
}
.listChangesBox ul li a {
    color: #fff;
    display: block;
}
.listChangesBox .listClass {
    background-image: url(../assets/list_class.png);
    background-position: 112px center;
    background-repeat: no-repeat;
    position: relative;
    font-size: 1.3em;
}
</style>