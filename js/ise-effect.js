$( window ).load(function() {
	//set default effect
	$('.content').addClass('ise-fade');


	//track the pos of each image
	var waypoints = $('.content').waypoint(function(direction) {
		if( direction==='down' ){
			$(this.element).addClass("active");
		}else{
			$(this.element).removeClass("active");
		}
	}, {
		offset: '50%'
	});
});