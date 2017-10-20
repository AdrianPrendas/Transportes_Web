<%-- 
    Document   : PerfilUsuario
    Created on : 26/08/2017, 12:52:25 AM
    Author     : Zeneida
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head> 
        <%@ include file="imports.jspf" %> 
    </head>
    <body>
        <%@ include file="nav.jspf" %> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" class="img-thumbnail">
                        </div>
                        <div class="col-md-8">
                            <div class="tabbable" id="tabs-101529">
                                <ul class="nav nav-tabs">
                                    <li>
                                        <a href="#panel-236508" data-toggle="tab">Section 1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#panel-495521" data-toggle="tab">Section 2</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane" id="panel-236508">
                                        <form role="form" method="get" action="ingresar.html">
                                            <div class="form-group">

                                                <h3 class="verde">INFORMACIÓN PERSONAL</h3>

                                                <table class="table-responsive table-striped">
                                                    <tr>
                                                        <td>Nombre:</td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtNombre" placeholder="Nombre"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Primer Apellido:</td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtAp1" placeholder="Primer Apellido"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Segundo Apellido: </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtAp2" placeholder="Segundo Apellido"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtEmail" placeholder="Email"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Telefono:</td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtTelefono" placeholder="Telefono"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Usuario: </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtUsuario" placeholder="Nom_Usuario"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Contraseña: </td>
                                                        <td>
                                                            <input type="password" class="form-control" id="contrase" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fecha de Nacimiento: </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="txtFechaNac" placeholder="dd/mm/yyyy"/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dirección: </td>
                                                        <td>
                                                            <textarea class="form-control" > </textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                    <center>
                                                        <input class="btn" type="submit" value="enviar"/>
                                                        <input class="btn" type="reset" value="limpiar"/>
                                                    </center>
                                                    </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane active" id="panel-495521">
                                        <p>
                                            Howdy, I'm in Section 2.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </body>
                            </html>
