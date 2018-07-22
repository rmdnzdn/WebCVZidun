jQuery(document).ready(function($){
	$(".scrool").click(function(event){
			// Scrool Smooth
			event.preventDefault();
			$('html,body,container,content').animate({scrollTop:$(this.hash).offset().top}, 600);
		});
});
