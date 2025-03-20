getText("https://hp-api.onrender.com/api/characters")

async function getText (file) {

    let casas = await fetch(file);
    let totalCas = await casas.text();
document.getElementById("demo").innerHTML = totalCas;

    
}