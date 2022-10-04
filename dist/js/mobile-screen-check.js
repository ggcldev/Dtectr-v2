function showBrowserWidth() {
	const width = window.innerWidth

	document.querySelector('h1').innerHTML = `Width: ${width}`
}

window.onload = showBrowserWidth
window.onresize = showBrowserWidth
