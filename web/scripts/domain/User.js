
function User(id, name, last, final, date, address, phone, email, password, tipo) {
    this.User(id, name, last, final, date, address, phone, email, password, tipo);
}
User.prototype = {
    User: function (id, name, last, final, date, address, phone, email, password, tipo){
        this.idUsuario=id;
        this.nombre = name;
        this.apellido1 = last;
        this.apellido2 = final;
        this.fechaNacimiento = date;
        this.direccion = address;
        this.telefono = phone;
        this.correo = email;
        this.password = password;
        this.esAdministrador = tipo;
    },
    toString: function () {
       return JSON.stringify(this);
    }
};

