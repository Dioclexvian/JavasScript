let alumonos = [{

    nombre : "Dioclexviancito",
    email: "itsmeDIO@hotmail.com" ,
    materia: "control 2"
},{
    nombre : "Camila",
    email: "calientaviejitos69@hotmail.com" ,
    materia: "control 3"
},{
    nombre : "Fernando ",
    email: "el_macho@hotmail.com" ,
    materia: "golpear 2"
},{
    nombre : "yasuri yamile",
    email: "locortoconlagillet@hotmail.com" ,
    materia: "cortes 2"
}]


const boton = document.querySelector(".confirmar");
const contenedor =  document.querySelector(".grid-container");

for ( alumno in alumonos){
    let datos = alumonos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana"> 
        <select class="semana-elegida">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
        </select>
    </div>`;
contenedor.innerHTML+= htmlcode;
}

boton.addEventListener("click", ()=>{
    let check = confirm("la informacion introdcucida está correcta?");
    if(check){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanas_elegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanas_elegidas[elemento].value;
        }
    }
    

})