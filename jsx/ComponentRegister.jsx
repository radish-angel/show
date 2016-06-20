var React=require('react');

/**注册页面 开始  当点击我的秀模块的时候 卸载掉原先页面中的组件  将新的注册组件载入到页面中**/
var ComponentRegister=React.createClass({
	register:function(){
		console.log("register");
		//得到用户名和密码
		var _name=document.getElementById("username").value;
		var _pass=document.getElementById("password").value;
		//往后端去提交----参考接口文档中定义的数据格式
		//{status:"register",userID:"",password:""}
		var _json={status:"register",userID:_name,password:_pass}
		console.log(_json);
		$.post('http://datainfo.duapp.com/shopdata/userinfo.php',_json,function(data){
			console.log(data)
		});
		
	},
	render:function(){
		var _css=this.CSS;
		return(
			<div className="register">
		       <div className="username" style={_css.margin}>
		          <label>用户名:</label><input id="username" type="text"/>
		       </div>
		       <div className="password" style={_css.pass}>
		          <label>密码:</label><input id="password" type="password"/>
		       </div>
		       <div className="repassword" style={_css.pass}>
		           <label>重复密码:</label><input id="repassword" type="password"/>
		       </div>
		       <div className="userbtn" style={_css.pass}>
		           <img onClick={this.register} style={_css.img} src="img/regs.png"/>
		       </div>
		    </div>
		);
	}
});
ComponentRegister.prototype.CSS={
	margin:{
		marginTop:"0.6rem"
	},
	pass:{
		marginTop:"0.4rem"
	},
	img:{
		display:"block",
		width:"100%",
		height:"100%"
	}
}
module.exports=ComponentRegister;
/**注册页面 结束**/