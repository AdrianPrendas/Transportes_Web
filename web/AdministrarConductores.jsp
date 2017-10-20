<%-- 
    Document   : AdministrarConductores
    Created on : 26/08/2017, 01:50:45 AM
    Author     : Zeneida
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administración Conductores</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h3>
                        Administración de Conductores Transportes UNA.
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
                            <button type="buscarVehiculo" class="btn btn-default">
                                Buscar
                            </button>
                        </form>
                    </nav>
                </div>


                <a id="modal-723622" href="#modal-container-723622" role="button" class="btn" data-toggle="modal">Launch demo modal</a>

                <div class="modal fade" id="modal-container-723622" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    ×
                                </button>
                                <h4 class="modal-title" id="myModalLabel">
                                    Agregar Conductor
                                </h4>
                            </div>
                            <div class="modal-body">
                                <form>

                                    <!-- Formulario Agregar Vehiculo Modal-->



                                </form>
                            </div>
                            <div class="modal-footer">

                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                    Close
                                </button> 
                                <button type="button" class="btn btn-primary">
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
                                #
                            </th>
                            <th>
                                Product
                            </th>
                            <th>
                                Payment Taken
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                TB - Monthly
                            </td>
                            <td>
                                01/04/2012
                            </td>
                            <td>
                                Default
                            </td>
                        </tr>
                        <tr class="active">
                            <td>
                                1
                            </td>
                            <td>
                                TB - Monthly
                            </td>
                            <td>
                                01/04/2012
                            </td>
                            <td>
                                Approved
                            </td>
                        </tr>
                        <tr class="success">
                            <td>
                                2
                            </td>
                            <td>
                                TB - Monthly
                            </td>
                            <td>
                                02/04/2012
                            </td>
                            <td>
                                Declined
                            </td>
                        </tr>
                        <tr class="warning">
                            <td>
                                3
                            </td>
                            <td>
                                TB - Monthly
                            </td>
                            <td>
                                03/04/2012
                            </td>
                            <td>
                                Pending
                            </td>
                        </tr>
                        <tr class="danger">
                            <td>
                                4
                            </td>
                            <td>
                                TB - Monthly
                            </td>
                            <td>
                                04/04/2012
                            </td>
                            <td>
                                Call in to confirm
                            </td>
                        </tr>
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
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
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
