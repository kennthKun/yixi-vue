<template>
	<div class="navBox">
		<div class="nav-box">
			<a href="#" class="logo"></a>
			<div class="nav-right">
				<nav>
					<router-link to="/">首页</router-link>
					<router-link to="/special">专题集</router-link>
					<router-link to="/speech">演讲集</router-link>
					<router-link to="/activity">活动</router-link>
					<router-link to="/record">记录</router-link>
					<router-link to="/gifts">礼物</router-link>
					<router-link to="/about">关于</router-link>
					<span class="seek">
						<input type="text" class="seek-input"/>
					</span>
					<a v-on:click="logup()">注册/登陆</a>
					<div class="loginPopout" ref="logbox">
						<a class="popoutCloseButton clearfix" id="clearfix" v-on:click="logdown()">
							<span class="line1"></span>
							<span class="line2"></span>
						</a>
	          <div class="PopoutLoginBox" ref="login"><span>登录</span>
	              <form method="POST" action="http://yixi.tv" accept-charset="UTF-8" id="loginForm"><input name="_token" type="hidden" value="xyPf0Awkll1zLn3QD4qtuyLckrp7YpoImqFbfO5l">
	              <input type="text" class="inputText" placeholder="请输入账号" name="email">
	              <input type="password" class="inputText" placeholder="请输入密码" name="password">
	              <input type="submit" class="inputButton" value="登		录">
	              <div class="Fpassword"><a href="http://yixi.tv/findpassword" target="_blank">忘记密码了？</a></div>
	              <a class="chagePanel" id="loginChage" v-on:click="loginchange()">注册新账号&nbsp;&gt;</a>
	              </form>
	          </div>
	          <div class="PopoutsignBox" ref="logon"><span>注册</span>
	              <form method="POST" action="http://yixi.tv" accept-charset="UTF-8" id="registerForm"><input name="_token" type="hidden" value="xyPf0Awkll1zLn3QD4qtuyLckrp7YpoImqFbfO5l">
	              <input type="email" class="inputText" placeholder="请输入邮箱" name="email">
	              <input type="password" class="inputText" placeholder="请输入新密码" name="password">
	              <input type="password" class="inputText" placeholder="再次输入密码" name="repass">
	              <input type="submit" class="inputButton" value="注		册">
	              <a class="chagePanel" v-on:click="logonchange()" id="signChage">&lt;&nbsp;已有账号</a>
	              </form>
	          </div>
		      </div>
				</nav>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'NavHeader',
	  methods:{
			loginchange(){
				this.$refs.login.style.left = '-200px';
				this.$refs.logon.style.left = '0px';
				this.$refs.logbox.style.height = '320px';
			},
			logonchange(){
				this.$refs.login.style.left = '0px';
				this.$refs.logon.style.left = '200px';
				this.$refs.logbox.style.height = '280px';
			},
			logup(){
				this.$refs.logbox.style.height = '280px';
				this.$refs.logbox.style.opacity = '1';
			},
			logdown(){
				this.$refs.logbox.style.height = '0px';
				this.$refs.logbox.style.opacity = '0';
			}
		}
	}
	
</script>

<style>
element.style {
    height: 280px;
    opacity: 1;
}
.loginPopout {
	opacity: 0;
  position: absolute;
  float: right;
  top: 105%;
  right: 0px;
  width: 200px;
  box-sizing: border-box;
  height: 0px;
  /*opacity: 0;*/
  	background: #000;
  background-color: rgba(0,0,0,0.5);
  border-top: 1px solid #cc3434;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  	box-shadow: 0px 1px 2px #333;
  overflow: hidden;
  transition: all .5s; 
}
a.popoutCloseButton {
    width: 4px;
    height: 20px;
    padding: 5px 13px;
    display: block;
    float: right;
    position: relative;
    cursor: pointer;
    border: none !important;
    background-color: transparent !important;
}
a.popoutCloseButton .line1 {
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: #fff;
    transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    transform-origin: center;
}
a.popoutCloseButton .line2 {
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: #fff;
    transform: rotateZ(-45deg);
    -ms-transform: rotateZ(-45deg);
    -moz-transform: rotateZ(-45deg);
    -webkit-transform: rotateZ(-45deg);
    transform-origin: center;
}
#clearfix{
	float: right;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.popoutCloseButton .clearfix{
	float: right;
	height: auto;
}
.PopoutLoginBox, .PopoutsignBox {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
    position: relative;
    float: left;
    line-height: 3.5em;
    transition: all .5s; 
}
.PopoutLoginBox span, .PopoutsignBox span {
    display: block;
    width: 100%;
    font-size: 1.8em;
    line-height: 1.6em;
    color: #fff;
    padding-bottom: 5px;
    text-shadow: 0px 1px 2px #333;
}
form {
    display: block;
    margin-top: 0em;
    -webkit-transition: all 150ms ease-in-out;
}
.PopoutLoginBox .inputText, .PopoutsignBox .inputText {
    width: 100%;
    clear: both;
    margin: 0px;
    font-size: 1.4em;
    height: 2.4em;
    background-color: #333;
    border: 1px solid #555;
    box-sizing: border-box;
    appearance: none;
    color: #444;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 8px;
}
.PopoutLoginBox .inputButton, .PopoutsignBox .inputButton {
    width: 100%;
    height: 2.4em;
    font-size: 1.4em;
    cursor: pointer;
    border: none;
    background-color: #999;
    color: #fff;
    text-shadow: 0px 1px 1px #666;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
}
.Fpassword {
    height: 24px;
    width: 100%;
    line-height: 24px;
}
#mainNav a:link, #mainNav a:visited {
    color: #fff;
    display: inline-block;
    padding: 0px 20px;
    line-height: 70px;
    height: 70px;
    font-size: 1.4em;
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 0px solid #cc3434;
}
.Fpassword a:link, .Fpassword a:visited {
    display: inline-block;
    width: 100%;
    height: 24px !important;
    line-height: 24px !important;
    border: none !important;
    text-indent: 0px;
    padding: 0px !important;
    text-align: right;
    font-size: 1.1em !important;
}
.loginPopout a.chagePanel {
    display: block;
    height: 30px !important;
    line-height: 30px !important;
    margin-top: 20px;
    width: 100%;
    border-bottom: none !important;
    text-align: center;
    text-indent: 0px;
    border-top: 1px dashed #333;
}
.PopoutsignBox {
    top: -217px;
    left: 200px;
}
</style>