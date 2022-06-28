let pc1 = {
    nombre: "Dio",
    procesador: "ryzen 3600",
    ram: "16GB",
    espacio: "2TB"

};
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let RAM = pc1["RAM"];
let espacio = pc1["espacio"];

frase = `el nombre de mi pc es: <b> ${nombre}</b> <br>
            el procesador es:<b> ${procesador}</b> <br>
            la memoria RAM es: <b> ${RAM}</b> <br> 
            el espacio en disco es de: <b> ${espacio}</b> <br>`

document.write(frase)