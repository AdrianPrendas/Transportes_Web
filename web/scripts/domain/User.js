
function User(idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador){
    this.User(idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador);
}
User.prototype = {
    User: function (idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador){
        var date = fechaNacimiento.split("/");
        this.idUsuario=idUsuario;
        this.nombre = nombre;
        this.direccion =direccion;
        this.apellidos = apellidos;
        this.fechaNacimiento = new Date(date[2], date[1] - 1, date[0]);
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
        this.esAdministrador = esAdministrador;
    },
    getFechaNacimiento: function(){
        var str = this.fechaNacimiento.getDate() + "/"
                + (this.fechaNacimiento.getMonth() + 1) + "/"
                + this.fechaNacimiento.getFullYear();
        return str;
    },
    toString: function () {
       return JSON.stringify(this);
    }
};

