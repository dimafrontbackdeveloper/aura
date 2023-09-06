const preloader = () => {
	const preloader = document.querySelector('.preloader')

	setTimeout(() => {
		preloader.classList.add('preloader--hide')
		document.body.classList.remove('scroll-disabled')

		setTimeout(() => {
			preloader.classList.add('zIndex-1')
		}, 600)
	}, 2000)
}

module.exports = preloader
