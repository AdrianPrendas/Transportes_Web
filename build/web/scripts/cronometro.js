var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var control;//timer
var seg=0, min=0, hor = 0;
function inicio () {
	control = setInterval(cronometro,10);
}
function parar () {
	clearInterval(control);
}
function reinicio () {
    document.getElementById("timer").innerHTML = "";
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
        seg=0, min=0, hor = 0;
}
function cronometro () {
    
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
                seg= ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		min= ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		hor = horas;
	}
        document.getElementById("timer").innerHTML = hor+min+seg;
}