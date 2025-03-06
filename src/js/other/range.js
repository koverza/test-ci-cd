import noUiSlider from 'nouislider';

export function range() {
	console.log('range works');

	const priceRange = document.getElementById('range');
	const priceMinInput = document.getElementById('price-min');
	const priceMaxInput = document.getElementById('price-max');

	noUiSlider.create(priceRange, {
		start: [10, 200],
		connect: true,
		range: {
			min: 0,
			max: 500
		},
		step: 5,
		tooltips: true,
		format: {
			to: function (value) {
				return '$' + value.toFixed(0); // Форматируем как валюту
			},
			from: function (value) {
				return value.replace('$', '');
			}
		}
	});

	priceRange.noUiSlider.on('update', function (values, handle) {
		if (handle === 0) {
			priceMinInput.value = values[0];
		} else {
			priceMaxInput.value = values[1];
		}
	});

}
