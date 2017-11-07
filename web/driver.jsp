<%-- 
    Document   : driver
    Created on : 20-oct-2017, 16:32:27
    Author     : _Adrián_Prendas_
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" session="true" %>
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
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Driver</title>
        <%@ include file="imports.jspf" %>
        <script src="scripts/loads/loadDriver.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <%@ include file="driverNav.jspf" %> 
        </header>
        <br><br>    
    <center>
        <h1>Este sera el index del Conductor</h1>
    </center>

</body>
</html>
