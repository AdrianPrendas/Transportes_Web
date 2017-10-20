<%-- 
    Document   : Usuario
    Created on : 26/08/2017, 12:48:50 AM
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
        <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6">
                        <img src="IMAGENES/descarga.png" alt="Avatar" class="img-circle col-md-12"/>
                         
                    </div>
                </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <br><br>
                <h3 class="text-center">
                    Ultimos 3 viajes
                </h3>
                <div class="carousel slide" id="carousel-280611">
                    <ol class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#carousel-280611">
                        </li>
                        <li data-slide-to="1" data-target="#carousel-280611">
                        </li>
                        <li data-slide-to="2" data-target="#carousel-280611">
                        </li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img alt="Carousel Bootstrap First" src="pictures/map4.png">
                            <div class="carousel-caption" >
                                <h4>
                                    First Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Carousel Bootstrap Second" src="pictures/map5.png">
                            <div class="carousel-caption">
                                <h4>
                                    Second Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Carousel Bootstrap Third" src="pictures/map3.png">
                            <div class="carousel-caption">
                                <h4>
                                    Third Thumbnail label
                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                    </div> <a class="left carousel-control" href="#carousel-280611" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-280611" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-center">TUS VIAJES </h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Conductor</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>fecha</th>
                            <th>costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="active">
                            <td>1</td>
                            <td>Diego</td>
                            <td>Barva</td>
                            <td>Laginilla</td>
                            <td>22/08/17</td>
                            <td>?2500</td>
                        </tr>
                        <tr class="success">
                            <td>1</td>
                            <td>Emanuel</td>
                            <td>Tracopa</td>
                            <td>Aeropuerto</td>
                            <td>21/08/17</td>
                            <td>?6500</td>
                        </tr>
                        <tr class="warning">
                            <td>1</td>
                            <td>Josias</td>
                            <td>Jardines</td>
                            <td>Pirro</td>
                            <td>17/08/17</td>
                            <td>?1000</td>
                        </tr>
                        <tr class="danger">
                            <td>1</td>
                            <td>Yordi</td>
                            <td>Pirro</td>
                            <td>Tracopa</td>
                            <td>16/08/17</td>
                            <td>?5000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br><br>

    </body>
</html>
