var Proxy = Proxy || {};
//UserServices
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

Proxy.registrarCliente = function (user) {
    $.ajax({
        url: "/TaxiWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "registrarCliente",
            cliente: JSON.stringify(user, JsonUtils.repalcer)
        }
    }).done(function (result) { 
        var err = result.detailMessage[0];
        if(err=='E')//error
            swal('Oops...',result.detailMessage,'error')
        else
            swal({type: 'success',title: result.detailMessage,showConfirmButton: false,timer: 1500})
    }).fail(function (e, msg, excepn) {
        alert('**** AJAX ERROR ' + msg + ' ****');
    });
};
///////////////////////////////////////////////////////////////////////////////////
Proxy.getConductores = function (callBack) {
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
}
Proxy.getAutos = function(callBack){
    $.ajax({
        url: "/TaxiWeb/CarServices",
        type: "GET",
        dataType: "json",
        data: {
            action: "getAutos"
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
}
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
}
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
}

/*Proxy.registrarCliente = function (client, callBack) {
 var AJAX_req = new XMLHttpRequest();
 url = "/TaxiWeb/UserServices?action=registrarCliente";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 callBack(AJAX_req.responseText);
 }
 };
 var json = JSON.stringify(client, JsonUtils.repalcer);
 //console.log(json)
 AJAX_req.send("cliente=" + json);
 
};*/
/*
 Proxy.getCiudades = function (callBack) {
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=ciudadListAll";
 AJAX_req.open("GET", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
 callBack(object);
 }
 };
 AJAX_req.send();
 };
 
 Proxy.getPromo = function (callBack) {
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=vueloListPromo";
 AJAX_req.open("GET", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
 callBack(object);
 }
 };
 AJAX_req.send();
 };
 
 
 Proxy.vuelosSearch = function (origen,destino,callBack) {
 //console.log("origen:"+origen+"     destino:"+destino);
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=vueloListSearch";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
 callBack(object);
 }
 };
 AJAX_req.send("origen="+origen+"&destino="+destino);
 };
 
 Proxy.modificarCliente = function(client,clientOld,callBack){
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=modificarCliente";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 callBack(AJAX_req.responseText);
 }
 };
 var json = JSON.stringify(client,JsonUtils.repalcer);
 var jsonClientOld = JSON.stringify(clientOld,JsonUtils.repalcer);
 AJAX_req.send("cliente="+json+"&clienteViejo="+jsonClientOld);
 
 };
 
 Proxy.modificarUsuario = function(user,oldUser,callBack){
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=modificarUsuario";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 callBack(AJAX_req.responseText);
 }
 };
 var json = JSON.stringify(user,JsonUtils.repalcer);
 var jsonClientOld = JSON.stringify(oldUser,JsonUtils.repalcer);
 AJAX_req.send("usuario="+json+"&usuarioViejo="+jsonClientOld);
 
 };
 
 Proxy.registrarUsuario = function(user,callBack){
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=registrarUsuario";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 callBack(AJAX_req.responseText);
 }
 };
 var json = JSON.stringify(user,JsonUtils.repalcer);
 //console.log(json)
 AJAX_req.send("usuario="+json);
 
 };
 
 Proxy.login = function(user,callBack){
 var AJAX_req = new XMLHttpRequest();
 url = "/AirLine/AirlineService?action=login";
 AJAX_req.open("POST", url, true);
 AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 AJAX_req.onreadystatechange = function () {
 if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
 var respuesta = AJAX_req.responseText;
 //console.log(respuesta);
 if(respuesta != "fallo"){
 var object = JSON.parse(respuesta, JsonUtils.revive);
 callBack(object);     
 return;
 }
 callBack(respuesta);
 }
 };
 AJAX_req.send("usuario="+JSON.stringify(user,JsonUtils.repalcer));
 
 };
 
 */