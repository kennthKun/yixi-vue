<template>
<div class="bannerBox"> 
	<a class="arrow-left" href="#"></a> 
	<a class="arrow-right" href="#"></a>
  <ul id="banners">
  		<li v-for="item in ContentListOne">
				<img v-bind:src=item.lectures[0].background>
		</li>
  </ul>
 </div>
</template>

<script>
export default {
  name: 'NavBanner',
  data() {
  		return {
  			ContentListOne:[],
  		}
  },
  mounted: function(){
  		this.getContentList();
  },
  methods: {
  		getContentList(){
  			this.$http.get("/album").then((result)=>{
  				let res = result.data.data;
  				for(var i=0; i <5; i++){
  					this.ContentListOne.push(res[i]);
  				}
  				console.log(this.ContentListOne)
  			})
  		},
  		bannerMove(){
  			
  		}
  }
}
</script>

<style>
.bannerBox{
	width: 100%;
	height: auto;
	position: relative;
	overflow: hidden;
}
.bannerBox .arrow-left{
    background-image: url(../assets/prev.png);
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -50px;
    width: 50px;
    height: 100px;
    z-index: 5;
}
.bannerBox .arrow-right{
    background-image: url(../assets/nextv.png);
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -50px;
    width: 50px;
    height: 100px;
    z-index: 5;
}
#banners{
	width: 500%;
}
#banners li{
	width: 20%;
	float: left;
}
#banners li img{
	width: 100%;
}
</style>