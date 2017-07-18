

function convertirCelsius()
{
	var f = parseInt(document.getElementById('ingreso').value);
	var c =(f-32)+5/9;
	//Math.trunc() quita decimales pero no redondea
	document.getElementById("respuesta").innerHTML = Math.trunc(c);
	
}