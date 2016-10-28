/* global app */
app.sliderCompany = (function() {
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