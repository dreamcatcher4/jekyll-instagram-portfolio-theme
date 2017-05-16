$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('div').remove('.entry-header');
		var element = document.getElementById("demo-content");
		element.outerHTML = "";
		delete element;
	}, 3000);

});