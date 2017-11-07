
function UserController(view) {
    this.UserController(view);
}

UserController.prototype = {
    UserController: function (view) {
        this.view = view;
    },
    registerClient: function (user) {
        Proxy.saveUsuario(user);
    },
    editUsuario: function(user,modal){//U
        Proxy.editUsuario(user,modal);
    },
    login: function (userName, password,callBack) {
        Proxy.login(userName, password,function(user){
            swal({
                position: 'center',
                type: 'success',
                title: 'Encontrado!!!',
                showConfirmButton: false,
                timer: 2500
            }).then(function(){},
                function (dismiss) {
                    if (dismiss === 'timer') {
                        userController.storeUser(user);
                        userController.loadUser();    
                    }
            })
        }) 
    },
    storeUser: function (user) {
        //sotrage*******************************************
        var storage = {};
        storage.user = user;
        Storage.store("user", storage);

        console.log("se almaceno el usuario correctamente en el localStorage");
        console.log(user);

    },
    loadUser: function () {
        var storage = {};
        //sotrage*******************************************
        storage = Storage.retrieve("user");
        if (storage == null) {
            storage = {};
            Storage.store("user", storage);
            window.location.href = "index.jsp";
        }
        //sotrage*******************************************
        
        if (storage.user instanceof User) {
            if (storage.user.esAdministrador)
                window.location.href = "admin.jsp";
            else
                window.location.href = "user.jsp";
        } else if (storage.user instanceof Driver) {
            window.location.href = "driver.jsp";
        }

    },
    getUser: function(){
        var storage = {};
        //sotrage*******************************************
        storage = Storage.retrieve("user");
        if (storage == null) {
            storage = {};
            Storage.store("user", storage);
            window.location.href = "index.jsp";
        }else
            return storage.user;
        //sotrage*******************************************
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

        swal({
            title: 'La session ha caducado!!!',
            text: 'Adios!',
            timer: 5000,
            onOpen: function () {
                swal.showLoading()
            }
        }).then(function () {},
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    window.location.href = "Logout";
                }
            }
        )
    }
};
