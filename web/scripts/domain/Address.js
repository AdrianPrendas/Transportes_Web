
function Address(lat, lng, nombre, zoom) {
    this.Address(lat, lng, nombre, zoom);
}
Address.prototype = {
    Address: function (lat, lng, nombre, zoom) {
        this.lat = lat;
        this.lng = lng;
        this.nombre = nombre;
        this.zoom = zoom;
    },
    getLatLng: function(){
        return {lat:this.lat, lng:this.lng};
    },
    toString: function () {
        return JSON.stringify(this);
    }
};


    