var adminController;

view ={
    cargarTabla:function(data){
        var html ="";
        for(var usuarios in data){
            console.log()
            html +=  "<tr>";
            html += "<td>"+data[usuarios].idUsuario+"</td>";
            html += "<td>"+data[usuarios].nombre+" "+data[usuarios].apellidos+"</td>";
            html += "<td>"+data[usuarios].fechaNacimiento+"</td>";
            html += "<td>"+data[usuarios].telefono+"</td>";
            html += "<td>"+data[usuarios].correo+"</td>";
            html += "<td>"+data[usuarios].direccion.nombre+"</td>";
            html += "<td>"+data[usuarios].esAdministrador+"</td>";
            html += '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick=" adminController.getUsuarioId('+"'"+data[usuarios].idUsuario+"'"+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="adminController.deleteusuariosId('+"'"+data[usuarios].idUsuario+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'
                    
            html += "</tr>";
        }
        $("#tablaUsuarios").html(html);
    }
}


$(document).ready(function(){
   adminController = new AdminController(view);
   
   adminController.getUsuarios();
   

});

