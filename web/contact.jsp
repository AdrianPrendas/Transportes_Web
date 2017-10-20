<!DOCTYPE html>
<html lang="en">
    <head> 
        <%@ include file="imports.jspf" %> 
    </head>
    <body>
        <%@ include file="nav.jspf" %> 
    <center>
        <div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6">
                        
                        <img src="IMAGENES/WhatsApp Image 2017-08-26 at 2.54.13 AM.jpeg" alt="Logo" class="img-circle col-md-12"/>
                    </div>
                    <div class="col-md-6">

                        <address>
                            <strong>Transportes UNA.</strong><br> 795 Folsom Ave, Suite 600<br> San Francisco, CA 94107<br> <abbr title="Phone">P:</abbr> (506) 456-7890
                        </address>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                
                <form role="form" method="get" action="ingresar.html">
                    <div class="form-group">

                        <h3 class="verde">Formulario de contacto</h3>

                        <table class="table-responsive table-striped">
                            <tr>
                                <td>Nombre:</td>
                                <td>
                                    <input type="text" class="form-control" id="txtNombre" placeholder="obligatorio"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input type="text" class="form-control" id="txtEmail" placeholder="Email"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Telefono</td>
                                <td>
                                    <input type="text" class="form-control" id="txtTelefono" placeholder="Telefono"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Titulo</td>
                                <td>
                                    <input type="text" class="form-control" id="txtTitulo" placeholder="Titulo"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Mensaje:</td>
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
        </div>

    </center>
</body>
</html>