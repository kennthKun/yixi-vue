<template>
	<div>
		<nav-header></nav-header>
		<section>
			<div class="secondBnnerForDetail" style=" background-image: url(http://static.yixi.tv/background/2015-02-12/67d3f50c1aa2d4e273b7dc840bfbb06a.1240x350.jpg);"></div>
		</section>
		<section class="sbw1240 pdt40 cutline">
			<h2>纪录集</h2>
		</section>
		<section class="sbw1240 pdt40"> 
			<ul class="mainRecordList clearfix mb30">
				<li class="mainRecordCell clearfix" v-for="item in ContentList">
					<div class="recordImg" v-bind:style="{backgroundImage: 'url(' +item.background+ ')'}"></div>
					<div class="recordWordBox">
						<span class="title">乐满丽江</span>
						<span class="desc">丽江刚被评为“全国十佳宜居地”和“全国十佳投资地”，流浪歌手大军正夜以继日在路边卖唱，他准备在过年后筹足资金录制自己的第二张专辑。丽江的酒吧里，每个人都在诉说着自己的苦楚和挣扎。直到有一天，音乐声响彻整个丽江古城。</span>
						<a href="http://yixi.tv/lecture/187" class="recordListButton">查看详细内容</a>
					</div>
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
	  name: 'record',
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
	  			this.$http.get("/record/1").then((result)=>{
					this.ContentList = result.data.data
					console.log(this.ContentList)
	  			})
	  		}
	  }
	}
</script>

<style>
</style>