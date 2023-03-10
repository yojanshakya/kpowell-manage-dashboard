
function onMenuClick() {
	const hamburger = document.getElementById("nav-open");
	hamburger.classList.add('hidden');

	const navOverlay = document.getElementsByClassName('nav-overlay')[0];
	navOverlay.classList.remove('hidden')

	const primaryNav = document.getElementsByClassName('primary-navigation')[0];
	primaryNav.classList.remove('sm-hidden')
}

function onMenuClose() {
	const hamburger = document.getElementById("nav-open");
	hamburger.classList.remove('hidden');

	const navOverlay = document.getElementsByClassName('nav-overlay')[0];
	navOverlay.classList.add('hidden')

	const primaryNav = document.getElementsByClassName('primary-navigation')[0];
	primaryNav.classList.add('sm-hidden')
}

document.getElementById("nav-open").addEventListener('click',onMenuClick)
document.getElementById("nav-close").addEventListener('click',onMenuClose)
document.getElementsByClassName("nav-overlay")[0].addEventListener('click',onMenuClose)