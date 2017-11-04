var userController, model;

view = {
    setDataAddressForm: function (data, model) {
        var address = data.results[1].formatted_address + "\n";
        //JSON.stringify(model.point.LatLng) + "\n"

        $("#address").val(address);
    }
}


$(document).ready(function () {
    $("#date").datepicker({dateFormat: "dd/mm/yy"});

    userController = new UserController(view);
    model = new Model();

    //userController.loadUser();
    //userController.logOut();

    $("#login").on("submit", function (event) {
        event.preventDefault();
        userController.login($("#userName").val(), $("#userPassword").val());
        swal({
            title: 'Buscando',
            text: 'Por favor espere!!!',
            onOpen: function () {
                swal.showLoading()
            }
        }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer')
                    }
                }
        );
    });

    $("#formRegistro").on("submit", doValidation);

    $("#address").mousedown(function () {
        $("#mapAddressModal").modal("show");
    })

    $("#mapAddressModal").on("show.bs.modal", function () {
        setTimeout(function () {
            google.maps.event.trigger(map, 'resize');//volver a cargar el mapa
            center = new google.maps.LatLng(10.001058, -84.111285);//cordenadas de Heredia
            map.setCenter(center);//centrar en Heredia
            marker.setMap(null);//quitar marcador
        }, 500);
    })

    $("#direccionLista").on("click", function () {
        if (model.point == undefined) {//si no hay una direccion
            swal('Oops...', "no has seleccionado una direccion valida", 'error')
        } else {
            $("#mapAddressModal").modal("hide");
            Proxy.placeName(model, view.setDataAddressForm);
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
    user.esAdministrador = false;

    user.direccion = new Address(model.point.LatLng.lat, model.point.LatLng.lng, $("#address").val(), 14);

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
        } else
            swal('Oops...', 'No coinside!', 'error')

    })


}



