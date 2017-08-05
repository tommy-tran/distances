var myLatLng = {lat: 43.6, lng: -79.38};
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
// DirectionsService object uses route method to get results
var directionsService = new google.maps.DirectionsService();
// DirectionsRenderer object displays route
var directionsDisplay = new google.maps.DirectionsRenderer();
// Binding the directionsDisplay to map
directionsDisplay.setMap(map);

function calculateRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    directionsService.route(request,
    function(result, status){
        if (status==google.maps.DirectionsStatus.OK) {
            $("#output").html(
                `<div class='alert-info'>From: ${document.getElementById("from").value}<br/>
                To: ${document.getElementById("to").value}<br/>
                Driving distance:
                ${result.routes[0].legs[0].distance.text}<br/>
                Duration:
                ${result.routes[0].legs[0].duration.text}
                </div>`
            )
            // Display route
            directionsDisplay.setDirections(result);
        } else {
            // Delete route
            directionsDisplay.setDirections({routes: []});
            map.setCenter(myLatLng);
            // Show error msg
            $("output").html(`<div class="alert-danger">Invalid parameters</div>`);
        }
    });
}

var options = {
    types: ['(cities)']
}

var From = document.getElementById('from');
var fromAutoComplete = new google.maps.places.Autocomplete(From, options);

var To = document.getElementById('to');
var toAutoComplete = new google.maps.places.Autocomplete(To, options);


