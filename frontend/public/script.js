

const loadEvent = async function (){ //egész függvény aszinkron módon tud futni
    const rootElement = document.getElementById("root");

    /* fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //ez akkor, ha NEM async a loadEvent függvény
    .then(function(response){
        console.log(response);
        return response.json(); //json metódus
    })
    .then(function(json){
        console.log(json.date);
        rootElement.insertAdjacentHTML("beforeend", `
            <img src="${json.hdurl}">
        `)
    }) */

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"); //ugyanezt csinálja, mint a fenti

    const responseJson = await response.json();
    rootElement.insertAdjacentHTML("beforeend", `
            <img src="${responseJson.hdurl}">
        `)

}

window.addEventListener("load", loadEvent);