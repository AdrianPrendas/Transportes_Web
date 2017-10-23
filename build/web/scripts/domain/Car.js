
function Car(placa, ano, modelo, marca,color, estado){
    this.Car(placa, ano, modelo, marca,color, estado);
}
Car.prototype = {
    Car: function (placa, ano, modelo, marca,color, estado) {
        this.placa = placa;
        this.ano = ano;
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.estado = estado;
    },
    toString: function () {
        return JSON.stringify(this);
    }
};

