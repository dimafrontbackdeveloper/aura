const smoothScrollAnimation = () => {
	function smoothScroll(targetId) {
		const targetElement = document.getElementById(targetId)

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop, // Вертикальное положение цели
				behavior: 'smooth', // Плавный скролл
			})
		}
	}

	const anchorLinks = document.querySelectorAll('a[href^="#"]')

	anchorLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault() // Отменяем стандартное действие перехода по якорю

			const targetId = link.getAttribute('href').substring(1) // Получаем ID цели
			smoothScroll(targetId) // Вызываем функцию плавного скролла
		})
	})
}

export default smoothScrollAnimation
