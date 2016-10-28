/* global app, device */
window.addEventListener('load', e=> {
	/* Слайдер */
	if (device.desktop() || device.tablet()) {
		app.sliderCompany.init();
	}
});