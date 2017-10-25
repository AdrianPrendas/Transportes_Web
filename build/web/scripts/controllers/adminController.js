
function AdminController(view) {
    this.AdminController(view);
}
AdminController.prototype = {
    AdminController: function (view) {
        this.view = view;
    },
   	getConductores: function(){//listo
       Proxy.getConductores(this.view.cargarTabla);
   	},
   	getConductorId: function(id){
   		Proxy.getConductorId(id,this.view.cargarDataDriverModal);
   	},
   	deleteConductorId: function(id){
		  Proxy.deleteConductorId(id);
   	},
   	getAutos: function(){//listo
   		Proxy.getAutos(this.view.cargarTabla);	
   	},
   	getUsuarios: function(){//listo
   		Proxy.getUsuarios(this.view.cargarTabla);	
   	}
};

