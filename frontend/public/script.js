

const loadEvent = async function (){ //egész függvény aszinkron módon tud futni, ha az "async" szót elé írjuk
    const rootElement = document.getElementById("root");

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //a .then-es megoldás  akkor, ha NEM async a loadEvent függvény
    /*
    .then(function(response){  //.then method: egy functiont tartalmaz aminek a paramétere a response. The response parameter takes the value of the object returned from fetch(url).
        console.log(response); // response: object with a series of methods that can be used depending on what you want to do with the information 
        return response.json(); //json metódus: a response objektumot JSON-ná alakítja

    })
    .then(function(json){
        console.log(json) //kiírja magát a jsont, amit az előző then-ben létrehoztunk 
        console.log(json.date); // kiírja a json objektum "date" kulcsának értékét
        rootElement.insertAdjacentHTML("beforeend", `
            <img src="${json.hdurl}">
        `)
    }) 
    */

    //ugyanezt csinálja, mint a fenti, csak async/await használatával:
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"); 
    const responseJson = await response.json();
    rootElement.insertAdjacentHTML("beforeend", `
    <img src="${responseJson.hdurl}">
    `)
    console.log(responseJson) //ennek az objektumnak a hdurl kulcsának értékére van szükségünk (kép url címe) 
}

window.addEventListener("load", loadEvent);