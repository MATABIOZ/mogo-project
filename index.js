// burger and sidebar

const headerBurger = document.querySelector('.header__burger')
const sidebar = document.querySelector('.sidebar')
const allHeaderBurger = document.querySelectorAll('.header__burger')
const allLinks = document.querySelectorAll("a")

allHeaderBurger.forEach(item => item.addEventListener('click', (event) => {
	headerBurger.classList.toggle('header__burger_checked');
	sidebar.classList.toggle('sidebar_checked');
}))

allLinks.forEach(item => item.addEventListener('click', (event) => {
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
}))

// accordion

const serviceTabs = document.querySelector('.service__tabs');
const tabs = document.querySelectorAll('.tab');

serviceTabs.addEventListener('click', event => {
	const target = event.target;
	if (target.classList.contains('tab__header') || target.closest('.tab__header')) {
		tabs.forEach(tab => tab.classList.remove('tab_checked'));
		const parentTab = target.closest('.tab');
		if (parentTab) {
			parentTab.classList.add('tab_checked');
		}
	}
})