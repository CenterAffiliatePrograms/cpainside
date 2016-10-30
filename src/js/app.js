/* global app, device */
window.addEventListener('load', e=> {
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
	});
	/* --- */
	
});