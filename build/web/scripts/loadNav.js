var userController, model;

view = {
    refrescarNav: function (storage) {
        if (storage.user) {
            $("#linkProfile").css("display", "block");
            $("#linkRoutes").css("display", "block");
            $("#divider").css("display", "block");
            $("#linkOut").css("display", "block");
            $("#login").css("display", "none");
            $("#registrarse").css("display", "none");
            $("#nav").removeClass("navbar-default");
            $("#nav").addClass("navbar-inverse");
        } else {
            $("#linkProfile").css("display", "none");
            $("#linkRoutes").css("display", "none");
            $("#divider").css("display", "none");
            $("#linkOut").css("display", "none");
            $("#login").css("display", "block");
            $("#registrarse").css("display", "block");
            $("#nav").removeClass("navbar-inverse");
            $("#nav").addClass("navbar-default");
        }
        /*$("#linkUser").css("display","block");
         $("#linkDriver").css("display","block");
         $("#linkAdmin").css("display","block");*/
    },
    ocultarFormRegistro: function () {//aqui xq //el proxi lo oculta cuando regresan los datos del server
        $("#register").modal('hide');
    },
    ocultarFormLogin: function () {//aqui xq //el proxi lo oculta cuando regresan los datos del server
        $("#loginModal").modal('hide');
    }
}

$(document).ready(function () {
    $("#date").datepicker({dateFormat: "dd/mm/yy"});
    userController = new UserController(view);
    userController.loadUser();

    $("#out").on("click", function () {
        userController.logOut();
    });
    $("#login").on("click", function () {
        $("#loginModal").modal('show');
    });
    $("#registrarse").on("click", function () {
        $("#register").modal('show');
    });

    $("#log").on("click", logUser);

    $("#formRegistro").on("submit", doValidation);


    //evento de ocultar el modal, limpia sus campos
    $("#register").on("hide.bs.modal", function () {
        document.getElementById("formRegistro").reset();
    });
    $("#loginModal").on("hide.bs.modal", function () {
        $("#userName").val("");
        $("#userPassword").val("");
    });
});

function logUser(event) {
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    if (userName == "" || userPassword == "")
        alert("ingrese los campos para el login");
    else {
        userController.login(userName, userPassword);
    }
}


function doValidation(event) {
    event.preventDefault();
    var user = new User();
    user.idUsuario = $("#alias").val();
    user.nombre = $("#name").val();
    user.apellido1 = $("#last").val();
    user.apellido2 = $("#final").val();
    user.fechaNacimiento = $("#date").val();
    user.direccion = $("#address").val();
    user.telefono = $("#phone").val();
    user.correo = $("#email").val();
    user.password = $("#password").val();
    user.esAdministrador = false;
    if ($("#password").val() != $("#password2").val()) {
        alert("check the password");
    } else {
        alert("se enviara el formulario" + "\n" + user);
        userController.registerClient(user);
    }
}



