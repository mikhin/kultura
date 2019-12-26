const menu = document.querySelector('.menu');

const init = () => {
	const menuHandler = menu.querySelector('.menu__handler');

	if (menuHandler) {
		menuHandler.addEventListener('click', () => {
			menu.classList.toggle('menu--opened');
		});
	}
};

if (menu) {
	init();
}
