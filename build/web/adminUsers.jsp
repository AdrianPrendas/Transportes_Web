<%-- 
    Document   : adminDrivers
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
    <title>Administracion</title>
    <%@ include file="imports.jspf" %> 
    <script src="scripts/controllers/adminController.js" type="text/javascript"></script>
    <script src="scripts/controllers/userController.js" type="text/javascript"></script>
    <script src="scripts/loads/loadAdminUsers.js" type="text/javascript"></script>
</head>
<body>
    <header>
        <%@ include file="adminNav.jspf" %> 
    </header>
    <div class="container-fluid text-center">
        <div class="col-lg-12"> 
            <h1>Administracion de Usuarios</h1>
            <hr>
            <button class="btn btn-danger" id="newUser">Nuevo Usuario</button>
            <hr>
        </div>
        <div class="col-sm-12 col-lg-12" style="overflow-x:auto;">
            <center>                
                <table>
                    <thead bgcolor="lime">
                        <tr>
                            <td>#</td>
                            <td>User name</td>
                            <td>Nombre</td>
                            <td>fecha de nacimiento</td>
                            <td>Telefono</td>
                            <td>Correo</td>
                            <td>Direccion</td>
                            <td>Es administrador</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody id="tablaUsuarios">
                    </tbody>
                </table>    
            </center>
            <div id="buttonsPagination"></div>
        </div>
    </div>

    <%@ include file="dataUserModal.jspf" %> 
    <%@ include file="mapAddressModal.jspf" %> 
</body>
</html>
