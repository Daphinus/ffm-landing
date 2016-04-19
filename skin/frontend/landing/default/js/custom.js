$(window).load(function(){

	// =============
	// Custom Scroll
	// =============

	var windowWidth = $(window).width();
	var responsiveInertia = 180;
	var responsiveWheelPixels = 180;

	if(windowWidth < 1025){
		responsiveInertia = 800;
		responsiveWheelPixels = 800;
	}

	// $("#scroll").mCustomScrollbar({
// 		horizontalScroll: false,
// 		verticalScroll: true,
// 		mouseWheelPixels: responsiveWheelPixels,
// 		scrollInertia: responsiveInertia,
// 	    advanced:{
// 	        updateOnContentResize: true
// 	    }
// 	});

	$(document).keydown(function(e) {
	    if(e.which == 35) {
			 $("#scroll").mCustomScrollbar("scrollTo","#end");
	    }
	    if(e.which == 36) {
			 $("#scroll").mCustomScrollbar("scrollTo","header");
	    }
	});

	// =================
	// End Custom Scroll
	// =================



	// ===============
	// Responsive Menu
	// ===============

	$("#mainMenu").append('<button class="close-button"><b class="visually-hidden">Close</b><span aria-hidden="true">×</span></button>');

	// $("#mainMenu").on("click", function() {
// 		$(this).toggleClass("open");
// 		return false;
// 	});

	$('.rochii label').click(function(){
		$('.overlay').addClass('active');
	});

	$('span.close').click(function(){
		$(this).parent().parent().prev('input').prop('checked', false);
		$('.overlay').removeClass('active');
	});



	// ============
	// Contact form
	// ============

	$('.open-contact , nav .button').click(function(){
		$('.overlay').addClass('active');
		$('.contact').addClass('active');
	});

	$('span.cls').click(function(){
		$(this).parent().parent().removeClass('active');
		$('.overlay').removeClass('active');
	});


	// =================
	// Short description
	// =================

	function trim_words(theString, numWords) {
	    expString = theString.split(/\s+/,numWords);
	    theNewString=expString.join(" ");
	    return theNewString;
	}

	$('.rochii li').each(function( index ) {

		// Set title
		var productTitle = $('.modal h1', this).text();
		$('.content h2', this).html(productTitle);

		// Set SKU
		var productSKU = $('.modal em', this).text();
		$('.content em', this).html(productSKU);

		// Set description
		var longText = $('.modal p', this).text();
		var longTextTrunc = trim_words(longText,9);

		$('.content p', this).html(longTextTrunc+' &hellip;');
	});
	
	
	
	//Video
	$("#videoPlayer").on("timeupdate", function(event){
      onTrackedVideoFrame(this.currentTime, this.duration);
       // $('.hero .desc h2').html('<span>' . currentTime . '</span>');


    });
	
	
});





function onTrackedVideoFrame(currentTime, duration){
    // jQuery('.hero .desc h2').text(currentTime);

    if(currentTime >= 35 && currentTime <= 39){ 
    	$('.hero .desc h2').addClass('moving');
    	$('.hero .desc').addClass('hide');
    }else{
    	$('.hero .desc h2').removeClass('moving');
    	$('.hero .desc').removeClass('hide');
    };

}