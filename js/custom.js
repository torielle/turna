let customScripts = {
    profile: function () {
     	let portfolio = $('#portfolio');
		let items = $('.items', portfolio);
		let filters = $('.filters li a', portfolio);
		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '0.7s'
			});
		});
		filters.click(function(){
			let el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			let selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});            
    },
    fancybox: function () {
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {},
            end: function () {
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
            },
            scrollChange: function ($currentListItem) {
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top - 75 }, "slow"); 
                return false;
            });
    }, 
    owlSlider: function () {
        let owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        });
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        let bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            let bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){},
		fitText: function(){			  
				setTimeout(function() {			
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });			
				}, 100);
		},
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox(); 
        customScripts.owlSlider();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
};

$('document').ready(function () {
    customScripts.init(); 
	$('.carousel').carousel();
});