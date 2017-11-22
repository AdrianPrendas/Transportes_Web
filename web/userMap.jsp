<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" session="true" %>
<%@page import="cr.ac.una.prograiv.taxi.domain.Usuario;"%>
<%
HttpSession sesion = request.getSession(true);
String tipoUsuario = new String();
if (sesion != null) {
if (sesion.getAttribute("usuario") == null) {
response.sendRedirect("index.jsp");
} else {
tipoUsuario = (String)sesion.getAttribute("tipo"); 
if(!tipoUsuario.endsWith("user"))
response.sendRedirect("index.jsp");
}
} else {
response.sendRedirect("index.jsp");
}
%>  
<!DOCTYPE html>
<html>
<head>
    <%@ include file="imports.jspf" %> 
    <script type="text/javascript" src="scripts/userMap.js"></script>
    <script src="scripts/cronometro.js" type="text/javascript"></script>
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <script src="scripts/paypal.js" type="text/javascript"></script>
</head>
<body style="height: 100%;">
    <header>
        <%@ include file="userNav.jspf" %> 
    </header>
    

<a href="#" id="start">
    <img src="pictures/A.png" title="origen" id="A" width="50">
</a>   

<a href="#" id="end">
    <img src="pictures/B.png" title="destino" id="B" width="50">    
</a>        

    <a href="#" id="clean">
    <img src="pictures/trash.png" title="limpiar" width="50" id="limpiar">
</a>

<div id="btn-ubicacion">
    <a href="#" id="ubicacion">
        <img src="pictures/location.png" title="ubicacion" width="50">
    </a>
</div>
<div id="map"></div>
<div id="metodo-pago">
    <div id="tipo-cambio">
        <table>
            <caption>Tipo de cambio del dolar a moneda Costaricense</caption>
            <thead>
                <tr><td>compra</td></tr>
                <tr><td>venta</td></tr>
            </thead>
            <tbody>
                <tr><td><%%></td></tr>
                <tr><td><%%></td></tr>
            </tbody>
        </table>
    </div>
    <div id="paypal-button"></div>    
</div>
<%@ include file="mapKey.jspf" %> 
</body>
</html>
