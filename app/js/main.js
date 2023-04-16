(function() {
	const headerBurgerOpen = document.querySelector('.header__burger');
	const headerNavigation = document.querySelector('.header__nav');
	const headerBurgerClose = document.querySelector('.header__nav-close');

	headerBurgerOpen.addEventListener('click', event => {
		headerNavigation.classList.add('active')
	});

	headerBurgerClose.addEventListener('click', event => {
		headerNavigation.classList.remove('active')
	});
})();

(function() {
	const tabItems = document.querySelectorAll('.skill__tab-link');
	const tabContent = document.querySelectorAll('.skill__content-item');

	tabItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			event.preventDefault();

			tabContent.forEach(content => {
				content.classList.remove('active');
			});

			tabItems.forEach(tab => {
				tab.classList.remove('active');
			});

			tabContent[index].classList.add('active');
			tabItems[index].classList.add('active');
		})
	})
})();

const isSwiper = document.querySelector('.swiper');

if(isSwiper){
	const swiper = new Swiper('.swiper', {
		loop: true,
		  spaceBetween: 30,
		  grabCursor: true,
		  speed: 900,
		pagination: {
		  el: '.swiper-pagination',
			  clickable: true,
		},
	  });
}



/*function deContainer(){
	document.getElementById("d").style.display = "none";
	document.getElementById("f").style.display = "block";
}*/