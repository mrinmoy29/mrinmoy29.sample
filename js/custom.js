
	$(document).ready(function() {
				
        //Tooltip
		//$('[data-toggle="tooltip"]').tooltip();
	 });
	 
	 
	// Footer Fixed
	function footerarea_css() {
		var window_height_for_footer = parseInt($(window).height());
		var document_height_for_footer = parseInt($('html body').outerHeight(true));
		if(document_height_for_footer < window_height_for_footer) {
		$('.footer').css('position', 'fixed').css('display', 'block').css('bottom', '0').css('left', '0').css('right', '0');
		}
		else {
		$('.footer').css('position', 'relative').css('display', 'block');
		}
	}
	$(window).resize(function () {
		footerarea_css();
	});
	$(window).load(function() {
		footerarea_css();
	});