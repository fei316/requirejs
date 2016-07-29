require(['jquery', 'layer'], function($, layer){
	console.log(name);
	console.log(layer);
	layer.open({
	  title: 'test',
	  content: 'hello layer'
	});
	$('#div1').on('click', function(){
		console.log('sdfdsfds');
	});
});