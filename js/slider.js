const swiper = new Swiper('.slider__inner', {
	navigation: {
		nextEl: '.slider__arrow-next',
		prevEl: '.slider__arrow-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.slider__inner',
	},
	grabCursor: true,
	spaceBetween: 30,
	initialSlide: 1,
	loop: true,
});