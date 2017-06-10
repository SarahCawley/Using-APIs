$( document ).ready(function() {
    var weatherKey = '0d176543aa1a9845f8aa6b6f43681801';
    var weatherURL = 'api.openweathermap.org/data/2.5/forecast/daily?cnt=5&appid=' + weatherKey
    console.log('wtf man');

    $.get('weatherURL'+ '&q=portland,u', function(data) {
        console.log(data);
    });

 //    $( "#target" ).submit(function( event ) {
	//   alert( "Handler for .submit() called." );
	//   event.preventDefault();
	// });
});

// http://api.openweathermap.org/data/2.5/forecast/daily?appid=0d176543aa1a9845f8aa6b6f43681801&q=portland,us&cnt=5
// api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7
// http://api.openweathermap.org/data/2.5/forecast?appid=0d176543aa1a9845f8aa6b6f43681801&q=portland,us