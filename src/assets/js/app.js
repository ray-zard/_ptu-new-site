import $ from "jquery";
import whatInput from "what-input";

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import "./lib/foundation-explicit-pieces";

$(document).foundation();

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollBody = $(window).scrollTop();

    if (scrollBody != 0) {
      $("#navigation").css("top", "0");
    } else {
      if (window.matchMedia("(max-width: 1444px)").matches) {
        $("#navigation").css("top", "-116px");
      } else {
        $("#navigation").css("top", "-60px");
      }
    }
  });

  $("#slickCon").slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    rows: "window",
    arrows: false,
    swipe: false
  });

  $("#newsGallery").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  // Остановка карусели при на вделении на кнопку

  $("button[data-slide]").hover(
    function() {
      $("#slickCon").slick("slickPause");
    },
    function() {
      $("#slickCon").slick("slickPlay");
    }
  );

  // Привязка номера кнопки к слайду

  $("button[data-slide]").click(function(e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $("#slickCon").slick("slickGoTo", slideno - 1);
    $("button[data-slide].active").removeClass("active");
    $(this).toggleClass("active");
  });

  // Определение слайда и добавление класса `.active` к кнопке

  $("#slickCon").on("setPosition", function() {
    var currentSlide = $(this).slick("slickCurrentSlide");
    $("button[data-slide]").removeClass("active");
    $("button[data-slide]:nth-child(" + (currentSlide + 1) + ")").addClass(
      "active"
    );
  });

  $("#slickOne, #slickTwo, #slickThree").slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    rows: "window",
    slidesToShow: 3,
    arrows: false,
    swipe: false,
    variableWidth: true,
    arrows: true,
    prevArrow: $(".slick-prev")
  });
  
  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
