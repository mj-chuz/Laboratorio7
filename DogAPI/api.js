const BASE_URL = 'https://dog.ceo/api/breeds/image/random'

async function main() {
    // Cada vez que se presiona una tecla en la barra de búsqueda, se hace labúsqueda
    document.getElementById("search").addEventListener("keyup", search);
    // Datos temporales (debe cambiarlos)
    const dogURL = `${BASE_URL}`
    let dogData = null;
    
    const response = await fetch(dogURL);
    dogData = await response.json();
    const {message, status} = dogData;
    console.log(message);
    
    data = [
     { id: 1, Nombre: "Cronos", body: message },
     { id: 2, Nombre: "Tom", body: message},
     { id: 3, Nombre: "Koda", body: message },
    ];
    // Mostramos la data en la pantalla
    displayData(data);
}
    /**
    * Itera un arreglo de datos y construye una lista que muestra su contenido en 
    la pantalla
    * cada elemento agregado se le agrega un id que es el id de cada objeto (dato) 
    dentro del arreglo
    */
function displayData(data) 
    {let display = ""; 
    data.forEach((post) => {
        display += `
        <ul id="${post.id}">
        <li><strong>Nombre:</strong> ${post.Nombre}</li>
        <li><img src=" ${post.body}"></li>
        </ul>
        `;
        });
    document.getElementById("data").innerHTML = display;
}

/**
* Function que se pasa como callback el keyup del textarea search
*/
function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
     if (match(post.Nombre.toLowerCase(), text.toLowerCase()) || text == "") show(post.id);
     else hide(post.id);
    });
}

/**
* Si substring es parte de word, retorna true, si no retorna false
* @param {String} word
* @param {String} substring
*/
function match(word, substring) {
    console.log(word, substring);
    console.log(word.includes(substring));
    return word.includes(substring);
}
    
/**
* Oculta el elemento html que tiene el id elementId
* @param {String} elementId
*/
function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}

/**
* Muestra el elemento html que tiene el id elementId
* @param {String} elementId
*/
function show(elementId) {
    document.getElementById(elementId).style.display = "block";
    }
    // Punto de entrada para desencadenar lógica
main();