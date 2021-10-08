const BASE_URL = 'https://api.imgflip.com/get_memes'

class Memes{
    constructor(memes){
        this.memes = memes;
    }
}

let myMemes;
async function main() {
    document.getElementById("search").addEventListener("keyup", search);
    
    const memeURL = `${BASE_URL}`
    let memeData = null
    
    try {
        const response = await fetch(memeURL);
        memeData = await response.json();
        data = memeData.data.memes
        myMemes = new Memes(data);
        localStorage.setItem('memes', data);
        console.log(data);
    }
    catch (error) {
        console.log(`Algo ha fallado: ${error.message}`)
    }
    
    displayData(data);
}


function displayData(data) 
    {let display = ""; 
    data.forEach((post) => {
        display += `
        <ul id="${post.id}" hidden>
        <li><strong>Nombre:</strong> ${post.name}</li>
        <li><img src="${post.url}"  width="400" height="350"></li>
        </ul>
        `;
        });
    document.getElementById("data").innerHTML = display;
}


function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
     if (match(post.name.toLowerCase(), text.toLowerCase()) || text == "") show(post.id);
     else hide(post.id);
    });
}


function match(word, substring) {
    console.log(word, substring);
    console.log(word.includes(substring));
    return word.includes(substring);
}
    

function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}


function show(elementId) {
    document.getElementById(elementId).style.display = "block";
    }
main();