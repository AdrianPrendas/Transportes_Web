<%-- 
    Document   : AdministrarVehiculos
    Created on : 26/08/2017, 01:51:39 AM
    Author     : Zeneida
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administración de Vehiculos</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <script src="scripts/Funciones.js" type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    </head>
    <body>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h3>
                        Administración de Vehiculos Transportes UNA.
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <nav class="navbar navbar-default" role="navigation">

                        <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" />
                            </div> 
                            <button id="buscarVehiculo" class="btn btn-default">
                                Buscar
                            </button>
                        </form>



                    </nav>
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#agregarVehiculo">Agregar Vehiculo</button>
                    



                        <div class="modal fade" id="agregarVehiculo" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">

                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                            ×
                                        </button>
                                        <h4 class="modal-title" id="myModalLabel">
                                            Agregar Vehiculo
                                        </h4>
                                    </div>
                                    <div class="modal-body">
                                        <form>

                                            <!-- Formulario Agregar Vehiculo Modal-->
                                            <div>
                                                <div class="form-group col-md-8">
                                                    <label for="Nombre" class="control-label col-sm-6">
                                                        Modelo Vehiculo: 
                                                    </label>
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" id="ModeloVehiculo" placeholder="Ingrese el nombre">
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-8">
                                                    <label for="PrimerApellido"  class="control-label col-sm-6">
                                                        Marca Vehiculo:
                                                    </label>
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" id="marcaVehiculo" placeholder="Ingrese la marca">
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-8">
                                                    <label for="PrimerApellido"  class="control-label col-sm-6">
                                                        Color Vehiculo:
                                                    </label>
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" id="colorVehiculo" placeholder="Ingrese el Color">
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-8">
                                                    <label  class="control-label col-sm-6">
                                                        Cilidrada del Motor
                                                    </label>
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" id="cilindrada" placeholder="Ingrese la cilindrada">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-8" id="groupIdUsuarioIngresar">
                                                    <label for="idVehiculo"  class="control-label col-sm-6">Placa del Vehiculo</label>
                                                    <div class="col-sm-6">
                                                        <input type="number" class="form-control" id="idVehiculo" placeholder="Placa del Vehiculo" title="Ingrese sólo números">
                                                    </div>
                                                </div>

                                            </div>


                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-default" data-dismiss="modal">
                                            Cerrar
                                        </button> 
                                        <button type="button" id="guardarVehiculos" class="btn btn-primary">
                                            Guardar
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <button type="button" class="btn btn-default">
                            Default
                        </button>
                    </div>



                    <div class="col-md-6">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>
                                        Placa
                                    </th>
                                    <th>
                                        Modelo
                                    </th>
                                    <th>
                                        Marca
                                    </th>
                                    <th>
                                        Color
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="vehiculos">


                            </tbody>
                        </table>
                        <ul class="pagination">
                            <li>
                                <a href="#">Prev</a>
                            </li>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>

                            <li>
                                <a href="#">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    </body>
</html>
