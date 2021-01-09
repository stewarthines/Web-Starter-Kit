//=== MENU ===//
const menuTrigger = document.querySelector('.menu-trigger');
const theHeader = document.querySelector('.the-header');
const mainMenu = document.querySelector('.main-menu');
const body = document.querySelector('body');

let menuOpen = false;
menuTrigger.addEventListener('click', () => {
	if(!menuOpen) {
		menuTrigger.classList.add('open');
		theHeader.classList.add('open');
		mainMenu.classList.add('open');
		menuOpen = true;
		body.style.paddingTop = "72px";
	} else{
		menuTrigger.classList.remove('open');
		theHeader.classList.remove('open');
		mainMenu.classList.remove('open');
		menuOpen = false;
		body.style.paddingTop = "0";
	}
});
//=== /MENU ===//
//=== SCROLL BUTTON ===//
const scrollToTopBtn = document.querySelector('#backToTopBtn');
function scrollToTop(){
	body.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
scrollToTopBtn.addEventListner('click', scrollToTop);
//=== /SCROLL BUTTON ===//