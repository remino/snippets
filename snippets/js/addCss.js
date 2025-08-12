const idStyle = 'example'
const getById = id => document.getElementById(id)
const getCss = () => getById(idStyle)
const hasCss = () => !!getCss()

const addCss = () => {
	if (hasCss()) return

	const style = document.createElement('style')

	style.textContent = /* css */`
		body {
			background: black;
		}
	`

	style.setAttribute('id', idStyle)
	document.head.appendChild(style)
}
