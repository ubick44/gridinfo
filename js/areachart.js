 google.load("visualization", "1", {packages:["corechart"]});
 google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Distribution', 'Aggregation'],
          ['2015/12/12 05:30',  1000,      400],
          ['2015/12/12 07:30',  1170,      460],
          ['2015/12/12 09:30',  660,       1120],
          ['2015/12/12 11:30',  1030,      540]
        ]);

        var options = {
          title: 'GRID usage',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }