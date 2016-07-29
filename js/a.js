require(['jquery', 'layer', 'b'], function($, layer, b){
	//获取全局变量
	console.log(name);
	b.layermsg();
	$('#div1').on('click', function(){
		layer.open({
		  title: 'test',
		  content: 'hello layer'
		});
	});
});