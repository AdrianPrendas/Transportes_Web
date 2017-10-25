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
        <style>
            table{
                width: 90%;
                text-align: center;
            }
            table, th, td {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <header>
            <%@ include file="adminNav.jspf" %> 
        </header>
    <br><br>    
    <center>
        <table>
            <thead bgcolor="lime">
                <tr>
                    <td>Placa</td>
                    <td>año</td>
                    <td>Modelo</td>
                    <td>Color</td>
                    <td>Estado</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody id="tablaVehiculos">

            </tbody>
        </table>    
    </center>

</body>
</html>
