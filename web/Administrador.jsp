<%-- 
    Document   : Administrador
    Created on : 26/08/2017, 12:48:26 AM
    Author     : Zeneida
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Administración</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				Administración de Transportes 
			</h3>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4">
			<h3 class="text-center">
				Administrar Vehiculos
                        </h3><img alt="Bootstrap Image Preview" src="http://sitios.claro.com.co/img/upload/descarga-2_28.jpg" class="img-rounded" width="300" height="300" > 
			<button type="button" class="btn btn-lg btn-block">
		
                                <a href="AdministrarVehiculos.jsp">Vehiculos</a>
			</button>
		</div>
		<div class="col-md-4">
			<h3 class="text-center">
				Administración Conductores
                        </h3><img alt="Bootstrap Image Preview" src="http://holatelcel.com/wp-content/uploads/2016/11/Uber1.jpg" width="300" height="300" class="img-rounded" > 
			<button type="button" class="btn btn-lg btn-block">
                            <a href="AdministrarConductores">Conductores</a>
			</button>
		</div>
		<div class="col-md-4">
			<h3 class="text-center">
                           Graficos Estadisticos
			</h3><img alt="Bootstrap Image Preview" src="https://userscontent2.emaze.com/images/db829dc1-128d-47d8-b107-243a28ade5fd/2e192d56d2c62648c5b8d3599240e87b.jpg" class="img-rounded" width="300" height="300"> 
			<button type="button" class="btn btn-lg btn-block">
                            <a href="AdministrarReportes.jsp">Reportes</a>
			</button>
		</div>
	</div>
</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>