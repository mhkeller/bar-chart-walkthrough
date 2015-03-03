(function(){

    $('#chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Homeless counts by month'
        },
        subtitle: {
            text: 'Source: NYC Open Data'
        },
        xAxis: {
            categories: [
          			'2013 October',
								'2013-11',
								'2013-12',
								'2013-8',
								'2013-9',
								'2014-1',
								'2014-10',
								'2014-11',
								'2014-12',
								'2014-2',
								'2014-3',
								'2014-4',
								'2014-5',
								'2014-6',
								'2014-7',
								'2014-8',
								'2014-9',
								'2015-1',
								'2015-2'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Counts'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Total individuals',
            color: '#fc0',
            data: [1524989,1406768,1530454,546547,1408014,1595561,1314520,1920942,1821084,1470306,1567034,1580442,1646038,1393640,1682936,1699869,1563482,1872987,1444885]

        }, {
            name: 'Total adults',
            color: 'magenta',
            data: [867570,809821,869299,311746,802017,907066,746453,1091450,1035977,840027,890571,898729,936643,791487,956090,966532,888719,1073809,829909]

        }, {
            name: 'Total children',
            color: 'steelblue',
            data: [657419,596947,661155,234801,605997,688495,568067,829492,785107,630279,676463,681713,709395,602153,726846,733337,674763,799178,
614976]

        }]
		});

}).call(this);