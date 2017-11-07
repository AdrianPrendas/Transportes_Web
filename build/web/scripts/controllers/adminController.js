
function areYouSure(f,id, msg){
  swal({
    title: 'Estas seguro?',
    text: msg,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar !!!'
  }).then(function () {
    f(id);
  })
}

function loading(){
  swal({
    title: 'Cargando...',
    text: 'por favor espere!',
    onOpen: function () {
      swal.showLoading()
    }
  })
}

function AdminController(view) {
  this.AdminController(view);
}
AdminController.prototype = {
  AdminController: function (view) {
    this.view = view;
  },
  //Usuarios
  saveUsuario: function(user){//C
    Proxy.saveUsuario(user);
  },
  getUsuarios: function(){//R
    loading();
    Proxy.getUsuarios(function(data){
      model.dataOfUsuarios = data;
      this.view.cargarTabla(data);
        swal.close();//close loading
      });
  },
  editUsuario: function(user,modal){//U
    Proxy.editUsuario(user,function(successMsg){
      modal.modal("hide");
      swal({
        type: 'success',
        title: successMsg,
        showConfirmButton: false,
        timer: 5000
      }).then(function(){},//reject
        function(){//resolve
          location.reload();
        }
      )
    });
  },
  deleteUsuarioId: function(id){//D
    areYouSure(Proxy.deleteUsuarioId,id, "no vas a poder revertir los cambios despues de esto, tabien se eliminaran los viajes del usuario!!!");
  },
  getUsuarioId: function(id){//Read one
    Proxy.getUsuarioId(id,this.view.cargarDataUserModal); 
  },
  //Conductores
  saveConductor: function(driver,modal){
    Proxy.saveConductor(driver,modal); 
  },
  getConductores: function(){//R
    loading();
    Proxy.getConductores(function(data){
      model.dataOfConductores = data;
      this.view.cargarTabla(data);
      swal.close();//close loading
    });
  },
  editConductor: function(driver,modal){//U
    Proxy.editConductor(driver,function(successMsg){
      modal.modal("hide");
      swal({
        type: 'success',
        title: successMsg,
        showConfirmButton: false,
        timer: 5000
      }).then(function(){},//reject
        function(){//resolve
          location.reload();
        }
      )
    });
  },
  deleteConductorId: function(id){//D
    areYouSure(Proxy.deleteConductorId,id, "no vas a poder revertir los cambios despues de esto!");
  },
  getConductorId: function(id){//Read one
   Proxy.getConductorId(id,this.view.cargarDataDriverModal);
 },
  //Vehiculos
  saveVehiculo: function(car, modal){//C
    Proxy.saveVehiculo(car,modal);
  },
  getVehiculos: function(){//R
    loading();
    Proxy.getVehiculos(function(data){
      model.dataOfVehiculos = data;
      this.view.cargarTabla(data);
      swal.close();//close loading
    });
  },
  editVehiculo: function(car, modal){//U
    Proxy.editVehiculo(car,function(successMsg){
      modal.modal("hide");
      swal({
        type: 'success',
        title: successMsg,
        showConfirmButton: false,
        timer: 5000
      }).then(function(){},//reject
        function(){//resolve
          location.reload();
        }
      )
    });
  },
  deleteVehiculoId: function(id){//D
    areYouSure(Proxy.deleteVehiculoId,id, "no vas a poder revertir los cambios despues de esto!");      
  },
  getVehiculoId: function(id){//Read one
    Proxy.getVehiculoId(id,this.view.cargarDataCarModal);
  },
};

