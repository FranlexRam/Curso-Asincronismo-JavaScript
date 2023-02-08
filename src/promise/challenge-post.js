//Uso de fetch
import fetch from 'node-fetch';
//API guardada en una constante
const API = 'https://api.escuelajs.co/api/v1';

//Funcion que se encarga de usar fetch y transformarlo al llamado del metodo POST
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data) //Informacion que se quiere transmitir a la API.
    });
    return response;
}

const data = {
    title: "220",
    price: 220,
    description: "item number 220",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]
  }

  //Se una postData como una promesa para poder usar el then, donde se transforma la respuesta en un objeto json
  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));