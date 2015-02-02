$(function() {
	//switch the effect
	$( ".switch-effect" ).click(function() {
		//remove all effect classes from images
		$( ".switch-effect" ).each(function( index ) {
			var effectName = $(this).attr("data-effect");
			$('.content').removeClass( effectName );
		});

		var effectName = $(this).attr("data-effect");

		//remove animation between effects
		$('.content').addClass( 'noTransition' ).removeClass('active');
		window.setTimeout(function(){
			$('.content').removeClass( 'noTransition' ).addClass( effectName );
		}, 50);

		//animate the first row
		window.setTimeout(function(){
			$('.grid.first .content').addClass( "active" )
		}, 100);
	});
});
