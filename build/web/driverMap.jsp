<%-- 
    Document   : driverMap
    Created on : 04-nov-2017, 10:19:01
    Author     : _Adrián_Prendas_
--%>

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
        if(!tipoUsuario.endsWith("driver"))
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
        <script type="text/javascript" src="scripts/driverMap.js"></script>
        <script src="scripts/loads/loadDriverMap.js" type="text/javascript"></script>
    </head>
    <body style="height: 100%;">
        <header>
            <%@ include file="driverNav.jspf" %> 
        </header>
        <div id="map"></div>

        <%@ include file="mapKey.jspf" %> 
    </body>
</html>
