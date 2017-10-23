var adminController;

view ={
    cargarTabla:function(data){
        var html ="";
        for(var conductor in data){
            html +=  "<tr>";
            html += "<td>"+data[conductor].usuario.idUsuario+"</td>";
            html += "<td>"+data[conductor].usuario.nombre+" "+data[conductor].usuario.apellido1+" "+data[conductor].usuario.apellido2+"</td>";
            html += "<td>"+data[conductor].usuario.fechaNacimiento+"</td>";
            html += "<td>"+data[conductor].usuario.telefono+"</td>";
            html += "<td>"+data[conductor].usuario.correo+"</td>";
            html += "<td>"+data[conductor].usuario.direccion+"</td>";
            html += "<td>"+data[conductor].vehiculo.placa+"</td>";
            html += "<td>"+data[conductor].vehiculo.ano+"</td>";
            html += "<td>"+data[conductor].vehiculo.modelo+"</td>";
            html += "<td>"+data[conductor].vehiculo.color+"</td>";
            html += "<td>"+data[conductor].vehiculo.estado+"</td>";
            html += "</tr>";
        }
        $("#tablaConductores").html(html);
    }
}


$(document).ready(function(){
   adminController = new AdminController(view);
   
   adminController.getConductores();
   
});

