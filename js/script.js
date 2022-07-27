const burgerBtn = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');
const mask = document.querySelector('.mask');

burger()

function burger() {

	burgerBtn.addEventListener("click", () => {
	
	if(burgerBtn.classList.contains("active")) {
	
	burgerBtn.classList.remove("active");
	burgerNav.classList.remove("show");
	body.classList.remove("lock");
	mask.classList.remove('visible');
	
	
	} else {
	
	burgerBtn.classList.add("active");
	burgerNav.classList.add("show");
	body.classList.add("lock");
	mask.classList.add('visible');
	
	}
	
	});
}