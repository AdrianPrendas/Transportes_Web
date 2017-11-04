<%-- 
    Document   : user
    Created on : 20-oct-2017, 16:32:27
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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>User</title>
    <%@ include file="imports.jspf" %> 
    <script src="scripts/loads/loadUser.js" type="text/javascript"></script>
</head>
<body>
    <header>
        <%@ include file="userNav.jspf" %> 
        <script>
            $(function(){
                $("#mapaBuscador").css("display","none");
                $("#ubicacion").css("display","none");
                $("#start").css("display","none");
                $("#end").css("display","none");
                $("#clean").css("display","none");
            });
        </script>
    </header>
    <center>
        <br><br><br>
        <h1><b>Perfil de Cliente</b></h1>
        <a href="#" id="editPerfil" class="btn btn-warning">modificar</a>      
        <hr>
        <%
            Usuario u = (Usuario)sesion.getAttribute("usuario");
            if(u!=null){
        %>
            <div class="text-uppercase">
                <h3>Nombre de Usuario: </h3>
                <h3 id="userId"><%out.print(u.getIdUsuario());%></h3><br>
                <h3>Nombre: <br> <% out.print(u.getNombre()+" "+u.getApellidos());  %></h3><br>
                <h3>Fecha de Nacimiento: <br> <% out.print(u.getFechaNacimiento());  %> </h3><br>
                <h3>Telefono: <br> <% out.print(u.getTelefono());  %> </h3><br>
                <h3>Correo: <br> <% out.print(u.getCorreo());  %> </h3><br>
                <h3>Direccion: <br> <% out.print(u.getDireccion());  %> </h3><br>
            </div>
        <%}%>
    </center>
    <%@ include file="dataUserModal.jspf" %> 
    <%@ include file="mapAddressModal.jspf" %> 
</body>
</html>
