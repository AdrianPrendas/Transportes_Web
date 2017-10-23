
function User(idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador){
    this.User(idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador);
}
User.prototype = {
    User: function (idUsuario, nombre, direccion, apellidos, fechaNacimiento, telefono, correo, password, esAdministrador){
        this.idUsuario=idUsuario;
        this.nombre = nombre;
        this.direccion =direccion;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
        this.esAdministrador = esAdministrador;
    },
    toString: function () {
       return JSON.stringify(this);
    }
};

