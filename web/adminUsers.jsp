<%-- 
    Document   : adminDrivers
    Created on : 20-oct-2017, 16:32:27
    Author     : _Adrián_Prendas_
    --%>

    <%@page contentType="text/html" pageEncoding="UTF-8"%>
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
    <br><br>    
    <center>
        <button class="btn btn-danger" id="newUser">Nuevo Usuario</button>
        <br><br>
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
        <div id="buttonsPagination"></div>
    </center>
    <br><br><br>

<%@ include file="dataUserModal.jspf" %> 
<%@ include file="mapAddressModal.jspf" %> 
</body>
</html>
