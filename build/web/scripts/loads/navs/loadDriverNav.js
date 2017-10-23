var userController, model;


$(document).ready(function () {
    userController = new UserController();
    
    $("#logout").on("click",function(){
        userController.logOut();
    });
});