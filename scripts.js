/**
 * @author Yasmin Nouh
 */

//credit Google with code sample 
 
 
 google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
    	
    	var obesityDataArray = [];
    	var vInterval = [];
    	
    	//create an array to hold "tick" dates
    	
    	for(var i=2; i<obesityData.length; i+=3){
    	
    		var myItem = [];
    		//create a separate date object for the year
    		//push that date object to the "tick" array
    		//as well as the "myItem" array
    		myItem.push(new Date(obesityData[i].year, 0, 1));
    		myItem.push(obesityData[i].percent);
    		obesityDataArray.push(myItem);
    	}
		
		//console.log(obesityDataArray);	
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Year');
      data.addColumn('number', 'NYC Obesity Rate');

      data.addRows(obesityDataArray);

      var options = {
        width: 1000,
        height: 563,
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Percent of Population'
        }
      };

      var chart = new google.visualization.LineChart(
        document.getElementById('ex0'));

      chart.draw(data, options);

    }