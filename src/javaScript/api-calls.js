$( document ).ready(function() {
    var weatherKey = '0d176543aa1a9845f8aa6b6f43681801';
    var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&appid=' + weatherKey
    var googleMapKey = 'AIzaSyA1eWOL3U1ssEro4KFvF9zVbw0iR8yViFU';

    
    //Creates heading with appropriate days of the week. 
    var today = new Date().getDay(); //returns int for week day starting at 0 for Sunday.
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateHeading = '<th class="text-center">Location</th><th class="text-center">Today</th>'

    //adds one day to the heading. Checks day number is still within days array (if is > than 6)
    for(i=1; i<5; i++){
    	var day = today + i;
    	if(day > 6){
    		day -= 7;
    	}
    	dateHeading += "<th class='text-center'>" + days[day] + "</th>"
    }
    $('#tableHeader').append(dateHeading);

    // Gets city name from input, calls openweather api, builds table
    // Creates new row for each city searched for
    $("#search").on("submit", function(e) {
    	e.preventDefault();
		var city = $('#searchBar').val();

		$(".starting-text").addClass("hidden");
		$("table").removeClass("hidden");

		//gets data from openweathermap
		$.get(weatherURL + '&q=' + city + ',us', function(data) {

			//creates new table row
			var trMarkup = "<tr><td>";
			
			//gets map info from google maps
			var latitude = data.city.coord.lat;
			var longitude = data.city.coord.lon;
			var googleMapURL = '"https://www.google.com/maps/embed/v1/view?key=' + googleMapKey + '&center=' + latitude +',' + longitude + '&zoom=7" ';
			// add the iframe with the google map to the markup
			trMarkup += "<iframe src=" + googleMapURL + "title='City map'></iframe></td>"
			
			//adds the weather icon and description for each day
			for(i=0; i<5; i++){
				var weatherIcon = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png ";
				//convert temperature from kelvin to Fahrenheit
				var maxTemp = Math.round(data.list[i].temp.max * (9/5) - 459.67);
				var minTemp = Math.round(data.list[i].temp.min * (9/5) - 459.67);
				//add the weather data to the markup
				trMarkup += "<td ><div class='thumbnail'><img src=" + weatherIcon +  "alt='Weather Icon' class='img-thumbnail'><div class='caption text-center'><h4>" + data.list[i].weather[0].description + "</h4><div>High: " + maxTemp + "&#8457<br>Low: " + minTemp + "&#8457</div></div></td>";
			}
			// add newly created wather data row to the table
			$(".table").append(trMarkup + "</tr>");
		});
	});  
});
