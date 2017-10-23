var adminController;

view ={
    cargarTabla:function(data){
        var html ="";
        for(var conductor in data){
            html +=  "<tr>";
            html += "<td>"+data[conductor].usuario.idUsuario+"</td>";
            html += "<td>"+data[conductor].usuario.nombre+" "+data[conductor].usuario.apellidos+"</td>";
            html += "<td>"+data[conductor].usuario.fechaNacimiento+"</td>";
            html += "<td>"+data[conductor].usuario.telefono+"</td>";
            html += "<td>"+data[conductor].usuario.correo+"</td>";
            html += "<td>"+data[conductor].vehiculo.placa+"</td>";
            html += "<td>"+data[conductor].vehiculo.ano+"</td>";
            html += "<td>"+data[conductor].vehiculo.modelo+"</td>";
            html += "<td>"+data[conductor].vehiculo.marca+"</td>";
            html += "<td>"+data[conductor].vehiculo.color+"</td>";
            html += "<td>"+data[conductor].vehiculo.estado+"</td>";
            html += '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarConductorId('+data[conductor].usuario.idUsuario+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarConductorId('+data[conductor].usuario.idUsuario+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'
                    
            html += "</tr>";
        }
        $("#tablaConductores").html(html);
    }
}


$(document).ready(function(){
   adminController = new AdminController(view);
   
   adminController.getConductores();
   
});

