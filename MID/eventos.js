const boton = document.querySelector(".button");
const contenedor =  document.querySelector(".contenedor")
const input = document.querySelector(".in-prueba")

// boton.onclick = () => {
//     alert("YAMETE KUDASAI!!!")
// } YA NO SE USA
// boton.addEventListener("click", saludar);

// function saludar (){
//     alert("YAMETE KUDASAIIIII!!!")
    //    boton.removeEventListener("click", saludar)
// }
// boton.addEventListener("click", (e) => {
//     alert("YAMETE KUDASAIIIII!!!")
//     e.stopPropagation()
//     // console.log(e.target)
// });
// contenedor.addEventListener("click", (e) => {
//     alert("CONTENEDOR-CHAN")
//     // console.log(e.target)
// },true);


boton.addEventListener("dblclick", (e) => {
    alert("YAMETE KUDASAIIIII!!!")
    e.stopPropagation()
    // console.log(e.target)
});

// contenedor.addEventListener("mouseover", (e) => {
//     alert("CONTENEDOR-CHAN")
//     // console.log(e.target)
// });

// contenedor.addEventListener("mouseout", (e) => {
//     alert("KIMOCHI DAIOO")
//     // console.log(e.target)
// });

// contenedor.addEventListener("contextmenu", (e) => {
//     alert("POR AHI NO HENTAII!")
//     // console.log(e.target)
// });

// contenedor.addEventListener("mousedown", (e) => {
//     alert("ABAJO")
//     // console.log(e.target)
// });

// contenedor.addEventListener("mouseup", (e) => {
//     alert("ARRIBA")
//     // console.log(e.target)
// });

input.addEventListener("keydown",()=>{
    console.log("una tecla fue presionada");
});

input.addEventListener("keydown",()=>{
    console.log("una tecla fue soltada");
});

input.addEventListener("keypress",()=>{
    console.log("un usuario presionó una tecla y la soltó");
});

