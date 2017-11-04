<%-- 
    Document   : admin
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
            if(!tipoUsuario.endsWith("admin"))
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
        <title>Admin</title>
        <%@ include file="imports.jspf" %> 
        <script>
            $(document).ready(function(){
                $("#filtrar").css("display","none");
            });
        </script>
    </head>
    <body>
        <header>
            <%@ include file="adminNav.jspf" %> 
        </header>
        <br><br>    
    <center>
        <h1>Este sera el index del Admin</h1>
    </center>

</body>
</html>
