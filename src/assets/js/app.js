import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function() {
	
	$(window).scroll(function() {
	
		var scrollBody = $(window).scrollTop();
		
		if (scrollBody != 0) {
			$("#navigation").css("top", "0");
		} else {
			$("#navigation").css("top", "-60px");
		}
	
	});
	
	// $('.your-class').slick({
		// 	"slidesToShow": 2, 
		// 	"slidesToScroll": 2
		// });
});
