//Ejercicio 1
function Multiplicar()
{
    var num1 =parseFloat(document.getElementById('num1').value);
    var num2 =parseFloat(document.getElementById('num2').value);
    var num3 =parseFloat(document.getElementById('num3').value);
    
    var resul = num1*num2*num3;

    document.getElementById('res').value = resul
}

//Ejercicio 2
function temperatura(){
    var temp =parseFloat(document.getElementById('temperatura').value);
    if (temp >=-10 && temp<=15){
        var res="Frio";
    }
        else 
            if (temp >=16 && temp <=25){
                res = "Templado";
            }
            else
                if (temp >=26 && temp <=40){
                    res = "Calor";
                }
                else
                res= "valor inválido";
    document.getElementById('clima'). value =res
}
        

//Ejercicio 3
function factorial () {
    var valor = parseFloat(document.getElementById('valor').value);
	var total = 1; 
	for (i=1; i<=valor; i++) 
    {
		total = total * i; 
	}
    document.getElementById('total').value = total
}

//Ejercicio 4
function fecha(){
    var fecha = new Date();
    var dias= ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    var dia= dias[fecha.getDay()]
    var meses= ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    var mes = meses[fecha.getMonth()]
    var year = fecha.getFullYear();
    var fech = fecha.getDate();

    document.getElementById('fecha1').value = dia
    document.getElementById('fecha2').value = fech + ' de ' + mes + ' del ' + year
}
