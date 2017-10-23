
function AdminController(view) {
    this.AdminController(view);
}
AdminController.prototype = {
    AdminController: function (view) {
        this.view = view;
    },
   getConductores: function(){
       Proxy.getConductores(this.view.cargarTabla);
   }
};

