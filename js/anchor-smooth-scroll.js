document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault()
		event.stopPropagation()

		const name = anchor.getAttribute('href').slice(1)
		const element = document.getElementById(name) || document.getElementsByName(name)[0]

		element.scrollIntoView({ behavior: 'smooth' })
	})
})
