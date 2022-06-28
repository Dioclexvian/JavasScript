const sendButton = document.getElementById('enviar-nota');

sendButton.addEventListener("click", ()=>{
    let prevRes, mensaje;
    try{
        
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)){
            throw "payaso";
        }
       mensaje =  definirMensaje(prevRes);
       resultado = verificarAprovacion(8,9,prevRes);
    }catch(e){

    resultado = "tan chistoso"
    mensaje = "te he descubierto hacker"
    }
    abrirModal(resultado, mensaje);
})

const definirMensaje = (pr)=>{
    let resultado
    switch(pr){

        case 1: 
        resultado = "mancoooo";
        break;

        case 2: 
        resultado = "mmmmalardo";
        break;

        case 3: 
        resultado = "sigue intentando";
        break;
        case 4: 
        resultado = "pudo ser peor";
        break;
        case 5: 
        resultado = "todo esta equilibrado";
        break;
        case 6: 
        resultado = "casi pero no";
        break;
        case 7: 
        resultado = "por un pelo de rana calva";
        break;
        case 8: 
        resultado = "bien";
        break;

        case 9: 
        resultado = "buena";
        break;

        case 10: 
        resultado = "tramposo :V";
        break;

        default: resultado = null;
    }
    return resultado;
}


const verificarAprovacion = (nota1,nota2,prevr)=>{
    
    promedio = ( nota1 + nota2 + prevr) / 3;
    if (promedio >= 7){
      return `<span class = "green">APORVADO </span>`;
    }
    return `<span class = "red">DESAPORVADO </span>`;
}
const abrirModal = (res,msg) =>{

   document.querySelector(".resultado").innerHTML = res;
   document.querySelector(".mensaje").innerHTML ="resultado de tu prueba: " + msg;
    let modal = document.querySelector(".modal-bckgrn");
    modal.style.display = "flex"
    modal.style.animation = "aparecer 1s forwards";
}
