var io = require('indian-ocean'),
		d3 = require('d3'),
		moment = require('moment');

var daily_report_data = io.readDataSync('DHS_Daily_Report.csv');

daily_report_data = daily_report_data.filter(function(report){
		// Only take the rows that have a date
		return report['Date of Census'];
	})

daily_report_data.forEach(function(report){
		var date = new Date(report['Date of Census']);
		report.date_month = date.getFullYear() + '-' + (date.getMonth() + 1);
		delete report['Date of Census'];
	});




var monthly_reports = d3.nest()
											.key(function(d){ return d.date_month; })
											.rollup(function(list){
												return {
													total_individuals: d3.sum(list, function(d){ return d['Total Individuals in Shelter'] }),
													total_adults: d3.sum(list, function(d){ return d['Total Adults in Shelter'] }),
													total_children: d3.sum(list, function(d){ return d['Total Children in Shelter'] })
												}
											})
											.entries(daily_report_data);

monthly_reports = monthly_reports.map(function(report){
	return {
		date: report.key,
		total_individuals: report.values.total_individuals,
    total_adults: report.values.total_adults,
    total_children: report.values.total_children
	};
}).sort(function(a, b){ 
	return d3.ascending(a.date, b.date); 
});

console.log(monthly_reports)

io.writeDataSync('out/dhs_monthly_reports.csv', monthly_reports);