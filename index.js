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