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
    <script src="scripts/loads/loadAdminCars.js" type="text/javascript"></script>
</head>
<body>
    <header>
        <%@ include file="adminNav.jspf" %> 
    </header>
    <div class="container-fluid text-center">
        <div class="col-lg-12">    
            <h1>Administración de Vehículos</h1>
            <hr>
            <button class="btn btn-danger" id="newCar">Nuevo Vehículo</button>
            <hr>
        </div>
        <div class="col-sm-12 col-lg-12" style="overflow-x:auto;">
            <center>
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
                            <td>Acción</td>
                        </tr>
                    </thead>
                    <tbody id="tablaVehiculos"></tbody>
                </table>   
            </center> 
            <div id="buttonsPagination"></div>
        </div>
    </div>

    <%@ include file="dataCarModal.jspf" %> 
</body>
</html>
