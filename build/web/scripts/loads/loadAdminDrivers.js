var adminController,
    model;
var ELEMENTS_F_PAGE = 10;

view ={
    cargarTabla:function(data){
        var count = 0;
        var html ="";
        for(var conductor in data){
            html +=  "<tr>";
            html += "<td>"+(count++)+"</td>";
            html += "<td>"+data[conductor].usuario.idUsuario+"</td>";
            html += "<td>"+data[conductor].cedula+"</td>";
            html += "<td>"+data[conductor].usuario.nombre+" "+data[conductor].usuario.apellidos+"</td>";
            html += "<td>"+data[conductor].usuario.correo+"</td>";
            html += "<td>"+data[conductor].usuario.telefono+"</td>";
            html += "<td>"+data[conductor].tipoLicencia+"</td>";
            html += "<td>"+data[conductor].licenciaVence+"</td>";
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

        var arr = html.split("</tr>");//cada registro
            arr = arr.filter((r)=>r!="");//quitar registro vacio, bug??

        var narr = new Array();//registros de 10
        var tam = Math.ceil(arr.length/ELEMENTS_F_PAGE);//redondeo hacia arriba
        for(var i=0;i<tam;i++)
            narr.push(arr.slice(i*ELEMENTS_F_PAGE,(i+1)*ELEMENTS_F_PAGE));

        model.arrayOfConductores=narr;//[[ELEMENTS_F_PAGE],...,n]
        view.cargarPagina(0);
        view.buttonsPaginacion(model.arrayOfConductores.length);
        
    },
    cargarPagina: function(index){
        var arr = model.arrayOfConductores[index];
        var html ="";
        
        for(var u in arr)
            html += arr[u];
        $("#tablaConductores").html(html);        
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
    cargarDataDriverModal: function(driver){
        $("#alias").css("display", "block");
        $("#alias").val(driver.usuario.idUsuario);
        $("#cedula").val(driver.cedula);
        $("#name_last_final").val(driver.usuario.nombre+" "+driver.usuario.apellidos);
        $("#tipoLicencia").val(driver.tipoLicencia);
        $("#fechaLicVence").val(driver.licenciaVence);

        $("#vehiculoAnno").val(driver.vehiculo.ano);
        $("#vehiculoModelo").val(driver.vehiculo.modelo);
        $("#vehiculoMarca").val(driver.vehiculo.marca);        
        
        $("#vehiculoColor").val(driver.vehiculo.color);
        $("#usuarioSelect").css("display", "none");

        $("#vehiculoEstado").prop("checked",driver.vehiculo.estado);

        $("#dataDriverModal").modal("show");

        $("#placa").css("display","none");
        $("#placa").val("undefinded")
        $("#vehiculoSelect").css("display","block");
        $("#vehiculoSelect").html("");
        Proxy.getVehiculos(function(arr){
            for(var vehiculo in arr){
                var html = '<option value="'+arr[vehiculo].placa+'">'+arr[vehiculo].placa+'</option>';
                $("#vehiculoSelect").append(html);
            }
            model.ArrayOfVehiculos = arr;
            $("select[name='vehiculos']").find('option[value='+driver.vehiculo.placa+']').attr("selected",true);
            $("#vehiculoSelect").change(function(){
                var vehiculo = model.ArrayOfVehiculos.find(
                    function(v,i){
                        return v.placa == $("#vehiculoSelect").val();
                    });
                $("#vehiculoAnno").val(vehiculo.ano);
                $("#vehiculoModelo").val(vehiculo.modelo);
                $("#vehiculoMarca").val(vehiculo.marca);
                $("#vehiculoColor").val(vehiculo.color);
                $("#vehiculoEstado").prop("checked",vehiculo.estado);
            });
        });
        model.driver = driver;
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
    $("#fechaLicVence").datepicker({dateFormat: "dd/mm/yy"});

    adminController = new AdminController(view);
    model = new Model();

    adminController.getConductores();

    $("#newDriver").on("click",function(){
        $("#alias").val("undefined")
        $("#alias").css("display","none");        
        $("#placa").css("display","none");
        $("#placa").val("undefinded");

        Proxy.getUsuarios(function(usuarios){
            $("#usuarioSelect").html("");
            for(var u in usuarios){
                var html = '<option value="'+usuarios[u].idUsuario+'">'+usuarios[u].idUsuario+'</option>';
                $("#usuarioSelect").append(html);
            }
            model.arrayOfUsuario = usuarios;
            $("#usuarioSelect").css("display","block");
            $("#usuarioSelect").change();
        });
        
        
        Proxy.getVehiculos(function(vehiculos){
            $("#vehiculoSelect").html("");
            for(var vehiculo in vehiculos){
                var html = '<option value="'+vehiculos[vehiculo].placa+'">'+vehiculos[vehiculo].placa+'</option>';
                $("#vehiculoSelect").append(html);
            }
            model.ArrayOfVehiculos = vehiculos;
            $("#vehiculoSelect").change();
        });
        $("#vehiculoSelect").change(function(){
                var vehiculo = model.ArrayOfVehiculos.find(
                    function(v,i){
                        return v.placa == $("#vehiculoSelect").val();
                    });
                console.log(vehiculo);
                $("#vehiculoAnno").val(vehiculo.ano);
                $("#vehiculoModelo").val(vehiculo.modelo);
                $("#vehiculoMarca").val(vehiculo.marca);
                $("#vehiculoColor").val(vehiculo.color);
                $("#vehiculoEstado").prop("checked",vehiculo.estado);
            });
           $("#usuarioSelect").change(function(){
                var usuario = model.arrayOfUsuario.find(
                    function(u,i){
                        return u.idUsuario == $("#usuarioSelect").val();
                    });
                $("#name_last_final").val(usuario.nombre+" "+usuario.apellidos);
            });

        $("#dataDriverModal").modal("show");
    })

    $("#dataDriverModal").on("hide.bs.modal", function () {
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

    $("#formDriverModal").on("submit",doValidation);
});

function doValidation(event){
    event.preventDefault();
     
    if($("#usuarioSelect").css("display")=="none"){
        var nombre = $("#name_last_final").val().split(" ");
        model.driver.cedula = $("#cedula").val();
        model.driver.usuario.nombre = nombre[0];
        model.driver.usuario.apellidos = nombre[1]+" "+nombre[2];
        model.driver.tipoLicencia = $("#tipoLicencia").val();
        model.driver.licenciaVence = $("#fechaLicVence").val();
        model.driver.vehiculo.ano = $("#vehiculoAnno").val();
        model.driver.vehiculo.modelo = $("#vehiculoModelo").val();
        model.driver.vehiculo.marca = $("#vehiculoMarca").val();
        model.driver.vehiculo.color = $("#vehiculoColor").val();
        model.driver.vehiculo.estado = $("#vehiculoEstado").prop("checked");
        model.driver.vehiculo.placa =  
        adminController.editConductor(model.driver,$("#dataDriverModal"));
    }
    else{
        
        //Driver(usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula)
        Proxy.getUsuarioId($("#usuarioSelect").val(),function(user){
            Proxy.getVehiculoId($("#vehiculoSelect").val(),function(car){
                var driver = new Driver(
                                        user.idUsuario,
                                        user,
                                        car,
                                        $("#tipoLicencia").val(),
                                        $("#fechaLicVence").val(),
                                        0,
                                        $("#cedula").val()
                                    );
                adminController.saveConductor(driver,$("#dataDriverModal"));
            });
        })
    }
}