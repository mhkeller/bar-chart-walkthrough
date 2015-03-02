(function(){
	/* Code goes here */

	// Load the data from the json file. This path is relative to our `main.js` file so we have to use the double dots, `..` to go back down a directory and then into our data folder.
	$.getJSON('../data/ebola-totals-by-country.json', function(ebolaData){

		var country_graph = 	'<div class="country-group">' +
														'<div class="name"></div>' +
														'<div class="bar"><div class="label"></div></div>' +
													'</div>';

		var max_cases = _.max(ebolaData, function(d){ return d.cases; }).cases;

		console.log(max_cases);

		ebolaData.forEach(function(country){
			var $country_graph = $(country_graph);
			$country_graph.find('.name').html(country.name)
			$country_graph.find('.bar').css({
				width: (country.cases / max_cases)*100 + '%'
			});

			$country_graph.find('.label').html(country.cases);

			$('#canvas').append($country_graph);
		});


		function updateBars(series){
			$('.country-group').each(function(index, el){
				var $country_group = $(el);

				$country_group.find('.bar').css({
					width: (ebolaData[index][series] / max_cases)*100 + '%'
				});

			$country_group.find('.label').html(ebolaData[index][series]);

			});
		}

		$('.js-button').on('click', function(){
			var series = $(this).attr('data-which-series');
			updateBars(series);
		});

	});


}).call(this);