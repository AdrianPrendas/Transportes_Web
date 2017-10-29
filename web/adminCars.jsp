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
        <script src="scripts/loads/loadAdminCars.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <%@ include file="adminNav.jspf" %> 
        </header>
    <br><br>    
    <center>
        <button class="btn btn-danger" id="newCar">Nuevo Vehiculo</button>
        <br><br>
        <table>
            <thead bgcolor="lime">
                <tr>
                    <td>#</td>
                    <td>Placa</td>
                    <td>año</td>
                    <td>Marca</td>
                    <td>Modelo</td>
                    <td>Color</td>
                    <td>Estado</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody id="tablaVehiculos"></tbody>
        </table>    
        <div id="buttonsPagination"></div>
    </center>
    <br><br><br>

<%@ include file="dataCarModal.jspf" %> 
</body>
</html>
