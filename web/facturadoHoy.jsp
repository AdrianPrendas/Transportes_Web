<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>transportista y administrador</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="navbar-header">
					 
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						 <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
					</button> <a class="navbar-brand" href="index.jsp">TaxiWeb</a>
				</div>
				
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="">
							<a href="#">Mapa</a>
						</li>
						<li>
							<a href="auto.jsp">Auto</a>
						</li>
						<li class="dropdown">
							 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Reporte<strong class="caret"></strong></a>
							<ul class="dropdown-menu">
								<li>
									<a href="facturadoHoy.jsp">facturado hoy</a>
								</li>
								<li>
									<a href="#">facturado	por	mes</a>
								</li>
								<li>
									<a href="#">Ingresos	por	año</a>
								</li>
								<li class="divider">
								</li>
								<li>
									<a href="#">Listado	de	clientes	por	chofer</a>
								</li>
								<li class="divider">
								</li>
								<li>
									<a href="#">Los	5	clientes	con	más	viajes	</a>
								</li>
							</ul>
						</li>
					</ul>
					<form class="navbar-form navbar-left" role="search">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Ubicar en el mapa">
						</div> 
						<button type="submit" class="btn btn-default">
							Buscar
						</button>
					</form>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#">Registro</a>
						</li>
						<li class="dropdown">
							 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Usuario<strong class="caret"></strong></a>
							<ul class="dropdown-menu">
								<li>
									<a href="#">Login</a>
								</li>
								<li>
									<a href="#">perfil</a>
								</li>
								<li class="active">
									<a href="#">Activo</a>
								</li>
								<li class="divider">
								</li>
								<li>
									<a href="#">Chofer</a>
								</li>
								<li class="divider">
								</li>
								<li>
									<a href="#">salir</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				
			</nav>
		</div>
	</div>
	<br>
	<br>
	<div class="row">
		<div class="col-md-12">
		<img src="pictures/graficoHoy.png" style="width: 100%;">
		</div>
	</div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>