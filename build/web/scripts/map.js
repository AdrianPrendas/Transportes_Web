

function initMap() {
    var markers = {};
    var markerUbicacion = new google.maps.Marker();
    var markerdestino = new google.maps.Marker();
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 10.001058, lng: -84.111285}
    });
    directionsDisplay.setMap(map);
    
    document.getElementById('clean').addEventListener('click', clean);
    document.getElementById('ubicacion').addEventListener('click', miUbicacion);
    document.getElementById('start').addEventListener('click',function(){
        swalOrigenDestino("start", "Origen");
    });
    document.getElementById('end').addEventListener('click', function(){
        swalOrigenDestino("end", "Destino");
    });
    document.getElementById('buscar').addEventListener('click', function(){
        clean();
        var address = document.getElementById('destinoABuscar').value;
        geocodeAddress(address,"start");
    });
    map.addListener('click', function (event) {addMarker(event.latLng);});
    
    function geocodeAddress(address,ubicacion) {
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);

        if(ubicacion == "start"){
            markerUbicacion = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            markerUbicacion.setPosition(location);
            markers['ubicacion'] = markerUbicacion;
        }else if(ubicacion == "end"){
            markerdestino = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            markerdestino.setPosition(location);
            markers['destino'] = markerdestino;
        }

        genRoute();

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    }

    function onChangeHandler() {
        directionsDisplay.setMap(map);//vamos a trazar una ruta
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    }
    
    function miUbicacion() {
        directionsDisplay.setMap(null);//limpiando el mapa de rutas
        ubicacion(map, directionsService, directionsDisplay);
    }

    function ubicacion() {
        navigator.geolocation.getCurrentPosition(fn_ok, fn_error);
        
    }
    function fn_error(positionError) {
        switch (positionError.code)
        {
            case positionError.PERMISSION_DENIED:
            alert("No se ha permitido el acceso a la posición del usuario. "+ positionError.message);
            break;
            case positionError.POSITION_UNAVAILABLE:
            alert("No se ha podido acceder a la información de su posición. "+ positionError.message);
            break;
            case positionError.TIMEOUT:
            alert("El servicio ha tardado demasiado tiempo en responder. "+ positionError.message);
            break;
            default:
            alert("Error desconocido.");
        }
    }
    function fn_ok(respuesta, status) {
        var lat = respuesta.coords.latitude;
        var lng = respuesta.coords.longitude;
        var place = {lat: lat, lng: lng};
        map.setCenter(place);
        markerUbicacion.setPosition(place);
        markerUbicacion.setMap(map);
        markers['ubicacion'] = markerUbicacion;
    }
    
    function addMarker(location) {
        if(!markers['ubicacion']){
            markerUbicacion.setPosition(location);
            markerUbicacion.setMap(map);
            markers['ubicacion'] = markerUbicacion;
        }else{
            markerdestino.setPosition(location);
            markerdestino.setMap(map);
            markers['destino'] = markerdestino;
        }

        genRoute();
    }
    function genRoute(){
        if (Object.keys(markers).length == 2) {
            var u = {lat: markers['ubicacion'].getPosition().lat(), lng: markers['ubicacion'].getPosition().lng()};
            var d = {lat: markers['destino'].getPosition().lat(), lng: markers['destino'].getPosition().lng()};
            map.setCenter(u);
            directionsService.route({
                origin: u,
                destination: d,
                travelMode: 'DRIVING',
            }, function (response, status) {
                if (status === 'OK') {
                    noMostrarMarkers();
                    directionsDisplay.setMap(map);//vamos a trazar una ruta
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    }

    function noMostrarMarkers() {
        for (k in markers)
            markers[k].setMap(null);
    }

    function clean() {
        for (k in markers)
            markers[k].setMap(null);
        markers = {};
        directionsDisplay.setMap(null);//limpiando el mapa de rutas
        markerdestino.setMap(null);
        markerUbicacion.setMap(null);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var origen = markerUbicacion.position;
        var destino = markerdestino.position;
        map.setCenter(origen);
        directionsService.route({
            origin: origen,
            destination: destino,
            travelMode: 'DRIVING',
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    function swalOrigenDestino(ubicacion,title){
        swal({
              title: title,
              input: 'text',
              confirmButtonText: 'Buscar',
              showLoaderOnConfirm: true,
              preConfirm: function (address) {
                return new Promise(function (resolve, reject) {
                  setTimeout(function() {
                    if (address === '') {
                      reject('Introduce alguna Ubicacion.')
                  } else {
                      geocodeAddress(address,ubicacion);
                          resolve();
                  }
            }, 2000)
            })
            },
        }).then(function (ubicacion) {
            swal({
                type: 'success',
                title: 'Encontrado!!!',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }
}






