const allocateNavigationAnimation = () => {
	// header allocate navigation on achieve a section
	const headerNavigationItemsDesktop = document.querySelectorAll(
		'.header__navigation-item-desktop'
	)

	const headerNavigationItemsMobile = document.querySelectorAll(
		'.header__navigation-item-mobile'
	)

	// find all sections
	const auction = document.querySelector('.auction')
	const newStickers = document.querySelector('.new-stickers')
	const beAuthor = document.querySelector('.be-author')

	const allSections = [auction, newStickers, beAuthor]

	// if element was scroll the function return true
	function isElementScroll(element) {
		const distanceFromTop = element.offsetTop
		const scrollPosition = window.scrollY
		const delay = 120 // x>0 => speed up; x<0 => delay

		if (scrollPosition >= distanceFromTop - 120) {
			return true
		}

		return false
	}

	const allocateNavigation = () => {
		for (let i = allSections.length - 1; i >= 0; i--) {
			const section = allSections[i]
			const isSectionScrolled = isElementScroll(section)

			if (isSectionScrolled) {
				headerNavigationItemsDesktop.forEach((headerNavigationItem, j) => {
					if (i !== j) {
						headerNavigationItem.classList.remove(
							'header__navigation-item--active'
						)
					} else {
						headerNavigationItem.classList.add(
							'header__navigation-item--active'
						)
					}
				})
				headerNavigationItemsMobile.forEach((headerNavigationItem, j) => {
					if (i !== j) {
						headerNavigationItem.classList.remove(
							'header__navigation-item--active'
						)
					} else {
						headerNavigationItem.classList.add(
							'header__navigation-item--active'
						)
					}
				})

				break
			}

			if (i === 0) {
				headerNavigationItemsDesktop.forEach(headerNavigationItem => {
					headerNavigationItem.classList.remove(
						'header__navigation-item--active'
					)
				})
				headerNavigationItemsMobile.forEach(headerNavigationItem => {
					headerNavigationItem.classList.remove(
						'header__navigation-item--active'
					)
				})
			}
		}
	}

	allocateNavigation()
	window.addEventListener('scroll', allocateNavigation)
}

module.exports = allocateNavigationAnimation
