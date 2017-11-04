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
    <%@ include file="imports.jspf" %> 
    <script src="scripts/controllers/adminController.js" type="text/javascript"></script>
    <script src="scripts/loads/loadAdminDrivers.js" type="text/javascript"></script>
</head>
<body>
    <header>
        <%@ include file="adminNav.jspf" %> 
    </header>
    <div class="container-fluid text-center">
        <div class="col-lg-12"> 
            <h1>Administracion de Conductores</h1>
            <hr>
            <button class="btn btn-danger" id="newDriver">Nuevo Conductor</button>
            <hr>
        </div>
        <div class="col-sm-12 col-lg-12" style="overflow-x:auto;">
            <center>
                <table>
                    <thead bgcolor="lime">
                        <tr>
                            <th>#</th>
                            <th>User name</th>
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Tipo Licencia</th>
                            <th>Licencia Vence</th>
                            <th>Vehiculo placa</th>
                            <th>Año</th>
                            <th>Model</th>
                            <th>Marca</th>
                            <th>Color</th>
                            <th>Estado</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody id="tablaConductores"></tbody>
                </table>    
            </center>
            <div id="buttonsPagination"></div>
        </div>
    </div>
    
    <%@ include file="dataDriverModal.jspf" %> 
    <%@ include file="mapAddressModal.jspf" %> 
</body>
</html>
