<%-- 
    Document   : index
    Created on : Sep 15, 2017, 1:20:00 PM
    Author     : _Adrian_Prendas_
    18 de noviembre examen final
    22 de noviembre presentacion final 5pm, hay que apuntarse en un excel
--%>
    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <%@page import="java.util.*" session="true" %>
    <%
        HttpSession sesion = request.getSession(true);
        if (sesion != null) {
            if (sesion.getAttribute("usuario") != null) {
                String tipoUsuario = (String) sesion.getAttribute("tipo");
                response.sendRedirect(tipoUsuario + ".jsp");
            }
        }
    %>   
<!DOCTYPE html>
<html lang="en">
<head>                   
    <%@ include file="imports.jspf" %> 
    <script src="scripts/loads/loadIndex.js" type="text/javascript"></script>
</head>
<body>
    <header id="indexHead">
        <div class="container-fluid">
            <div class="col-sx-12 col-sm-5 col-md-7 col-lg-9">
                <h1>Transportes Web</h1>
            </div>
            <div class="col-sx-12 col-sm-7 col-md-5 col-lg-3" id="formLogin">
                <form id="login">
                    <div class="col-xs-12 col-lg-12">
                        <input type="text" placeholder="Nombre de usuario o correo" class="form-control" id="userName" required> 
                    </div>
                    <br><br>    
                    <div class="col-xs-12 col-lg-12">
                        <input type="password" placeholder="Contraseña " class="form-control"  id="userPassword" required> 
                    </div>
                    <br><br>
                    <div class="col-xs-12 col-lg-12 text-right">
                        <button type="submit" class="btn btn-primary">login</button>    
                    </div>
                </form>
            </div>
        </div>
    </header>
    <br>
    <div class="container-fluid">   
        <div class="row text-center">   
            <div class="col-sm-12 col-lg-7 col-lg-offset-1">

                <div class="col-sx-12 col-lg-12 text-center">

                    <div id="myCarousel" class="carousel slide div" data-ride="carousel" data-interval="60000">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="item active">
                                <div class="mensaje"> 
                                    <p>nombre de usuaior:</p>
                                    <p>esto es un parrafo de comentarios</p>
                                    <p>la persona deberia poder dejar su comentario aqui</p>
                                    <p>que tan bueno fue el transporte</p>
                                    <p>cantidad de estrellas al conductor</p>
                                    <p>precio</p>
                                </div>
                                <img src="pictures/map1.png">
                            </div>

                            <div class="item" >
                                <div class="mensaje"> 
                                    <p>nombre de usuaior:</p>
                                    <p>esto es un parrafo de comentarios</p>
                                    <p>la persona deberia poder dejar su comentario aqui</p>
                                    <p>que tan bueno fue el transporte</p>
                                    <p>cantidad de estrellas al conductor</p>
                                    <p>precio</p>
                                </div>
                                <img src="pictures/map2.png">
                            </div>

                            <div class="item">
                                <div class="mensaje"> 
                                    <p>nombre de usuaior:</p>
                                    <p>esto es un parrafo de comentarios</p>
                                    <p>la persona deberia poder dejar su comentario aqui</p>
                                    <p>que tan bueno fue el transporte</p>
                                    <p>cantidad de estrellas al conductor</p>
                                    <p>precio</p>
                                </div>
                                <img src="pictures/map3.png">
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <br>    
                </div>

            </div>
            <!--formulario de registro  //derecho-->
            <div class="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-sm-offset-4 col-lg-offset-0">
                <div class="col-sm-4 col-md-12 col-lg-12 div">
                    <h3>Registrarte</h3>            
                     <%@ include file="userForm.jspf" %> 
                     <br>   
                </div>
                <br>
            </div>
        </div>
    </div>


 <%@ include file="mapAddressModal.jspf" %> 
</body>
</html>                    