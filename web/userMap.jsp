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
        <script src="scripts/loads/loadUserMap.js" type="text/javascript"></script>
    </head>
    <body style="height: 100%;">
        <header>
            <%@ include file="userNav.jspf" %> 
        </header>
        <div id="map"></div>

        <%@ include file="mapKey.jspf" %> 
    </body>
</html>
