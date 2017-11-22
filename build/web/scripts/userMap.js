var PRECIO = 0.3;//300 colones el km
var DRIVER_ICON = "pictures/icons/icons8-pickup-front-view.png";
var model = new Model();
var routeInterval;

Array.prototype.hasMin = function (attrib) {
    return this.reduce(function (prev, curr) {
        return prev[attrib] < curr[attrib] ? prev : curr;
    });
}

$(document).ready(function(){
    $("#mapLink").css("display","none");
})

function initMap() {
    var markers = {};
    var markerConductor = new google.maps.Marker();
    var markerUbicacion = new google.maps.Marker();
    var markerdestino = new google.maps.Marker();
    var distanceMatrixService = new google.maps.DistanceMatrixService();
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
    document.getElementById('start').addEventListener('click', function () {
        markerConductor.setMap(null);
        delete markers.conductor;
        swalOrigenDestino("start", "Origen");
    });
    document.getElementById('end').addEventListener('click', function () {
        markerConductor.setMap(null);
        delete markers.conductor;
        swalOrigenDestino("end", "Destino");
    });
    document.getElementById('buscar').addEventListener('click',findPlace); 
    document.getElementById('mapaBuscador').addEventListener('submit',findPlace); 
    function findPlace (event) {
        event.preventDefault()
        clean();
        var address = document.getElementById('destinoABuscar').value;
        if (!address.toLowerCase().includes("costa rica"))
            address += " costa rica"
        geocodeAddress(address, "start");
    }
    map.addListener('click', function (event) {
        addMarker(event.latLng);
    });

    function geocodeAddress(address, ubicacion) {
        geocoder.geocode({'address': address}, function (results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);

                if (ubicacion == "start") {
                    markerUbicacion.setMap(map);
                    markerUbicacion.setPosition(results[0].geometry.location);
                    markers['ubicacion'] = markerUbicacion;
                } else if (ubicacion == "end") {
                    markerdestino.setMap(map);
                    markerdestino.setPosition(results[0].geometry.location);
                    markers['destino'] = markerdestino;
                }

                genRoute();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
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
    function fn_ok(respuesta) {
        var lat = respuesta.coords.latitude;
        var lng = respuesta.coords.longitude;
        var place = {lat: lat, lng: lng};
        map.setCenter(place);
        markerUbicacion.setPosition(place);
        markerUbicacion.setMap(map);
        markers['ubicacion'] = markerUbicacion;

        genRoute();
    }

    function addMarker(location) {
        if (!markers['ubicacion']) {
            markerUbicacion.setPosition(location);
            markerUbicacion.setMap(map);
            markers['ubicacion'] = markerUbicacion;
        } else {
            markerdestino.setPosition(location);
            markerdestino.setMap(map);
            markers['destino'] = markerdestino;
        }

        genRoute();
    }
    function genRoute() {
        if (Object.keys(markers).length == 2) {
            var u = {lat: markers['ubicacion'].getPosition().lat(), lng: markers['ubicacion'].getPosition().lng()};
            var d = {lat: markers['destino'].getPosition().lat(), lng: markers['destino'].getPosition().lng()};
            //map.setCenter(u);
            directionsService.route({
                origin: u,
                destination: d,
                travelMode: 'DRIVING',
            }, function (response, status) {
                if (status === 'OK') {
                    noMostrarMarkers();
                    directionsDisplay.setMap(map);//vamos a trazar una ruta
                    directionsDisplay.setDirections(response);
                    setTimeout(function () {
                        timeAndDistance(u, d);
                    }, 2000);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        } else if (Object.keys(markers).length == 3) {
            var u = {lat: markers['conductor'].getPosition().lat(), lng: markers['conductor'].getPosition().lng()};
            var wp = {lat: markers['ubicacion'].getPosition().lat(), lng: markers['ubicacion'].getPosition().lng()};
            var d = {lat: markers['destino'].getPosition().lat(), lng: markers['destino'].getPosition().lng()};

            updateRoute(u, d, [{location: wp}]);
            updateDriverAndDistance(wp);
            console.log(model.driver.distance)

            if (model.driver.distance < 50) {//menor a 50 metros
                clearInterval(routeInterval);
                swal({
                    title: 'Tu conductor esta llegando',
                    html: $('<div>')
                            .addClass('some-class')
                            .text(model.driver.usuario.nombre +" esta a "+model.driver.distance + "metros"),
                    animation: false,
                    customClass: 'animated tada',
                    allowOutsideClick: false
                }).then(function(){
                    markers['recogida'] = markerUbicacion;
                    model.driver.distance = 1000;
                    routeInterval = setInterval(function () {
                                        genRoute();
                                    }, 3000);
                })
            }
                
            
        } else if (Object.keys(markers).length == 4) {//del usuario al destino
            var u = {lat: markers['conductor'].getPosition().lat(), lng: markers['conductor'].getPosition().lng()};
            var d = {lat: markers['destino'].getPosition().lat(), lng: markers['destino'].getPosition().lng()};
            
            updateRoute(u, d);
            updateDriverAndDistance(d);
            console.log(model.driver.distance)
            markerConductor.setMap(map);

            if (model.driver.distance < 50) {//menor a 50 metros
                clearInterval(routeInterval);
                swal({
                    title: 'Finalizando el viaje',
                    html: $('<div>')
                            .addClass('some-class')
                            .text(model.driver.usuario.nombre +" esta a "+model.driver.distance + "metros"),
                    animation: false,
                    customClass: 'animated tada',
                    allowOutsideClick: false
                }).then(function(){
                    parar();//parando el timer (tiempo del viaje) 
                    model.viaje.duro = $("#timer").html();
                    reinicio();//poner en 0 el cronometro
                }).then(function(){
                    var str ="Origen: "+ model.viaje.origen+"<br>"
                            +"Destino: "+ model.viaje.destino+"<br>"
                            +"distancia: "+ model.viaje.distancia+"<br>"
                            +"duracion: "+ model.viaje.duro+"<br>"
                            +"precio: "+ model.viaje.precio+"<br>";
                    swal({
                        title:"Fin del viaje",
                        html: '<p>'+str+'<p>',
                        animation: false,
                        customClass: 'animated tada',
                        allowOutsideClick: false
                    }).then(function(){
                        $("#metodo-pago").css("display","block");
                    })
                    
                })
            }
        }
    }
    function updateDriverAndDistance(destination) {
        Proxy.getConductorId(model.driver.usuarioIdUsuario, function (driver) {
            //console.log(driver.usuario.direccion.getLatLng());
            distanceMatrixService.getDistanceMatrix(
                    {
                        origins: [driver.usuario.direccion.getLatLng()],
                        destinations: [destination],
                        travelMode: 'DRIVING',
                    }, function (response, status) {//calculando las distancias entre los conductores activos y el cliente
                if (status == "OK") {
                    //console.log(response);
                    driver.distance = response.rows[0].elements[0].distance.value;
                    driver.proximity = response.rows[0].elements[0];
                    model.driver = driver;
                    //console.log(driver);
                    markerConductor.setPosition(driver.usuario.direccion.getLatLng());
                    markers['conductor'] = markerConductor;
                } else {
                    alert('Directions request failed due to ' + status);
                }

            }
            )
        });
    }

    function updateRoute(ubication, destination, waypoints) {
        //waypoints: [{location: LatLng}]
        var route = {
            origin: ubication,
            destination: destination,
            travelMode: 'DRIVING',
        }
        if (waypoints) {
            route.waypoints = waypoints;
        }
        //map.setCenter(ubication);
        directionsService.route(route, function (response, status) {
            if (status === 'OK') {
                noMostrarMarkers();
                directionsDisplay.setMap(map);//vamos a trazar una ruta
                directionsDisplay.setDirections(response);
                if (markers['conductor']) {
                    setTimeout(function () {
                        markers['conductor'].setMap(map)
                    }, 2000);
                }
            } else {
                alert('Directions request failed due to ' + status);
            }
        });

    }

    function noMostrarMarkers() {
        for (k in markers)
            markers[k].setMap(null);
    }

    function clean() {
        parar();//parar el timer(tiempo)
        reinicio();//reinicio//oculta el timer y lo reinicia a 0
        clearInterval(routeInterval);
        for (k in markers)
            markers[k].setMap(null);
        markers = {};
        directionsDisplay.setMap(null);//limpiando el mapa de rutas
    }

    function timeAndDistance(ubication, destination) {
        distanceMatrixService.getDistanceMatrix(
                {
                    origins: [ubication],
                    destinations: [destination],
                    travelMode: 'DRIVING',
                }, function (response, status) {
            if (status == "OK") {
                //console.log(response);
                var distance = response.rows[0].elements[0].distance.value
                console.log(response.rows[0].elements[0].distance.text);
                var str = "Origen: " + response.originAddresses[0] + "<br>"
                        + "Destino: " + response.destinationAddresses[0] + "<br>"
                        + "Distancia: " + response.rows[0].elements[0].distance.text + "<br>"
                        + "Duracion: " + response.rows[0].elements[0].duration.text + "<br>"
                        + "Precio estimado: ₡" + (distance * PRECIO).toFixed(2);
                model.viaje ={
                    origen: response.originAddresses[0],
                    destino: response.destinationAddresses[0],
                    distancia: response.rows[0].elements[0].distance.text,
                    duracion: response.rows[0].elements[0].duration.text,
                    precio: (distance * PRECIO).toFixed(2)
                }
                swal({
                    title: 'Quieres pedir un viaje?',
                    html: "<p>" + str + "</p>",
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, pedir!'
                }).then(function () {
                    Proxy.getConductores(function (conductores) {
                        var activos = conductores.filter(function (c) {
                            return c.vehiculo.estado == true
                        });
                        var driversAddres = activos.map(function (c) {
                            return c.usuario.direccion.getLatLng();
                        });
                        console.log(driversAddres);
                        distanceMatrixService.getDistanceMatrix(
                                {
                                    origins: [ubication],
                                    destinations: driversAddres,
                                    travelMode: 'DRIVING',
                                }, function (response, status) {//calculando las distancias entre los conductores activos y el cliente
                            if (status == "OK") {
                                //console.log(response.rows);
                                var distances = response.rows[0].elements.map(function (e) {
                                    return e;
                                })
                                activos = activos.map(function (c, i) {
                                    c.distance = distances[i].distance.value;
                                    c.proximity = distances[i];
                                    return c;
                                })
                                console.log(activos);

                                var c = activos.hasMin('distance');
                                console.log(c);
                                model.driver = c;
                                if (c != undefined) {
                                    swal(
                                            'Exito!',
                                            'El conductor mas sercano se dirige hacia ti. ' +
                                            c.usuario.nombre,
                                            'success'
                                            )
                                    inicio();//inicio del timer(tiempo)
                                    markerConductor.setMap(map);
                                    markerConductor.setPosition({lat: c.usuario.direccion.lat, lng: c.usuario.direccion.lng});
                                    markerConductor.setIcon("pictures/icons/icons8-pickup-front-view.png");
                                    markerConductor.setTitle(model.driver.usuario.nombre);
                                    markerConductor.setZIndex(10000);
                                    markers['conductor'] = markerConductor;

                                    routeInterval = setInterval(genRoute, 5000);

                                }

                            }
                        }
                        )
                    });

                })
            }
        });
    }

    function swalOrigenDestino(ubicacion, title) {
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

                            geocodeAddress(address, ubicacion);
                            resolve();
                        }
                    }, 2000)
                })
            }
        })
    }
}







