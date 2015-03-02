var io = require('indian-ocean'),
		d3 = require('d3');

var ebola_data = io.readDataSync('ebola.csv');

var nested_by_country = d3.nest()
	.key(function(d){ return d.country_name; })
	.rollup(function(list){
		return {
			cases: d3.sum(list, function(d){ return d.cases; }),
			deaths: d3.sum(list, function(d){ return d.deaths; }),
		}
	})
	.entries(ebola_data);

io.writeDataSync('out/ebola-totals-by-country.json', nested_by_country);
