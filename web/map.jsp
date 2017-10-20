<!DOCTYPE html>
<html>
    <head>
        <%@ include file="imports.jspf" %> 
    </head>
    <body style="height: 100%;">
        <header style="position: absolute;left:0px;right: 0px;">
            <%@ include file="nav.jspf" %> 
        </header>
        <div id="floating-panel">
            <b>Start: </b>
            <select id="start">
                <option value='{"lat": 9.970772, "lng": -84.129984}'>lagunilla</option>
                <option value='{"lat": 10.001058, "lng": -84.111285}'>Casa</option>
                <option value='{"lat": 10.027433, "lng": -84.157216}'>mecanico</option>
                <option value='{"lat": 10.016160, "lng": -84.132244}'>mejenga</option>
                <option value='{"lat": 10.068056, "lng": -84.077681}'>Monte de la cruz</option>
                <option value='{"lat": 9.937850, "lng": -84.077927}'>Rapidas</option>
                <option value='{"lat": 9.998361, "lng": -84.204262}'>Aeropuerto</option>
                <option value='{"lat": 9.994905, "lng": -84.113443}'>Pirro</option>
            </select><br>
            <b>End: </b>
            <select id="end">
                <option value='{"lat": 9.970772, "lng": -84.129984}'>lagunilla</option>
                <option value='{"lat": 10.001058, "lng": -84.111285}'>Casa</option>
                <option value='{"lat": 10.027433, "lng": -84.157216}'>mecanico</option>
                <option value='{"lat": 10.016160, "lng": -84.132244}'>mejenga</option>
                <option value='{"lat": 10.068056, "lng": -84.077681}'>Monte de la cruz</option>
                <option value='{"lat": 9.937850, "lng": -84.077927}'>Rapidas</option>
                <option value='{"lat": 9.998361, "lng": -84.204262}'>Aeropuerto</option>
                <option value='{"lat": 9.994905, "lng": -84.113443}'>Pirro</option>
            </select><br>
            <button type="button" id="ubicacion">Ubication</button>
            <button type="button" id="clear">clear</button>
        </div>
        <div id="map"></div>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjuNx2S9O9IDC7lZZjIFWrFPXh8SmdPyQ&callback=initMap">
        </script>
    </body>
</html>
