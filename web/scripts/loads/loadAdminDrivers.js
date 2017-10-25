var adminController;
var model;

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
            html += '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick=" adminController.getConductorId('+"'"+data[conductor].usuario.idUsuario+"'"+');">'+
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
            '</button>'+
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="adminController.deleteConductorId('+"'"+data[conductor].usuario.idUsuario+"'"+');">'+
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
            '</button></td>'

            html += "</tr>";
        }
        $("#tablaConductores").html(html);
    },
    cargarDataDriverModal: function(data){
        $("#alias").prop("readonly", true);
        $("#alias").val(data.usuario.idUsuario);
        $("#name").val(data.usuario.nombre);
        $("#last").val(data.usuario.apellidos);
        $("#date").val(data.usuario.fechaNacimiento);
        $("#address").val("undefined");
        $("#phone").val(data.usuario.telefono);
        $("#email").val(data.usuario.correo);

        $("#placaId").prop("readonly", true);
        $("#placaId").val(data.vehiculo.placa);
        $("#vehiculoAnno").val(data.vehiculo.ano);
        $("#vehiculoModelo").val(data.vehiculo.modelo);
        $("#vehiculoMarca").val(data.vehiculo.marca);
        $("#vehiculoColor").val(data.vehiculo.color);
        $("#vehiculoEstado").val(data.vehiculo.estado);


        $("#dataDriverModal").modal("show");
    },
    setDataDriverModalAddress: function(data,model){
        var address = JSON.stringify(model.point.LatLng)+"\n"
                    + data.results[1].formatted_address+"\n";

         $("#address").val(address);
         model.point=undefined;
         $("#dataDriverModal").modal("show");
    }
}


$(document).ready(function(){
 adminController = new AdminController(view);
 model = new Model();

 adminController.getConductores();

 $("#newDriver").on("click",function(){
    $("#dataDriverModal").modal("show");
})

 $("#dataDriverModal").on("hide.bs.modal", function () {
    $("#alias").prop("readonly", false);
    $("#placaId").prop("readonly", false);
    document.getElementById("formDriverModal").reset();        
})

 $("#address").mousedown(function(){
    $("#dataDriverModal").modal("hide");
    $("#mapAddressModal").modal("show");
})


 $("#mapAddressModal").on("show.bs.modal", function () {
    setTimeout(function(){
        google.maps.event.trigger(map, 'resize');//volver a cargar el mapa
        center = new google.maps.LatLng(10.001058,-84.111285);//cordenadas de Heredia
        map.setCenter(center);//centrar en Heredia
        marker.setMap(null);//quitar marcador
    },500);
})

 $("#direccionLista").on("click",function(){
    if(model.point==undefined){//si no hay una direccion
        swal('Oops...',"no has seleccionado una direccion valida",'error')
    }else{
        $("#mapAddressModal").modal("hide");
        Proxy.placeName(model,view.setDataDriverModalAddress);
    }
 })

});

