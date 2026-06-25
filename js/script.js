var THEMEMASCOT = {};
(function ($) {

	"use strict";

	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	  var showSwitcher = true;
	  var $body = $('body');
	  var $style_switcher = $('#style-switcher');
	  if( !$style_switcher.length && showSwitcher ) {
	      $.ajax({
	          url: "color-switcher/style-switcher.html",
	          success: function (data) { $body.append(data); },
	          dataType: 'html'
	      });
	  }
	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */


	//   THEMEMASCOT.isRTL = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") === "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };

	//   THEMEMASCOT.isLTR = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") !== "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };


	//Hide Loading Box (Preloader)
	function loader() {
		$(window).on('load', function () {
			// Animate loader off screen
			$(".preloader").addClass('loaded');
			$(".preloader").delay(600).fadeOut();
		});
	}

	loader();

	// Call headerStyle on scroll
	$(window).on('scroll', function () {
		headerStyle();
	});

	// Also call on page load to handle reload
	$(document).ready(function () {
		headerStyle();
	});


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			} else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Header Search
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$(".main-header").addClass("moblie-search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$(".main-header").removeClass("moblie-search-active");
		});
	}

	// Header hide on scroll down, show on scroll up (optional)

	if ($(window).width() > 991) {
		if ($(window).width() > 768) {
			$('.parallaxie').parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	// hover animation
	const $items = $(".case-block-four");

	// set second one active by default
	$items.eq(1).addClass("active");

	$items.hover(function () {
	$items.removeClass("active");
	$(this).addClass("active");
	});

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$(".main-header").addClass("moblie-search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$(".main-header").removeClass("moblie-search-active");
		});
	}

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}


	//Price Range Slider
	if ($(".price-range-slider").length) {
		$(".price-range-slider").slider({
			range: true,
			min: 10,
			max: 99,
			values: [10, 60],
			slide: function (event, ui) {
				$("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
			},
		});

		$("input.property-amount").val(
			$(".price-range-slider").slider("values", 0) +
			" - $" +
			$(".price-range-slider").slider("values", 1)
		);
	}

	 /* ================================
      Hover Active Js Start
    ================================ */



	//product bxslider
	if ($(".product-details .bxslider").length) {
		$(".product-details .bxslider").bxSlider({
			nextSelector: ".product-details #slider-next",
			prevSelector: ".product-details #slider-prev",
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: "fade",
			auto: "true",
			speed: "700",
			pagerCustom: ".product-details .slider-pager .thumb-box",
		});
	}
	//Tabs Box

	//Quantity box
	$(".quantity-box .add").on("click", function () {
		if ($(this).prev().val() < 999) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".quantity-box .sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
					.next()
					.val(+$(this).next().val() - 1);
		}
	});

	$(".feature-block-one").on("mouseenter", function () {
		$(".feature-block-one").removeClass("active");
		$(this).addClass("active");
	});

	// Horizontal accordion js area start here ***
	$(".hzAccordion__item").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Horizontal accordion js area end here ***


	// //Accordion Box
	// if ($('.accordion-box').length) {
	// 	$(".accordion-box").on('click', '.acc-btn', function () {

	// 		var outerBox = $(this).parents('.accordion-box');
	// 		var target = $(this).parents('.accordion');

	// 		if ($(this).hasClass('active') !== true) {
	// 			$(outerBox).find('.accordion .acc-btn').removeClass('active ');
	// 		}

	// 		if ($(this).next('.acc-content').is(':visible')) {
	// 			return false;
	// 		} else {
	// 			$(this).addClass('active');
	// 			$(outerBox).children('.accordion').removeClass('active-block');
	// 			$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
	// 			target.addClass('active-block');
	// 			$(this).next('.acc-content').slideDown(300);
	// 		}
	// 	});
	// }

	 /* ================================
      Custom Accordion Js Start
    ================================ */

   if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

	

	 /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 4000,
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
			 475: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

	

	

	/* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $(window).on('scroll', function () {
    if (
        $(this).scrollTop() + $(this).height() >= $(document).height() - 10
    ) {
        $('#back-top').addClass('show');
    } else {
        $('#back-top').removeClass('show');
    }
	});

	$(document).on('click', '#back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});


	 /* ================================
      Hover Active Js Start
    ================================ */

    $(".award-list-items-items, .service-list-style1, .service-items, .work-block-active, .feature-signle-box-area, .feature-card").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".award-list-items-items, .service-list-style1, .service-items, .work-block-active, .feature-signle-box-area, .feature-card ").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

	 
	if ($('.price-range-slider').length) {
    $(".price-range-slider").slider({
        range: "min",
        min: 100,
        max: 2000,
        value: 1000,
        slide: function (event, ui) {

            // show value text
            $('.property-output').text(ui.value + " sq. ft.");
        }
    });

    // initial text
    $('.property-output').text($(".price-range-slider").slider("value") + " sq. ft.");
}


	//MixItup Gallery
	if ($(".filter-list").length) {
		$(".filter-list").mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.15,
					dynamicDraw: true,
					displayInput: false,
				});
				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);
				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab animated fadeIn");
				$(target).fadeIn(300);
				$(target).addClass("active-tab animated fadeIn");
			}
		});
	}

	$(document).ready(function () {
		$("select").niceSelect();
	});

	//>> Video Popup Start <<//
	$(".img-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	$('.video-popup').magnificPopup({
		type: 'iframe',
		callbacks: {
		}
	});

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			},
			{
				accY: -50,
			}
		);
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	 /* ================================
      Hover Active Js Start
    ================================ */

    $(".pricing-block-items-1, .service-block-items-2, .how-it-block-items-2").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".pricing-block-items-1, .service-block-items-2, .how-it-block-items-2").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

	/* ================================
	Testimonial Slider Js Start
	================================ */

	if($('.testimonial-slider').length > 0) {
		const testimonialSlider = new Swiper(".testimonial-slider", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			 navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	/* ================================
	Project Slider Js Start
	================================ */

	if($('.project-slider').length > 0) {
		const projectSlider = new Swiper(".project-slider", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },
				pagination: {
				el: ".dot2",
				clickable: true,
			},
			breakpoints: {
				1399: {
					slidesPerView: 4,
				},
					1199: {
					slidesPerView: 3.2,
				},
				991: {
					slidesPerView: 2.8,
				},
				767: {
					slidesPerView: 2.1,
				},
				575: {
					slidesPerView: 1.4,
				},
				400: {
					slidesPerView: 1.2,
				},
			},
		});
	}



})(window.jQuery);
