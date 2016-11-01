/* global app, device */
window.addEventListener('load', e=> {
	let tabsHeader = $('#js-tabs-header'),
		tabsContent = $('#js-tabs-content');
	
	
	/* Высота первого экрана */
	// app.firstSection.adaptive();
	// app.w.resize(e=> {
	// 	app.firstSection.adaptive();
	// });
	/* --- */
	/* Слайдер */
	if (device.desktop() || device.tablet()) {
		app.sliderCompany.init();
	}
	/* --- */
	
	/* Top menu */
	app.topMenu.toggle();
	app.w.scroll(e => {
		app.topMenu.toggle();
	});
	app.navigation.make();
	/* --- */
	
	/* Клики на сайте */
	app.w.click(e=> {
		let $el = $(e.target);
		// Навигация в меню
		if ($el.hasClass('js-nav-a')) {
			e.preventDefault();
			app.navigation.scrollTo($el);
		}
		
		// Табы
		if ($el.hasClass('c-learn-tabs__header-item')) {
			tabsHeader.find('.c-learn-tabs__header-item_is-active').removeClass('c-learn-tabs__header-item_is-active');
			$el.addClass('c-learn-tabs__header-item_is-active');
			tabsContent.find('.c-learn-tabs__content-item_is-active').removeClass('c-learn-tabs__content-item_is-active');
			tabsContent.find('.c-learn-tabs__content-item').eq(parseInt($el.attr('data-tab'))).addClass('c-learn-tabs__content-item_is-active');
		}
		// Кидаем на оплату при клике на картинку
		if ($el.hasClass('c-learn-tabs__img')) {
			app.navigation.scrollTo($el);
		}
	});
	/* --- */
	
});