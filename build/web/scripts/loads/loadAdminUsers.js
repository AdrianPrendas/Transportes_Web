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
            html += "<td>"+data[usuarios].getFechaNacimiento()+"</td>";
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
        $("#buttonsPagination").html("");
        if(n==1)return;//si solo hay una pagina, no muestra los botones
        var html='<ul class="pagination">';
        for(var i = 0; i <n; i++){
            html+='<li><a href="#" onclick="view.cargarPagina('+i+');">'+i+'</a></li>'
        }
        html +='</ul>';
        $("#buttonsPagination").html(html);
    },
    cargarDataUserModal: function(user){
        $("#alias").prop("readonly", true);
        $("#alias").val(user.idUsuario);
        $("#name").val(user.nombre);
        $("#lastName").val(user.apellidos);
        $("#date").val(user.getFechaNacimiento());
        $("#address").val(user.direccion.nombre);
        $("#phone").val(user.telefono);
        $("#email").val(user.correo);
        $("#isAdmin").prop("checked",user.esAdministrador);

        $("#divEstado").css('display',"block");
        $("#password").css('display', "none");
        $("#password").val("undefined");

        $("#dataUserModal").modal("show");
        model.user = user;
    },
    setDataAddressForm: function(data,model){
        model.point.name = data.results[1].formatted_address;
        var address = model.point.name;

        $("#address").val(address);
    }
}


$(document).ready(function(){
    $("#date").datepicker({dateFormat: "dd/mm/yy"});
    $("#btnRegister").html("Registrar");

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

    $("#filtrar").on("submit",function(event){
        event.preventDefault();
    
        var filtro = $("#filtro").val().toLowerCase();
        if(filtro=="")
            return adminController.getUsuarios();
        
        var arr = model.dataOfUsuarios.filter(function(u,i){
                return u.idUsuario.toLowerCase().includes(filtro)
                || u.nombre.toLowerCase().includes(filtro)
                || u.apellidos.toLowerCase().includes(filtro)
                || u.direccion.nombre.toLowerCase().includes(filtro)
                || u.fechaNacimiento == filtro
                || u.telefono == filtro
                || u.correo.toLowerCase().includes(filtro)
                || u.esAdministrador.toString() == filtro;
             });
        view.cargarTabla(arr);        
    });

});

function doValidation(event) {
    event.preventDefault();
    if($("#address").val()==""){
        return swal('Oops...','falta la direccion!','error')
    }

    
    var user = new User(
        $("#alias").val(),
        $("#name").val(),
        ((model.point)?new Address(model.point.LatLng.lat,model.point.LatLng.lat,$("#address").val(),14):model.user.direccion),
        $("#lastName").val(),
        $("#date").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#password").val(),
        $("#isAdmin").prop("checked")
        );

    //console.log(user);
    if($("#alias").prop("readonly")){
        adminController.editUsuario(user,$("#dataUserModal"));
        model.point = undefined;
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
                model.point = undefined;
            }else
            swal('Oops...','No coinside!','error')

        })
    }
    
}




