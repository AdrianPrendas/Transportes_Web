var JsonUtils = JsonUtils || {};

JsonUtils.revive = function (k, v) {            
    if (v instanceof Object && v._class == 'Usuario')
        return new User(v.idUsuario, v.nombre, v.apellido1, v.apellido2, v.fechaNacimiento, v.direccion, v.telefono, v.correo, v.password, v.esAdministrador);
	if (v instanceof Object && v._class == 'Conductor')
		return new Driver(this.revive(0,v.usuario), this.revive(0,v.vehiculo), v.tipoLicencia, v.licenciaVence, v.puntuacion, v.cedula)
	if (v instanceof Object && v._class == 'Vehiculo')
		return new Car(v.placa, v.ano, v.modelo, v.color, v.estado);
    return v;
};

JsonUtils.repalcer = function (k, v) {
    if (v instanceof User)//en la parte del cliente
        v._class = "Usuario";//en la parte del servidor
    if(v instanceof Driver)
    	v._class = "Conductor";
    if(v instanceof Car)
    	v._class = "Vehiculo";
    return v;
};