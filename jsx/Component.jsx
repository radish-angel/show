var React=require('react');
var ComponentSearchList=require('./ComponentSearchList.jsx');
var Component={
	//监听文本框变化值
	listener:function(event){
		var that=this;
		var _text=event.target.value;
		console.log(_text);
		//1.通过ajax获取查询的值
		var url="http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText="+_text;
		this.getJson(url,function(data){
			console.log(data);
			//将旧组件卸载
			ReactDOM.unmountComponentById(document.getElementById("list-comp"));
			//新组件载入-------是ComponentSearchList
			ReactDOM.render(<ComponentSearchList name={data}/>,document.getElementById("list-comp"));
		})
		//3.放在新的列表组件中，在将新的模板组件渲染到页面中
	},
	getJson:function(url,callback){
		$.ajax({
			type:"get",
			url:url,
			async:false,
			dataType:"jsonp",
			success:function(data){
				callback(data);
			}
		});
	}
}
module.exports=Component;