requirejs.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'js/jquery.min'
	}
});
require(['helper'], function(helper){
	var str = helper.trim('  and ');
	console.log(str);
})
