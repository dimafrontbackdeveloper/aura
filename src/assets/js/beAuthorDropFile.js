const beAuthorDropFile = () => {
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
}

export default beAuthorDropFile
