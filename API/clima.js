//URL 
//New York City 5128581
// API KEY 186e8bc65d8fceee5afb57a6e9d69842

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&appid=186e8bc65d8fceee5afb57a6e9d69842';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onlad = function() {
    const clima_json = request.response;
    console.log(clima_json);
    MostrarInformacion(clima_json);
}

function MostrarInformacion(climjson) {
        
    var header = document.querySelector('header');
    var h1 = document.querySelector('h1');
    var temp = document.querySelector('h2');
    var tem_max = document.querySelector('h2');
    var tem_min = document.querySelector('h2');
    var hum = document.querySelector('h2');

    h1.textContent = climjson.name;
    temp.textContent = 'Temperatura Actual: ' + climjson.main.temp;
    tem_max.textContent = 'Temperatura Máxima: ' + climjson.main.temp_max;
    tem_min.textContent = 'Temperatura Minima: ' + climjson.main.temp_min;
    hum.textContent = 'Humedad Relativa: ' + climjson.main.humidity;

    header.appendChild(h1);
    header.appendChild(temp);
    header.appendChild(temp_max);
    header.appendChild(temp_min);
    header.appendChild(humidity);
    }