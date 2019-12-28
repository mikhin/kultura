import $ from 'jquery';

const promoCarouselList = document.querySelector('.promo-carousel__list');

const init = carousel => {
	$(carousel).slick({
		mobileFirst: true,
		arrows: false,
		dots: true,
		dotsClass: 'promo-carousel__indicator',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					arrows: true,
					dots: false,
					accessibility: true,
					appendArrows: '.promo-carousel__controls',
					prevArrow: '.promo-carousel__control_previous',
					nextArrow: '.promo-carousel__control_next'
				}
			}
		]
	});
};

if (promoCarouselList) {
	init(promoCarouselList);
}
