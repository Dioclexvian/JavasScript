

const contenedor = document.querySelector(".flex-container")

// const boton = document.querySelector(".send-buttom")
// boton.value = boton.value.toUpperCase();

function crearLlave(nombre, modelo, precio){

    img = " <img class = 'llave-img'  src = 'llave.png'>"
    nombre = `<h2 class = "">${nombre}</h2>`
    modelo = `<h3 id = '${modelo}'>${modelo}</h3>`
    precio = `<p> Precio: <b>$${precio}</b></p>`
    return [img, nombre, modelo, precio]
}

// const llave = crearLlave("llave1","modelo x", "33")


// contenedor.innerHTML += llave [0] + llave[1] + llave[2]

let documentFragment = document.createDocumentFragment();
// const changeHidden = (number)=>{
//     document.querySelector(".key-data").value = number;
// }


for(i=0; i<20; i++){
let modeloRandom = Math.round(Math.random()*10000);
let precioRandom = Math.round(Math.random()*10+30);
let llave = crearLlave( ` Llave: ${(i + 1)}` , `Modelo:${modeloRandom}`, `${precioRandom}` );
let div = document.createElement("DIV");
div.addEventListener("click", ()=>{document.querySelector(".key-data").value = modeloRandom;});
div.tabIndex = i;
div.classList.add(`item-${i}`, "flex-item" );
div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
// div.innerHTML= ...llave;

documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment)
