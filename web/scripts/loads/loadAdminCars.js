var adminController;

view ={
    cargarTabla:function(data){
        var html ="";
        for(var Vehiculo in data){
            html +=  "<tr>";
            html += "<td>"+data[Vehiculo].placa+"</td>";
            html += "<td>"+data[Vehiculo].ano+"</td>";
            html += "<td>"+data[Vehiculo].modelo+"</td>";
            html += "<td>"+data[Vehiculo].color+"</td>";
            html += "<td>"+data[Vehiculo].estado+"</td>";
            html += '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick=" adminController.getConductoId('+"'"+data[Vehiculo].placa+"'"+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="adminController.deleteVehiculoId('+"'"+data[Vehiculo].placa+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'
                    
            html += "</tr>";
        }
        $("#tablaVehiculos").html(html);
    }
}


$(document).ready(function(){
   adminController = new AdminController(view);
   
   adminController.getAutos();

});

