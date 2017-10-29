var JsonUtils = JsonUtils || {};

JsonUtils.revive = function (k, v) {            
    if (v instanceof Object && v._class == 'Usuario')
        return new User(v.idUsuario, v.nombre, v.direccion, v.apellidos, v.fechaNacimiento, v.telefono, v.correo, v.password, v.esAdministrador);
    if (v instanceof Object && v._class == 'Conductor')
	return new Driver(v.usuarioIdUsuario, this.revive(0,v.usuario), this.revive(0,v.vehiculo), v.tipoLicencia, v.licenciaVence, v.puntuacion, v.cedula);        
    if (v instanceof Object && v._class == 'Vehiculo')
        return new Car(v.placa, v.ano, v.modelo,v.marca, v.color, v.estado);
    if (v instanceof Object && v._class == 'Viaje')
        return new Travel(v.direccionByDireccionDestino, v.direccionByDireccionOrigen, v.usuarioByConductor, v.usuarioByUsuario, v.fecha, v.duracion, v.monto, v.puntaje, v.comentario);
    if (v instanceof Object && v._class == 'Direccion')
        return new Address(v.lat, v.lng, v.nombre, v.zoom);
    
    return v;
};

JsonUtils.repalcer = function (k, v) {
    if (v instanceof User)//en la parte del cliente
        v._class = "Usuario";//en la parte del servidor
    if(v instanceof Driver)
    	v._class = "Conductor";
    if(v instanceof Car)
    	v._class = "Vehiculo";
    if(v instanceof Travel)
        v._class = "Viaje";
    if(v instanceof Address)
        v._class = "Direccion";

    return v;
};