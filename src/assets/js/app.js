import $ from "jquery";
import whatInput from "what-input";

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import "./lib/foundation-explicit-pieces";

$(document).foundation();

$(document).ready(function() {
  var heightNav = $("#navigation").outerHeight();

  $("#navigation").css("top", -heightNav);

  $(window).scroll(function() {
    var scrollBody = $(window).scrollTop();

    if (scrollBody != 0) {
      $("#navigation").css("top", "0");
    } else {
      $("#navigation").css("top", -heightNav);
    }
  });

  $("#slickCon").slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    rows: "window",
    arrows: false,
    swipe: false,
    fade: true
  });

  $("#newsGallery").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: false,
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

  // Остановка карусели при навделении на кнопку

  $("button[data-slide]").hover(
    function() {
      $("#slickCon").slick("slickPause");
    },
    function() {
      $("#slickCon").slick("slickPlay");
    }
  )

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
    autoplay: false,
    rows: "window",
    slidesToShow: 3,
    arrows: false,
    swipe: false,
    variableWidth: true,
    arrows: true,
    prevArrow: $(".slick-prev")
  });

  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
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
  
  $('form button[type="submit"]').click(function() {
    yaCounter39324415.reachGoal('orderSend');
    return true;
  });

  $(".play__content").on("click", function(ev) {
    $('#playMove').append('<iframe width="985" height="554" src="https://www.youtube.com/embed/qYgpAVAAV_8?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
    $("#playMove iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
  
  $("#moveModal button").on("click", function(ev) {
    $("#playMove iframe")[0].src = "https://www.youtube.com/embed/qYgpAVAAV_8?rel=0";
    $("#playMove").empty();
    ev.preventDefault();
  });
  
  $('.play__content').css('background-image', 'url(assets/img/gifka0.gif)');

  $(".present-window__content").on("click", function(ev) {
    $('#playMove').append('<iframe width="985" height="554" src="https://www.youtube.com/embed/qYgpAVAAV_8?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
    $("#playMove iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
  });

  var heigthBlock = $('.present-window__content').outerHeight();

  $('#pw').css({
    'bottom' : '-' + heigthBlock + 'px'
  });
  
  setTimeout (function() {
    
    $('#pw').css({
      
      'bottom' : '0',
      'opacity' : '1'
      
    }).ready(function() {
      
      $('#pw > img').attr('src', 'assets/img/gifka0.gif');
      
    });
    
  }, 10000);
  
  $('#pw .present-window__close').click(function() {
    $('#pw').css({

      'bottom' : '-' + heigthBlock + 'px',
      'opacity' : '0'
      
    })

    setTimeout (function() {
    
      $('#pw').css({
          
        'display' : 'none'
        
      });
        
      }, 500);
  })



});
