var adminController,
model;
var ELEMENTS_F_PAGE = 2;

view ={
    cargarTabla:function(data){

        var count = 0;
        var html ="";
        for(var Vehiculo in data){
            html +=  "<tr>";
            html += "<td>"+(count++)+"</td>";
            html += "<td>"+data[Vehiculo].placa+"</td>";
            html += "<td>"+data[Vehiculo].ano+"</td>";
            html += "<td>"+data[Vehiculo].marca+"</td>";
            html += "<td>"+data[Vehiculo].modelo+"</td>";
            html += "<td>"+data[Vehiculo].color+"</td>";
            html += "<td>"+data[Vehiculo].estado+"</td>";
            html += '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick=" adminController.getVehiculoId('+"'"+data[Vehiculo].placa+"'"+');">'+
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
            '</button>'+
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="adminController.deleteVehiculoId('+"'"+data[Vehiculo].placa+"'"+');">'+
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
            '</button></td>'

            html += "</tr>";
        }

        var arr = html.split("</tr>");//cada registro
            arr = arr.filter((r)=>r!="");//quitar registro vacio, bug??

        var narr = new Array();//registros de 10
        var tam = Math.ceil(arr.length/ELEMENTS_F_PAGE);//redondeo hacia arriba
        console.log(arr);
        console.log(tam);
        for(var i=0;i<tam;i++)
            narr.push(arr.slice(i*ELEMENTS_F_PAGE,(i+1)*ELEMENTS_F_PAGE));
        
        model.arrayOfVehiculos = narr;//[[ELEMENTS_F_PAGE],...,n]
        view.cargarPagina(0);
        view.buttonsPaginacion(model.arrayOfVehiculos.length);
        
    },
    cargarPagina: function(index){
        var arr = model.arrayOfVehiculos[index];
        var html ="";
        
        for(var u in arr)
            html += arr[u];
        $("#tablaVehiculos").html(html);        
    },
    buttonsPaginacion: function(n){
        $("#buttonsPagination").html("");
        if(n==1)return;//si solo hay una pagina, no muestra los botones
        var html='<ul class="pagination">';
        for(var i = 0; i <n; i++){
            html+='<li><a href="#" onclick="view.cargarPagina('+i+');">'+i+'</a></li>'
        }
        html +='</ul>';
        $("#buttonsPagination").html(html);
    },
    cargarDataCarModal: function(data){

        $("#placa").prop("readonly", true);
        $("#placa").val(data.placa);
        $("#anno").val(data.ano);
        $("#marca").val(data.marca);
        $("#modelo").val(data.modelo);
        $("#color").val(data.color);
        $("#vehiculoEstado").prop("checked",data.estado);

        $("#divEstado").css('display',"block");

        $("#dataCarModal").modal("show");
    }
}


$(document).ready(function(){
   adminController = new AdminController(view);
   model = new Model();

   adminController.getVehiculos();

   $("#newCar").on("click",function(){
    $("#dataCarModal").modal("show");
})

   $("#dataCarModal").on("hide.bs.modal", function () {
    $("#placa").prop("readonly", false);
    document.getElementById("formCarModal").reset();  
    $("#divEstado").css('display',"none");      
})

   $("#formCarModal").on("submit",function(event){
    event.preventDefault();
    var car = new Car(
        $("#placa").val(),
        $("#anno").val(),
        $("#modelo").val(),
        $("#marca").val(),
        $("#color").val(),
        $("#vehiculoEstado").prop("checked"));
    console.log(car)
    if($("#placa").prop("readonly")==false)
        adminController.saveVehiculo(car,$("#dataCarModal"));
    else
        adminController.editVehiculo(car,$("#dataCarModal"));  
})

   $("#filtrar").on("submit",function(event){
        event.preventDefault();
    
        var filtro = $("#filtro").val().toLowerCase();
        if(filtro=="")
            return adminController.getVehiculos();
        
        var arr = model.dataOfVehiculos.filter(function(v,i){
                return v.placa.toLowerCase().includes(filtro)
                || v.ano == filtro
                || v.marca.toLowerCase().includes(filtro)
                || v.modelo.toLowerCase().includes(filtro)
                || v.color.toLowerCase().includes(filtro)
                || v.estado.toString() == filtro;
             });
        view.cargarTabla(arr);        
    });

});

