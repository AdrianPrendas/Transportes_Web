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
        <%@ include file="imports.jspf" %> 
        <script src="scripts/controllers/adminController.js" type="text/javascript"></script>
        <script src="scripts/loads/loadAdminDrivers.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <%@ include file="adminNav.jspf" %> 
        </header>
    <br><br>    
    <center>
    <button class="btn btn-danger" id="newDriver">Nuevo Conductor</button>
    <br><br>
        <table>
            <thead bgcolor="lime">
                <tr>
                    <td>#</td>
                    <td>User name</td>
                    <td>Cedula</td>
                    <td>Nombre</td>
                    <td>Correo</td>
                    <td>Telefono</td>
                    <td>Tipo Licencia</td>
                    <td>Licencia Vence</td>
                    <td>Vehiculo placa</td>
                    <td>Año</td>
                    <td>Model</td>
                    <td>Marca</td>
                    <td>Color</td>
                    <td>Estado</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody id="tablaConductores">
            </tbody>
        </table>    
        <div id="buttonsPagination"></div>
    </center>
    <br><br><br>

<%@ include file="dataDriverModal.jspf" %> 
<%@ include file="mapAddressModal.jspf" %> 
</body>
</html>
