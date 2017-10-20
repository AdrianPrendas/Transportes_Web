
function UserController(view) {
    this.UserController(view);
}

UserController.prototype = {
    UserController: function (view) {
        this.view = view;
    },
    login: function (userName, password) {
        Proxy.login(userName, password, this.storeUser);
        this.view.ocultarFormLogin();
    },
    storeUser: function (user) {
        //sotrage*******************************************
        var storage = {};
        storage.user = user;
        Storage.store("user", storage);

        console.log("se almaceno el usuario correctamente en el localStorage");
        console.log(user);

        this.view.refrescarNav(storage);
    },
    loadUser: function () {
        var storage = {};
        //sotrage*******************************************
        storage = Storage.retrieve("user");
        
        //sotrage*******************************************
        if (storage)
            view.refrescarNav(storage);
    },
    logOut: function () {
        var storage;
        //sotrage*******************************************
        storage = Storage.retrieve("user");
        if (storage == null) {
            storage = {};
            Storage.store("user", storage);
        }
        //sotrage*******************************************
        delete storage.user;
        Storage.store("user", storage);

        this.view.refrescarNav(storage);
        alert("la session ha caducado!!!")
        window.location.href = "index.jsp";
    },
    registerClient: function (user) {
        Proxy.registrarCliente(user, this.view.ocultarFormRegistro);
    }
};
