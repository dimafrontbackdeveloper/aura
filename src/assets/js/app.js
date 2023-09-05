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
					headerNavigationItem.classList.add('header__navigation-item--active')
				}
			})
			headerNavigationItemsMobile.forEach((headerNavigationItem, j) => {
				if (i !== j) {
					headerNavigationItem.classList.remove(
						'header__navigation-item--active'
					)
				} else {
					headerNavigationItem.classList.add('header__navigation-item--active')
				}
			})

			break
		}

		if (i === 0) {
			headerNavigationItemsDesktop.forEach(headerNavigationItem => {
				headerNavigationItem.classList.remove('header__navigation-item--active')
			})
			headerNavigationItemsMobile.forEach(headerNavigationItem => {
				headerNavigationItem.classList.remove('header__navigation-item--active')
			})
		}
	}
}

allocateNavigation()
window.addEventListener('scroll', allocateNavigation)

// auction timer
let hours = 23
let minutes = 59
let seconds = 60

const auctionHours = document.querySelector('.auction__hours')
const auctionMinutes = document.querySelector('.auction__minutes')
const auctionSeconds = document.querySelector('.auction__seconds')

auctionHours.innerHTML = hours < 10 ? `0${hours}` : hours
auctionMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes
auctionSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds

setInterval(() => {
	seconds -= 1

	if (seconds === 0) {
		minutes -= 1
		seconds = 60

		if (minutes === 0) {
			hours -= 1
			minutes = 59

			if (hours === 0) {
				hours = 23
				minutes = 59
				seconds = 59
			}
		}
	}

	auctionHours.innerHTML = hours < 10 ? `0${hours}` : hours
	auctionMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes
	auctionSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds
}, 1000)

// new stickers slider
new Swiper('.new-stickers__swiper-container', {
	pagination: {
		el: '.new-stickers__swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				' new-stickers__button">' +
				(index + 1) +
				'</span>'
			)
		},
	},
	slidesPerView: 3,

	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
})

// another auctions show all columns
const anotherAuctionsColumns = document.querySelectorAll(
	'.another-auctions__column'
)
const anotherAuctionsBottomBtn = document.querySelector(
	'.another-auctions__bottom-btn'
)

const hideAnotherAuctionsColumns = visibleBlocks => {
	anotherAuctionsColumns.forEach((anotherAuctionsColumn, i) => {
		if (i > visibleBlocks) {
			anotherAuctionsColumn.classList.add('another-auctions__column--hidden')
		}
	})
}

const showAnotherAuctionsColumns = () => {
	anotherAuctionsColumns.forEach(anotherAuctionsColumn => {
		anotherAuctionsColumn.classList.remove('another-auctions__column--hidden')
	})
}

hideAnotherAuctionsColumns(3)

anotherAuctionsBottomBtn.addEventListener('click', () => {
	showAnotherAuctionsColumns()
	anotherAuctionsBottomBtn.classList.add('another-auctions__bottom-btn--hidden')
})

// distribution toggle check mark
const distributionFormCheckWrapper = document.querySelector(
	'.distribution__form-check-wrapper'
)

const distributionFormCheck = document.querySelector(
	'.distribution__form-check'
)

const distributionFormCheckToggleVisible = () => {
	if (
		distributionFormCheck.classList.contains(
			'distribution__form-check--visible'
		)
	) {
		distributionFormCheck.classList.remove('distribution__form-check--visible')
	} else {
		distributionFormCheck.classList.add('distribution__form-check--visible')
	}
}

distributionFormCheckWrapper.addEventListener(
	'click',
	distributionFormCheckToggleVisible
)

// be author drop file
const beAuthorFile = document.querySelector('.be-author__file')

beAuthorFile.addEventListener('dragover', e => {
	e.preventDefault()
	beAuthorFile.classList.add('be-author__file--active')
})

beAuthorFile.addEventListener('dragleave', e => {
	e.preventDefault()
	beAuthorFile.classList.remove('be-author__file--active')
})

beAuthorFile.addEventListener('drop', e => {
	beAuthorFile.classList.remove('be-author__file--active')
	const beAuthorFileName = beAuthorFile.querySelector('p')
	const file = e.dataTransfer.files[0]

	beAuthorFileName.textContent = file.name
	e.preventDefault()
})

beAuthorFile.addEventListener('click', () => {
	const fileInput = document.createElement('input')
	fileInput.type = 'file'
	fileInput.style.display = 'none'

	fileInput.addEventListener('input', e => {
		console.log('qwe')
		const beAuthorFileName = beAuthorFile.querySelector('p')
		const file = e.target.files[0]
		console.log(beAuthorFileName)

		beAuthorFileName.textContent = file.name
	})

	document.body.appendChild(fileInput)
	fileInput.click()
	document.body.removeChild(fileInput)
})
