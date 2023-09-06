const distributionCheck = () => {
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
			distributionFormCheck.classList.remove(
				'distribution__form-check--visible'
			)
		} else {
			distributionFormCheck.classList.add('distribution__form-check--visible')
		}
	}

	distributionFormCheckWrapper.addEventListener(
		'click',
		distributionFormCheckToggleVisible
	)
}

export default distributionCheck
