/* global app */
app.w = $(window);
app.hb = $('html, body');

app.sliderCompany = (()=> {
	let el = $('#js-slider-company'),
		count = parseInt(el.attr('data-count')),
		itemStr = '';

	return {
		init() {
			for (let i = count - 1; i > 0; i--) {
				itemStr += `<div class="c-slider-company__item"><img class="c-slider-company__img" src="images/${i}.jpg" alt=""></div>`;
			}
			el.html(itemStr).slick({
				autoplay: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				centerPadding: 0,
				arrows: false,
				touchMove: false,
				focusOnSelect: false,
				pauseOnFocus: false,
				autoplaySpeed: 2000
			});
		}
	};
})();

// app.firstSection = (()=> {
// 	let el = $('#first-section'),
// 		wh = app.w.height();

// 	return {
// 		adaptive() {
// 			el.height(wh);
// 		}
// 	};
// })();

app.topMenu = (()=> {
	let el = $('#js-nav-top');
	
	return {
		items: el.find('.c-nav-top__a'),
		el: el,
		visible() {
			el.removeClass('c-nav-top_hide');
		},
		hide() {
			el.addClass('c-nav-top_hide');
		},
		toggle() {
			if (app.w.scrollTop() <= 0) {
				this.visible();
			} else {
				this.hide();
			}
		}
	};
})();

app.navigation = (()=> {
	let el = $('.js-menu-point');
	
	return {
		make() {
			el.waypoint(function(d) {
				let section, link;
				section = $(this.element);
				if (d === "up") {
					section = section.prev();
				}
				link = app.topMenu.el.find('div a[href="#' + section.attr("id") + '"]');
				app.topMenu.items.removeClass("c-nav-top__a_is-active");
				link.addClass("c-nav-top__a_is-active");
			}, {
				offset: '20%'
			});
		},
		scrollTo($el) {
			let href = $el.attr('data-href');
			app.hb.stop().animate({
				scrollTop: $(href).offset().top - 60
			}, 1200);
			window.location.hash = href;
		}
	};
})();
