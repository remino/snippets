// Observe changes in the DOM.
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

const observe = () => {
	const config = {
		attributes: false,
		childList: true,
		subtree: true,
	}
	const callback = function observeCallback(mutationsList) {
		mutationsList.forEach(mutation => {
			if (mutation.type !== 'childList') return
			// processTag(mutation.target)
		})
	}
	const observer = new MutationObserver(callback)
	observer.observe(document.body, config)
}
