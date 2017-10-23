
function Car(placa, ano, modelo, color, estado) {
    this.Car(placa, ano, modelo, color, estado);
}
Car.prototype = {
    Car: function (placa, ano, modelo, color, estado) {
        this.placa = placa;
        this.ano = ano;
        this.modelo = modelo;
        this.color = color;
        this.estado = estado;
    },
    toString: function () {
        return JSON.stringify(this);
    }
};

