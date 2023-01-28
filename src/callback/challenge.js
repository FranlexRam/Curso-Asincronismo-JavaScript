const XMLHttpRequest = require ('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1'; //Referencia del route de la API

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); //variable que hace referencia al xmlhttprequest que creamos al inicio

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}