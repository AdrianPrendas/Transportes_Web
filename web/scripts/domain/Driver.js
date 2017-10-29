

function Driver(usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
    this.Driver(usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula);
}
Driver.prototype = {
    Driver: function (usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
        this.usuarioIdUsuario = usuarioIdUsuario;
        this.usuario = usuario;
        this.vehiculo = vehiculo;
        this.tipoLicencia = tipoLicencia;
        this.licenciaVence = licenciaVence;
        this.puntuacion = puntuacion;
        this.cedula = cedula;
    },
    toString: function () {
       return JSON.stringify(this);
    }
};

