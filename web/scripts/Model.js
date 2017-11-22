
function Model() {
    this.Model();
}

Model.prototype = {
    Model: function () { 
    	this.point = undefined; //{LatLng:{lat,lng}, query}
    	this.user = undefined;
    	this.driver = undefined;
    	this.arrayOfUsuario = [];//paginas con html
        
        //map
        //this.user
        //this.driver
        this.origen = undefined;
        this.waitPoints = [undefined];
        this.destino = undefined;
        this.tiempo = undefined;
        this.distancia = undefined;//{distace:{value,test},duration:{value,text}}
        this.precio = undefined;
        
        this.viaje ={}/*{
                    origen: response.originAddresses[0],
                    destino: response.destinationAddresses[0],
                    distancia: response.rows[0].elements[0].distance.text,
                    duracion: response.rows[0].elements[0].duration.text,
                    precio: (distance * PRECIO).toFixed(2)
                }*/
    }
};


