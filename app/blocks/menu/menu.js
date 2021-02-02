const menu = document.querySelector('.menu_adaptive');

const init = () => {
	const menuHandler = menu.querySelector('.menu__handler');

	if (menuHandler) {
		menuHandler.addEventListener('click', () => {
			menu.classList.toggle('menu_opened');
		});
	}
};

if (menu) {
	init();
}
