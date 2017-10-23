<!DOCTYPE html>
<html lang="en">
    <head>                   
        <%@ include file="imports.jspf" %> 
        <script src="scripts/loads/loadIndex.js" type="text/javascript"></script>
    </head>
    <body>
        <header id="indexHead">
            <div class="container-fluid">
                <div class="col-lg-7">
                    <h1>Transportes Web</h1>
                </div>
                <div class="col-lg-5" id="formLogin">
                    <form id="login">
                        <div class="col-sm-6 col-lg-6 text-right"><label>Nombre de usuario o correo:</label></div>
                        <div class="col-sm-6 col-lg-6"><input type="text" class="form-control" id="userName" required> </div>
                        <br><br>
                        <div class="col-sm-6 col-lg-6 text-right"><label>Contrasena: </label></div>
                        <div class="col-sm-6 col-lg-6"><input type="password" class="form-control"  id="userPassword" required> </div>
                        <br><br>
                        <div class="col-sm-6 col-lg-12 text-right">
                            <button type="submit" class="btn btn-primary">login</button>    
                        </div>
                    </form>
                </div>
            </div>
        </header>
        <br>
        <div class="container-fluid">
            <div class="col-lg-9" >
                <center>
                    <div style="width:900px;">

                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="60000">
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
                                    <img src="pictures/map2.png" alt="Chicago" style="height: 550px;">
                                </div>

                                <div class="item" style="height: 100%;top:5%;">
                                    <div class="mensaje"> 
                                        <p>nombre de usuaior:</p>
                                        <p>esto es un parrafo de comentarios</p>
                                        <p>la persona deberia poder dejar su comentario aqui</p>
                                        <p>que tan bueno fue el transporte</p>
                                        <p>cantidad de estrellas al conductor</p>
                                        <p>precio</p>
                                    </div>
                                    <img src="pictures/map3.png" alt="New York" style="width: 100%;">
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

                    </div>
                </center>


            </div>

            <!--formulario de registro  //derecho-->
            <div class="col-lg-3" id="formClient">
                <h3>Registrarte</h3>
                <br>

                <form class="form-horizontal" role="form" id="formRegistro" method="POST">

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="text" class="form-control" placeholder="Alias" id="alias" required>
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="text" class="form-control"  placeholder="Nombre"  id="name" required>
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="text" class="form-control"  placeholder="Apellidos" id="lastName" required>
                        </div>
                    </div>


                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input class="form-control col-lg-12" type="text"  placeholder="Fecha de nacimiento"  id="date" required>
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <textarea class="form-control" rows="3"  id="address" maxlength="400" placeholder="Direccion residencial"   required></textarea> 
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="text" class="form-control" placeholder="celular" id="phone" pattern='^[1-9]+\d{7}' maxlength="8"   required>
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="email" class="form-control" placeholder="email" id="email" pattern='^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$' required>
                        </div>
                    </div>

                    <div class="form-group col-xs-12 col-lg-12">
                        <div class="col-lg-12">
                            <input type="password" class="form-control" id="password" placeholder="contrasena" name="password" required>
                        </div>
                    </div>

                    <div class="form-group  col-lg-12">
                        <div class="col-lg-12 text-right">
                            <button type="submit" class="btn btn-default btn-primary">
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </body>
</html>                    