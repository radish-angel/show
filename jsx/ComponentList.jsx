var React=require('react');
//列表 ---开始
var ComponentList=React.createClass({
	getDefaultProps:function(){
		return{
			//设置数据源
			url:'http://datainfo.duapp.com/shopdata/getGoods.php'
		}
	},
	getInitialState:function(){
		//设置数据保存的state
		return{
			result:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			type:"get",
			url:this.props.url,
			async:false,
			dataType:'jsonp',
			success:function(data){
				_this.setState({result:data});
			}
		});
	},
	render:function(){
		console.log(this.state.result);
		var list=[];
		this.state.result.map(function(item){
			list.push(<ComponentListItem name={item}/>)
		});
		
		return(
			<div className="shoplist">
			  {list}
			</div>
		);
	}
});
var ComponentListItem=React.createClass({
	render:function(){
		return(
			<div className="shopitem">
						<div className="itemimg">
							<img src={this.props.name.goodsListImg}/>
						</div>
						<div className="itemdesc">
							<div className="goodsName">{this.props.name.goodsName}</div>
							<div className="goodsPrice">￥<span>{this.props.name.price}</span></div>
							<div className="goodsDiscount">{this.props.name.discount}</div>
						</div>
			</div>
		);
	}
});
module.exports=ComponentList;