(function(){
	/* Code goes here */

	// Load the data from the json file. This path is relative to our `main.js` file so we have to use the double dots, `..` to go back down a directory and then into our data folder.
	$.getJSON('../data/ebola-totals-by-country.json', function(ebolaData){

		var country_graph = 	'<div class="country-group">' +
														'<div class="country-name"></div>' +
														'<div class="cases-bar"><div class="label"></div></div>' +
													'</div>';

		var max_cases = _.max(ebolaData, function(d){ return d.cases_total; }).cases_total;

		console.log(max_cases)

		ebolaData.forEach(function(country){
			var $country_graph = $(country_graph);
			$country_graph.find('.country-name').html(country.name)
			$country_graph.find('.cases-bar').css({
				width: (country.cases_total / max_cases)*100 + '%'
			});

			$country_graph.find('.label').html(country.cases_total);

			$('#canvas').append($country_graph);
		});


	});

}).call(this);