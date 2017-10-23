var JsonUtils = JsonUtils || {};

JsonUtils.revive = function (k, v) {            
    if (v instanceof Object && v._class == 'Usuario')
        return new User(v.idUsuario, v.nombre, v.apellido1, v.apellido2, v.fechaNacimiento, v.direccion, v.telefono, v.correo, v.password, v.esAdministrador);
    return v;
};

JsonUtils.repalcer = function (k, v) {
    if (v instanceof User)//en la parte del cliente
        v._class = "Usuario";//en la parte del servidor
    
    return v;
};