const anotherAuctionsShowAllColumns = () => {
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
		anotherAuctionsBottomBtn.classList.add(
			'another-auctions__bottom-btn--hidden'
		)
	})
}

module.exports = anotherAuctionsShowAllColumns
