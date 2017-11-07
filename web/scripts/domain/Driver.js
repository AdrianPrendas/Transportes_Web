

function Driver(usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
    this.Driver(usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula);
}
Driver.prototype = {
    Driver: function (usuarioIdUsuario, usuario, vehiculo, tipoLicencia, licenciaVence, puntuacion, cedula){
        var date = licenciaVence.split("/");
        this.usuarioIdUsuario = usuarioIdUsuario;
        this.usuario = usuario;
        this.vehiculo = vehiculo;
        this.tipoLicencia = tipoLicencia;
        this.licenciaVence = new Date(date[2], date[1] - 1, date[0]);
        this.puntuacion = puntuacion;
        this.cedula = cedula;
    },
    getLicenciaVence:function(){
        var str = this.licenciaVence.getDate()+"/"
                + (this.licenciaVence.getMonth() + 1) +"/"
                + this.licenciaVence.getFullYear();
        return str;            
    },
    toString: function () {
       return JSON.stringify(this);
    }
};

