//New York City: 5128581
//APIKey: 186e8bc65d8fceee5afb57a6e9d69842
//URL 

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&appid=186e8bc65d8fceee5afb57a6e9d69842';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const clima_json = request.response;
    console.log(clima_json);
    MostrarClima(clima_json);
}

function MostrarClima(climjson) {
        
    var header = document.querySelector('header');
    var h1 = document.createElement('h1');
    var temp = document.createElement('h2');
    var temp_max = document.createElement('h2');
    var temp_min = document.createElement('h2');
    var humidity = document.createElement('h2');

    h1.textContent = climjson.name;
    temp.textContent = 'Temperatura Actual: ' + climjson.main.temp + ' °C';
    temp_max.textContent = 'Temperatura Máxima: ' + climjson.main.temp_max + ' °C';
    temp_min.textContent = 'Temperatura Minima: ' + climjson.main.temp_min + ' °C';
    humidity.textContent = 'Humedad Relativa: ' + climjson.main.humidity + '%';

    header.appendChild(h1);
    header.appendChild(temp);
    header.appendChild(temp_max);
    header.appendChild(temp_min);
    header.appendChild(humidity);
    }