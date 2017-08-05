var myLatLng = {lat: 43.6, lng: -79.38};
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
