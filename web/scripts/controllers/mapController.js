
function MapController(model, markers, markerConductor, markerUbicacion, markerDestino, distanceMatrixService, directionsService, directionsDisplay, geocoder, map) {
    this.MapController(model, markers, markerConductor, markerUbicacion, markerDestino, distanceMatrixService, directionsService, directionsDisplay, geocoder, map);
}

MapController.prototype = {
    MapController: function (model, markers, markerConductor, markerUbicacion, markerDestino, distanceMatrixService, directionsService, directionsDisplay, geocoder, map) {
        this.model = model;
        this.markers = markers;
        this.markerConductor = markerConductor;
        this.markerUbicacion = markerUbicacion;
        this.markerDestino = markerDestino;
        this.distanceMatrixService = distanceMatrixService;
        this.directionsService = directionsService;
        this.directionsDisplay = directionsDisplay;
        this.geocoder = geocoder;
        this.map = map;
    },
    geocodeAddress: function (address, ubicacion) {
        this.geocoder.geocode({'address': address}, function (results, status) {
            if (status === 'OK') {
                this.map.setCenter(results[0].geometry.location);

                if (ubicacion == "start") {
                    mapController.markerUbicacion.setMap(map);
                    mapController.markerUbicacion.setPosition(results[0].geometry.location);
                    mapController.markers['ubicacion'] = mapController.markerUbicacion;
                } else if (ubicacion == "end") {
                    mapController.markerDestino.setMap(mapController.map);
                    mapController.markerDestino.setPosition(results[0].geometry.location);
                    mapController.markers['destino'] = mapController.markerDestino;
                }

                //genRoute();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        })
    },
    start: function () {
        this.markerConductor.setMap(null);
        delete this.markers.conductor;
        swalOrigenDestino("start", "Origen", this.geocodeAddress);
    },
    end: function () {
        this.markerConductor.setMap(null);
        delete this.markers.conductor;
        swalOrigenDestino("end", "Destino", this.geocodeAddress);
    },
    clean: function () {
        for (var k in this.markers)
            this.markers[k].setMap(null);
        this.markers = {};
        this.directionsDisplay.setMap(null);//limpiando el mapa de rutas
    },
    geolocation: function () {
        function ubicacion() {
            navigator.geolocation.getCurrentPosition(fn_ok, fn_error);
        }

        this.directionsDisplay.setMap(null);//limpiando el mapa de rutas
        ubicacion(this.map, this.directionsService, this.directionsDisplay);
    },
    route: function (o, d, wp) {
        var route = {
            origin: o,
            destination: d,
            travelMode: 'DRIVING',
        }
        if (wp)
            route.waypoints = wp;

        this.directionsService.route(route, function (response, status) {
            if (status === 'OK') {
                this.noMostrarMarkers();
                this.directionsDisplay.setMap(map);
                this.directionsDisplay.setDirections(response);
            } else {
                alert('Directions request failed due to ' + status);
            }
        });
    },
    timeAndDistance: function (o, d) {
        this.distanceMatrixService.getDistanceMatrix(
                {
                    origins: [o],
                    destinations: [d],
                    travelMode: 'DRIVING',
                }, function (response, status) {
            if (status == "OK") {
                //console.log(response);
                this.model.distancia = {
                    duration: response.rows[0].elements[0].duration,
                    distance: response.rows[0].elements[0].distance
                }
            } else {
                alert('Directions request failed due to ' + status);
            }
        }
        )
    },
    followRoute: function () {},
    startTravel: function () {},
    noMostrarMarkers: function () {
        for (var k in markers)
            this.markers[k].setMap(null);
    },
    addMarker: function (location) {
        if (!this.markers['ubicacion']) {
            this.markerUbicacion.setPosition(location);
            this.markerUbicacion.setMap(map);
            this.markers['ubicacion'] = this.markerUbicacion;
        } else {
            this.markerdestino.setPosition(location);
            this.markerdestino.setMap(map);
            this.markers['destino'] = this.markerdestino;
        }

        //genRoute();
    }
};

function fn_ok(respuesta, status) {
    if (status = "OK") {
        var lat = respuesta.coords.latitude;
        var lng = respuesta.coords.longitude;
        var place = {lat: lat, lng: lng};
        mapController.map.setCenter(place);
        mapController.markerUbicacion.setPosition(place);
        mapController.markerUbicacion.setMap(map);
        mapController.markers['ubicacion'] = mapController.markerUbicacion;
        //genRoute();
    }
}

function fn_error(positionError) {
    switch (positionError.code)
    {
        case positionError.PERMISSION_DENIED:
            alert("No se ha permitido el acceso a la posición del usuario. " + positionError.message);
            break;
        case positionError.POSITION_UNAVAILABLE:
            alert("No se ha podido acceder a la información de su posición. " + positionError.message);
            break;
        case positionError.TIMEOUT:
            alert("El servicio ha tardado demasiado tiempo en responder. " + positionError.message);
            break;
        default:
            alert("Error desconocido.");
    }
}



function swalOrigenDestino(ubicacion, title, f) {
    swal({
        title: title,
        input: 'text',
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,
        preConfirm: function (address) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (address === '') {
                        reject('Introduce alguna Ubicacion.')
                    } else {
                        if (!address.toLowerCase().includes("costa rica"))
                            address += " costa rica";//incluyendole costa rica para facilitar la busqueda

                        f(address, ubicacion);
                        resolve();
                    }
                }, 2000)
            })
        }
    })
}