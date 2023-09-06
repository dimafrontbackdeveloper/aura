newStickersSlider = () => {
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
}

module.exports = newStickersSlider
