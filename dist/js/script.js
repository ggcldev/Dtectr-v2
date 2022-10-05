const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

btn.addEventListener('click', navToggle)

function navToggle() {
	btn.classList.toggle('open')
	menu.classList.toggle('flex')
	menu.classList.toggle('hidden')

	// if (menu.classList.contains('flex')) {
	// 	logo.setAttribute('src', '../dist/images/')
	// } else {
	// 	logo.setAttribute('src', '../dist/images/')
	// }
}
