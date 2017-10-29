var Proxy = Proxy || {};

Proxy.login = function (userName, password, callBack, callBack2) {
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "login",
            userName: userName,
            password: password
        }
    }).done(function (result) {
        var object = JsonUtils.revive(0, result);
        if (object instanceof User || object instanceof Driver){
            callBack(object);
            callBack2();
        }else
        swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.saveUsuario = function(user){
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "saveUsuario",
            cliente: JSON.stringify(user, JsonUtils.repalcer)
        }
    }).done(function (result) { 
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        alert('**** AJAX ERROR ' + msg + ' ****');
    });
};
Proxy.saveVehiculo = function(car, modal){
    $.ajax({
        url: "/TaxiWeb/CarServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "saveVehiculo",
            car:JSON.stringify(car, JsonUtils.repalcer)
        }
    }).done(function (result) {
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            modal.modal("hide");
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.saveConductor = function(driver, modal){
    console.log(driver);
    $.ajax({
        url: "/TaxiWeb/DriverServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "saveConductor",
            driver:JSON.stringify(driver, JsonUtils.repalcer)
        }
    }).done(function (result) {
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            modal.modal("hide");
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getUsuarios = function(callBack){
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getUsuarios"
        }
    }).done(function (result) {
        var arr = JsonUtils.revive(0, result);
        if (arr instanceof Array)
            callBack(arr);
        else
            swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getVehiculos = function(callBack){
    $.ajax({
        url: "/TaxiWeb/CarServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getVehiculos"
        }
    }).done(function (result) {
        var arr = JsonUtils.revive(0, result);
        if (arr instanceof Array)
            callBack(arr);
        else
            swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getConductores = function (callBack){
    $.ajax({
        url: "/TaxiWeb/DriverServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getConductores"
        }
    }).done(function (result) {
        var arr = JsonUtils.revive(0, result);
        if (arr instanceof Array && arr.length!=0)
            callBack(arr);//callback = this.view.ocultarFormLogin();
        else{
            if (arr instanceof Array && arr.length==0)
                swal('Oops...',"no hay Conductores para mostrar",'error')
            else    
                swal('Oops...',result.detailMessage,'error')
        }

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.editUsuario = function (car,modal){
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "editUsuario",
            user:JSON.stringify(car, JsonUtils.repalcer)
        }
    }).done(function (result) {
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            modal.modal("hide");
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.editVehiculo = function (car,modal){
    $.ajax({
        url: "/TaxiWeb/CarServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "editVehiculo",
            car:JSON.stringify(car, JsonUtils.repalcer)
        }
    }).done(function (result) {
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            modal.modal("hide");
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.editConductor = function(driver,modal){
  $.ajax({
        url: "/TaxiWeb/DriverServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "editConductor",
            driver:JSON.stringify(driver, JsonUtils.repalcer)
        }
    }).done(function (result) {
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            modal.modal("hide");
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
},
Proxy.deleteUsuarioId = function(id){
   $.ajax({
    url: "/TaxiWeb/UserServices",
    type: "GET",
    dataType: "json",
    data: {
        action: "deleteUsuarioId",
        id:id
    }
}).done(function (result) {
    var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.deleteVehiculoId = function(id){
   $.ajax({
    url: "/TaxiWeb/CarServices",
    type: "GET",
    dataType: "json",
    data: {
        action: "deleteVehiculoId",
        id:id
    }
}).done(function (result) {
    var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.deleteConductorId = function(id){
   $.ajax({
    url: "/TaxiWeb/DriverServices",
    type: "GET",
    dataType: "json",
    data: {
        action: "deleteConductorId",
        id:id
    }
}).done(function (result) {
    var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else{
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 5000})
            setTimeout(function(){location.reload();},6000);//refrescar la pagina
        }
    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getUsuarioId = function (id,callBack) {
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getUsuarioId",
            id:id
        }
    }).done(function (result) {
        var obj = JsonUtils.revive(0, result);
        if (obj instanceof User)
            callBack(obj);
        else
            swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getVehiculoId = function (id,callBack) {
    $.ajax({
        url: "/TaxiWeb/CarServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getVehiculoId",
            id:id
        }
    }).done(function (result) {
        var obj = JsonUtils.revive(0, result);
        if (obj instanceof Car)
            callBack(obj);
        else
            swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.getConductorId = function (id,callBack) {
    $.ajax({
        url: "/TaxiWeb/DriverServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getConductorId",
            id:id
        }
    }).done(function (result) {
        var obj = JsonUtils.revive(0, result);
        if (obj instanceof Driver)
            callBack(obj);
        else
            swal('Oops...',result.detailMessage,'error')

    }).fail(function (e, msg, excepn) {
        swal('**** AJAX ERROR ',msg,'error')
    });
};
Proxy.placeName = function(model,callback){
   $.ajax({
    url: model.point.query,
    type: "GET",
    dataType: "json",
}).done(function (result) {
    console.log(result);
    if(result.status=="OK")
        callback(result,model);
    else
        swal('Oops...',"algo salio mal en la peticion: "+model.point.query,'error')
}).fail(function (e, msg, excepn) {
    swal('**** AJAX ERROR ',msg,'error')
});
};

