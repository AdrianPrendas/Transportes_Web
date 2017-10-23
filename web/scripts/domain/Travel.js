
function Travel(direccionByDireccionDestino, direccionByDireccionOrigen, usuarioByConductor, usuarioByUsuario, fecha, duracion, monto, puntaje, comentario) {
    this.Travel(direccionByDireccionDestino, direccionByDireccionOrigen, usuarioByConductor, usuarioByUsuario, fecha, duracion, monto, puntaje, comentario);
}
Travel.prototype = {
    Travel: function (direccionByDireccionDestino, direccionByDireccionOrigen, usuarioByConductor, usuarioByUsuario, fecha, duracion, monto, puntaje, comentario){
        this.direccionByDireccionDestino = direccionByDireccionDestino;
        this.direccionByDireccionOrigen = direccionByDireccionOrigen;
        this.usuarioByConductor = usuarioByConductor;
        this.usuarioByUsuario = usuarioByUsuario;
        this.fecha = fecha;
        this.duracion = duracion;
        this.monto = monto;
        this.puntaje = puntaje;
        this.comentario = comentario;
    },
    toString: function () {
        return JSON.stringify(this);
    }
};
