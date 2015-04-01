/*global $:false */
(function($){

$(document).ready(function() {
'use strict';

if ($(window).width() < 400) {
    var height = 240/4*3;
    $(".large iframe").attr('width', '240');
    $(".large iframe").attr('height', height);
} else if ($(window).width() < 768) {
    var height = 352/4*3;
    $(".large iframe").attr('width', '352');
    $(".large iframe").attr('height', height);
} else {
    var height = 462/4*3;
    $(".large iframe").attr('width', '462');
    $(".large iframe").attr('height', height);
}

$(".header-box").css("height", $(window).height());
$('#navbar').scrollspy();

$(".brand").click(function() {
	$("html, body").animate({scrollTop: 0}, 500);
	return false;
});

/*------------------------------------------------------------
Header Slider
-------------------------------------------------------------*/
var currentSlide  = 1,
	currentTitle = 0,
	offset = 0;

function headerSlider(countItems) {
	$("#header-slider li:nth-child(" + currentSlide +")").addClass("active");
	setTimeout(function() {
		if (currentSlide === countItems) {
			currentSlide = 1;
		} else {
			currentSlide = currentSlide + 1;
		}
		$("#header-slider li").removeClass("active");
		$("#header-slider li:nth-child(" + currentSlide +")").addClass("active");
		headerSlider(countItems);
	}, 3500);
}
function headerTitle(count) {
	setTimeout(function() {
		if (currentTitle === count - 1) {
			currentTitle = 0;
			offset = 0;
		} else {
			currentTitle = currentTitle + 1;
			offset = offset - 83;
		}
		$(".header-title-scroll .page-title:first-child").css("margin-top", offset);
		headerTitle(count);
	}, 3500);
}

	if ($("#header-slider li").length > 0) {
		headerSlider($("#header-slider li").length);
	}

	if ($(".header-title-scroll h1").length > 0) {
		headerTitle($(".header-title-scroll h1").length);
	}
/*------------------------------------------------------------
			End Header Slider
-------------------------------------------------------------*/

/*------------------------------------------------------------
			Header Animation
-------------------------------------------------------------*/
	function arrowAnimation() {
		setTimeout(function() {
			$(".arrow-down").addClass("rotate-arrow");
			setTimeout(function() {
				$(".arrow-down").removeClass("rotate-arrow");
				arrowAnimation();
			}, 1000);
		}, 2000);
	}
	arrowAnimation();

//	$(".header-title .left").css("left", 0);
//	$(".header-title .right").css("right", 0);
/*------------------------------------------------------------
			End Header Animation
-------------------------------------------------------------*/

	var lefts = $(".left"),
		rights = $(".right"),
		bottoms = $(".bottom"),
		rotates = $(".rotate"),
		left_tops = lefts.map(function() { return $(this).position().top; }),
		right_tops = rights.map(function() { return $(this).position().top; }),
		bottom_tops = bottoms.map(function() { return $(this).position().top; }),
		rotate_tops = rotates.map(function() { return $(this).position().top; });

	$(window).load(function () {
		left_tops = lefts.map(function() { return $(this).position().top; });
		right_tops = rights.map(function() { return $(this).position().top; });
		bottom_tops = bottoms.map(function() { return $(this).position().top; });
		rotate_tops = rotates.map(function() {return $(this).position().top;});
	});

	var scrollVisible = $(window).scrollTop() + $(window).height();
	$(left_tops).each(function (i) {
		if (scrollVisible > this)
			$(lefts[i]).css({left: 0});
	});

	$(right_tops).each(function (i) {
		if (scrollVisible > this)
			$(rights[i]).css({right: 0});
	});

	$(bottom_tops).each(function (i) {
		if (scrollVisible > this - 1000)
			$(bottoms[i]).css({bottom: 0});
	});

	$(rotate_tops).each(function (i) {
		if (scrollVisible > this)
			$(rotates[i]).addClass("rotate-normal");
	});
        
        
        if ($("header.home").length === 0) {
            $(".navbar").css({position: "fixed", top: "0px"});
            $("#options-panel").css("position", "absolute");
        }

	$(window).scroll(function () {
/*------------------------------------------------------------
			All Template Animation
-------------------------------------------------------------*/
		var scrollVisible = $(window).scrollTop() + $(window).height();
		$(left_tops).each(function (i) {
			if (scrollVisible > this)
				$(lefts[i]).css({left: 0});
		});

		$(right_tops).each(function (i) {
			if (scrollVisible > this)
				$(rights[i]).css({right: 0});
		});

		$(bottom_tops).each(function (i) {
			if (scrollVisible > this - 1000)
				$(bottoms[i]).css({bottom: 0});
		});

		$(rotate_tops).each(function (i) {
			if (scrollVisible > this)
				$(rotates[i]).addClass("rotate-normal");
		});
/*------------------------------------------------------------
			End All Template Animation
-------------------------------------------------------------*/
                
                if ($(window).scrollTop() < $("header.home").height()) {
                    $(".nav-collapse").removeClass('in').animate({height: 0}, 30);
                }
                
		if ($(window).scrollTop() >= $("header.home").height()) {
			$(".navbar").css({position: "fixed", top: "0px"});
			$("#options-panel").css("position", "absolute");
		} else {
			$(".navbar").css({position: "fixed", top: "-70px"});
			$("#options-panel").css("position", "fixed");
		}

	});

	$(window).resize(function () {
                if ($(window).width() < 400) {
                    var height = 240/4*3;
                    $(".large iframe").attr('width', '240');
                    $(".large iframe").attr('height', height);
                } else if ($(window).width() < 768) {
                    var height = 352/4*3;
                    $(".large iframe").attr('width', '352');
                    $(".large iframe").attr('height', height);
                }
		$(".works-item .large").css('width', $("body").width());
		$(".header-box").css("height", $(window).height());
	});

	if ($("body").width() >= 734) {
			$(".works-item").click(function() {
				var this_item = this;
				if ($(this).is(".open")) {
					$(".works-item").css("margin-bottom", 0).removeClass("open");
					$(".arrow", this_item).animate({'margin-top': 67}, 300);
					$(".arrow").css("display", "none");
					$(".large").fadeOut();
				} else {
					$(".works-item").css("margin-bottom", 0).removeClass("open");
					$(".arrow", this_item).animate({'margin-top': 67}, 300);
					$(".arrow").css("display", "none");
					$(".large").fadeOut();
					$(".arrow", this_item).animate({'margin-top': 67}, 300);
					$(".arrow").css("display", "none");
					$(".works-item").css("margin-bottom", 0).removeClass("open");
					$(".works-list").addClass("pos-statick");
					$(this_item).addClass("open");
					if ($(this_item).attr("data-item") == 1) {
						$(this_item).css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).next(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).next(".works-item").next(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
					}
					if ($(this_item).attr("data-item") == 2) {
						$(this_item).css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).prev(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).next(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
					}
					if ($(this_item).attr("data-item") == 3) {
						$(this_item).css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).prev(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
						$(this_item).prev(".works-item").prev(".works-item").css("margin-bottom", $(".large", this_item).height() + 75);
					}
					$(".large", this_item).fadeIn(100);

					setTimeout(function() {
						$(".arrow", this_item).fadeIn().animate({'margin-top': 37}, 300);
					}, 100);
				}
			});
		} else {
			$(".works-item").click(function() {
				if ($(this).is(".open")) {
					$(".works-item").css("margin-bottom", 0).removeClass("open");
					$(".arrow", this_item).animate({'margin-top': 67}, 300);
					$(".arrow").css("display", "none");
					$(".large").fadeOut();
				} else {
					var this_item = this;
					$(".arrow", this_item).animate({'margin-top': 67}, 300);
					$(".arrow").css("display", "none");
					$(".works-item").css("margin-bottom", 0).removeClass("open");
					$(".large").fadeOut();
					$(".works-list").addClass("pos-statick");
					$(this_item).addClass("open");
					$(this_item).css("margin-bottom", $(".large", this_item).height() + 75);
					$(".large", this_item).fadeIn();

					setTimeout(function() {
						$(".arrow", this_item).fadeIn().animate({'margin-top': 37}, 300);
					}, 100);
				}
			});
		}

	$(".header-box").css("height", $(window).height());

	$(".navbar a").not('.btn-navbar').not('.brand').click(function() {
		$("html, body").animate({scrollTop: $($(this).attr("href")).position().top - 70}, 500);
		return false;
	});

	$(".arrow-down, .arrow-down-text").click(function() {
		$("html, body").animate({scrollTop: $("header.home").height()}, 500);
		return false;
	});


	$(".container-box:nth-child(2n+2):not(.container-box.home)").addClass("color");

	$(".close").click(function(e) {
		e.stopPropagation();
		$(".works-item").css("margin-bottom", 0).removeClass("open");
		$(".arrow").animate({'margin-top': 67}, 300);
		$(".arrow").fadeOut();
		setTimeout(function() {
			$(".large").fadeOut();
		}, 500);
	});

	$(".large").click(function(e) {
		e.stopPropagation();
	});

/* -------------------------------------------------------------------
			Ajax Form
--------------------------------------------------------------------*/
$('#submit').click(function(){
	$.post(url + "/form.php", $("#contactform").serialize(),  function(data) {
		$('#success').html(data).animate({opacity: 1}, 500, function(){
			$("#contactform").trigger( 'reset' );
		});
	});
	return false;
});

/* -------------------------------------------------------------------
			Color Customization
--------------------------------------------------------------------*/
	$("#options-panel .button").click(function() {
        if ($("#options-panel").hasClass("open")) {
          $("#options-panel").animate({left: -200}, 300, function() {
            $(this).removeClass("open");
          });
        } else {
          $("#options-panel").addClass("open");
          $("#options-panel").animate({left: 0}, 300);
        }
    });

	$(".minicolors").minicolors({
        defaultValue: "#14a3e0",
        change: function(hex) {
            changeColor(hex);
        }
    });

    $(".color-scheme").click(function() {
        changeColor($(this)[0].attributes['data-color'].value);
    });

    var style = $('<style type="text/css" id="theme_color" />').appendTo('head');

    function changeColor(hex) {
        var rgba = parseInt(hex.substring(1), 16);
        var r = (rgba & 0xff0000) >> 16;
        var g = (rgba & 0x00ff00) >> 8;
        var b = rgba & 0x0000ff;
        style.html('.navbar .btn-navbar .icon-bar, .btn-primary, .btn-primary:focus, .btn:hover, .form-submit #submit, .form-submit #submit:focus, .btn-primary, .btn-primary:focus, .form-submit #submit:hover, .btn-primary:hover{ background-color: ' + hex + ';} .navbar .nav > .active > a, .navbar .nav > .active > a:hover, .navbar .nav > .active > a:focus, .social.top i:hover, .navbar .nav > li > a:focus, .navbar .nav > li > a:hover{ border-color: ' + hex + ';} .page-title span, .team-item .hover-bottom .title, a, a:hover, .soc-review-icon i, .footer-social li a:hover i, .team-item .social a:hover i, .soc-review-meta a, .navbar .brand{ color: ' + hex + ';} .team-item .statick .overlay, .btn-primary:hover{background: rgba('+ r +', '+ g +', '+ b +', .7);} .container-box.color, .works-item:hover, .works-item.open{background: rgba('+ r +', '+ g +', '+ b +', .1);} header .arrow-down:hover{background: rgba('+ r +', '+ g +', '+ b +', .8) url(wp-content/themes/follow-me/img/arrow-down.png) no-repeat 50%!important ;} .btn-primary:active{background: rgba('+ r +', '+ g +', '+ b +', .5);} a:visited, a:visited:hover{color: rgba('+ r +', '+ g +', '+ b +', .5);} textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus{box-shadow: 0 0 10px rgba('+ r +', '+ g +', '+ b +', .5);} .team-item .hover{box-shadow: 0 0 10px rgba('+ r +', '+ g +', '+ b +', .2);} textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input{background: rgba('+ r +', '+ g +', '+ b +', .1);} input:-moz-placeholder, textarea:-moz-placeholder{color: '+ hex +';} input:-ms-input-placeholder, textarea:-ms-input-placeholder{color: '+ hex +';} input::-webkit-input-placeholder, textarea::-webkit-input-placeholder, #options-panel .button i{color: '+ hex +';}');
    }

});
})(jQuery);