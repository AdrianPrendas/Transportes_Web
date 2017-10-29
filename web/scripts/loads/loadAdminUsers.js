var adminController,
userController,
model;
var ELEMENTS_F_PAGE = 10;

view ={
    cargarTabla:function(data){
        var count = 0;
        var html ="";
        for(var usuarios in data){
            html +=  "<tr>";
            html += "<td>"+(count++)+"</td>";
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
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="adminController.deleteUsuarioId('+"'"+data[usuarios].idUsuario+"'"+');">'+
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
            '</button></td>'

            html += "</tr>";
        }
        var arr = html.split("</tr>");//cada registro
            arr = arr.filter((r)=>r!="");//quitar registro vacio, bug??

        var narr = new Array();//registros de ELEMENTS_F_PAGE
        var tam = Math.ceil(arr.length/ELEMENTS_F_PAGE);//redondeo hacia arriba
        for(var i=0;i<tam;i++)
            narr.push(arr.slice(i*ELEMENTS_F_PAGE,(i+1)*ELEMENTS_F_PAGE));

        model.arrOfUsuarios=narr;//[[ELEMENTS_F_PAGE],...,n]
        view.cargarPagina(0);
        view.buttonsPaginacion(model.arrOfUsuarios.length);
    },
    cargarPagina: function(index){
        var arr = model.arrOfUsuarios[index];
        var html ="";
        
        for(var u in arr)
            html += arr[u];
        $("#tablaUsuarios").html(html);        
    },
    buttonsPaginacion: function(n){
        if(n==1)return;//si solo hay una pagina, no la muestre
        var html='<ul class="pagination">';
        for(var i = 0; i <n; i++){
            html+='<li><a href="#" onclick="view.cargarPagina('+i+');">'+i+'</a></li>'
        }
        html +='</ul>';
        $("#buttonsPagination").html(html);
    },
    cargarDataUserModal: function(data){
        $("#alias").prop("readonly", true);
        $("#alias").val(data.idUsuario);
        $("#name").val(data.nombre);
        $("#lastName").val(data.apellidos);
        $("#date").val(data.fechaNacimiento);
        $("#address").val('{"lat":'+data.direccion.lat+', "lng": '+data.direccion.lat+"}\n"+ data.direccion.nombre);
        $("#phone").val(data.telefono);
        $("#email").val(data.correo);
        $("#isAdmin").prop("checked",data.esAdministrador);

        $("#divEstado").css('display',"block");
        $("#password").css('display', "none");
        $("#password").val("invalidPassword");

        $("#dataUserModal").modal("show");
    },
    setDataAddressForm: function(data,model){
        var address = JSON.stringify(model.point.LatLng)+"\n"
        + data.results[1].formatted_address+"\n";

        $("#address").val(address);
        model.point=undefined;
    }
}


$(document).ready(function(){
    $("#date").datepicker({dateFormat: "dd/mm/yy"});

    adminController = new AdminController(view);
    userController = new UserController(view);

    model = new Model();

    adminController.getUsuarios();

    $("#newUser").on("click",function(){
        $("#dataUserModal").modal("show");
    })

    $("#dataUserModal").on("hide.bs.modal", function () {
        $("#alias").prop("readonly", false);
        document.getElementById("formRegistro").reset();  
        $("#divEstado").css('display',"none");      
        $("#password").css('display', "block");      
    })


    $("#formRegistro").on("submit", doValidation);

    $("#address").mousedown(function(){
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
            Proxy.placeName(model,view.setDataAddressForm);
        }
    })

});

function doValidation(event) {
    event.preventDefault();
    var user = new User();
    user.idUsuario = $("#alias").val();
    user.nombre = $("#name").val();
    user.apellidos = $("#lastName").val();
    user.fechaNacimiento = $("#date").val();
    user.telefono = $("#phone").val();
    user.correo = $("#email").val();
    user.password = $("#password").val();
    user.esAdministrador = $("#isAdmin").prop("checked");

    var arr = $("#address").val().split("\n");
    console.log(arr);//[{lat,lng},name]
    var latLng = JSON.parse(arr[0]);    
    user.direccion = new Address(latLng.lat,latLng.lng,arr[1],14);

    console.log(user);
    if($("#alias").prop("readonly")){
        adminController.editUsuario(user,$("#dataUserModal"));
    }else{
        swal({
            title: 'Enter your password',
            input: 'password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                'maxlength': 10,
                'autocapitalize': 'off',
                'autocorrect': 'off'
            }
        }).then(function (password) {
            if (password == user.password) {
                userController.registerClient(user);
            }else
            swal('Oops...','No coinside!','error')

        })
    }
    
}




