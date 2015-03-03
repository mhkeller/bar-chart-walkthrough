(function(){
	/* Code goes here */

	// Load the data from the json file. This path is relative to our `main.js` file so we have to use the double dots, `..` to go back down a directory and then into our data folder.
	$.getJSON('../data/ebola-totals-by-country.json', function(ebolaData){

		var template = '<div class="country-group"><div class="name"></div><div class="bar"><div class="number"></div></div></div>';

		// for (var i = 0; i < ebolaData.length; i++){
		// 	console.log(i);
		// 	console.log(ebolaData[i]);
		// }

		// The underscore solution
		var data_max = _.max(ebolaData, function(ebolaCountry){ return ebolaCountry.cases; }).cases,
				series = 'cases';

		// A simple solution
		// var data_max = 0;
		// ebolaData.forEach(function(countryData){
		// 	if (countryData.cases > data_max){
		// 		data_max = countryData.cases;
		// 	}
		// });
		// console.log(data_max) // 14026


		ebolaData.forEach(function(ebolaCountry, index){
			// Step 1: Make our template string a jQuery object
			var $template = $(template);

			// console.log('Before', template)
			// console.log('After', $template)

			// Step 2: Start adding our data to our jQuery-ified template
			$template.find('.name').html(ebolaCountry.name);
			$template.find('.bar').css({
				width: (ebolaCountry[series] / data_max)*100 + '%'
			})
			$template.find('.number').html(ebolaCountry[series]);


			// Step 4/5: Add our country HTML to the canvas
			$('#canvas').append($template);

		});

		$('.js-button').on('click', function(){
			// Step 1: Change the active class
			$('.js-button').removeClass('active');
			$(this).addClass('active');

			// Step 2: Which series are we clicking on?
			var series = $(this).attr('data-which');

			// Step 3: Set the css of our existing bars to the data in our series
			$('.country-group').each(function(index){
				var $country_group = $(this)

				$country_group.find('.bar').css({
									// ebolaData[0].cases
									// ebolaData[1].cases or this is .deaths
					width: (ebolaData[index][series] / data_max)*100 + '%'
				})
				$country_group.find('.number').html(ebolaData[index][series]);
			});	

		})

	});

}).call(this);