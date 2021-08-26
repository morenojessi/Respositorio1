function Multiplicar()
{
    var num1 =parseFloat(document.getElementById('num1').value);
    var num2 =parseFloat(document.getElementById('num2').value);
    var num3 =parseFloat(document.getElementById('num3').value);
    
    var resul = num1*num2*num3;

    document.getElementById('res').value = resul
}

function temperatura(){
    var temp =parseFloat(document.getElementById('temperatura').value);
    if (temp >=-10){
        if (temp<=15){
            document.write('Clima: Frio') 
        }
    if (temp >=16){
        if (temp <=25){
            document.write('Clima: Templado')
    if (temp >=26){
        if (temp <=40){
            document.write('Clima: Calor')
        }
    }
}
}
}
}

function factorial () {
    var valor = parseFloat(document.getElementById('valor').value);
	var total = 1; 
	for (i=1; i<=valor; i++) 
    {
		total = total * i; 
	}
    document.getElementById('total').value = total;
}

function fecha(){
    var fecha = new Date();
    document.write('Fechas Actual: '+ fecha.getDay +', de ' + fecha.getMonth + ' del ' + fecha.getFullYear)
}