const swiper1 = new Swiper('.slider-top', {
	navigation: {
		nextEl: '.arrow-next1',
		prevEl: '.arrow-prev1',
	},
	pagination: {
		el: '.pagination1',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.slider-top',
	},
	grabCursor: true,
	spaceBetween: 30,
	initialSlide: 1,
	loop: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

const swiper2 = new Swiper('.slider-bottom', {
	navigation: {
		nextEl: '.arrow-next2',
		prevEl: '.arrow-prev2',
	},
	pagination: {
		el: '.pagination2',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.slider-bottom',
	},
	grabCursor: true,
	spaceBetween: 30,
	initialSlide: 1,
	loop: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});