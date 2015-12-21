 google.load("visualization", "1", {packages:["timeline"]});
 google.setOnLoadCallback(drawChart);

      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Run I', new Date(2015, 12, 10, 17, 15), new Date(2015, 12, 11, 8, 50) ],
          [ 'Run J', new Date(2015, 12, 10), new Date(2015, 12, 11) ],
          [ 'Run Q', new Date(2015, 12, 10), new Date(2015, 12, 11) ]]);

        chart.draw(dataTable);
      }