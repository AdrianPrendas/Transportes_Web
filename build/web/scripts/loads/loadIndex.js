var userController, model;


$(document).ready(function () {
    $("#date").datepicker({dateFormat: "dd/mm/yy"});
    userController = new UserController();
    userController.loadUser();

    $("#login").on("submit", function (event) {
        event.preventDefault();
        userController.login(
                $("#userName").val(),
                $("#userPassword").val()
                );
    });


    $("#formRegistro").on("submit", doValidation);

});

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
            swal({type: 'success',html: 'Entered password: ' + password})    
        }else
            swal('Oops...','No coinside!','error')
        
    })
   
    
}



