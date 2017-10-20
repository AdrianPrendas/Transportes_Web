var Proxy = Proxy || {};



Proxy.login = function (userName, password, callBack) {
    $.ajax({
        url: "/TransporteWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "login",
            userName: userName,
            password: password
        }
    }).done(function (result) {
        var object = JsonUtils.revive(0, result);
        if (object instanceof User)
            callBack(object);
        else
            alert(result.detailMessage)
    }).fail(function (e, msg, excepn) {
        alert('**** AJAX ERROR ' + msg + ' ****');
    });
};

Proxy.registrarCliente = function (user, callBack) {
    $.ajax({
        url: "/TransporteWeb/UserServices",
        type: "POST",
        dataType: "json",
        data: {
            action: "registrarCliente",
            cliente: JSON.stringify(user, JsonUtils.repalcer)
        }
    }).done(function (result) {        
        alert(result.detailMessage);
        callBack();
    }).fail(function (e, msg, excepn) {
        alert('**** AJAX ERROR ' + msg + ' ****');
    });
}


/*Proxy.registrarCliente = function (client, callBack) {
 var AJAX_req = new XMLHttpRequest();
 url = "/TransporteWeb/UserServices?action=registrarCliente";
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