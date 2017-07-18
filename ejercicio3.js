

function convertirCelsius()
{
	var f = parseInt(document.getElementById('ingreso').value);
	var c =(f-32)+5/9;
	document.getElementById("respuesta").innerHTML = c;
	
}