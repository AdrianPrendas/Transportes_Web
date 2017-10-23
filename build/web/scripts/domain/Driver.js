

function Driver(usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
    this.Driver(usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula);
}
Driver.prototype = {
    Driver: function (usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
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

