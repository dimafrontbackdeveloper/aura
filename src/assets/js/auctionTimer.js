// auction timer

const auctionTimer = () => {
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
}

module.exports = auctionTimer
