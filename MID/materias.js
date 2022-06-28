const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const materia = document.getElementById("materia");
const btn_enviar = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");
const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 ){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres."
        return error;
    }else if ( nombre.value.length >40){
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres."
        return error;
    } else if(correo.value.length < 5 ||
              correo.value.length > 40 ||
              correo.value.indexOf("@") == -1 ||
              correo.value.indexOf(".") ==  -1 ) {
        error[0] = true;
        error[1] = "Correo inválido"
        return error;
    } else if (materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "La materia no existe"
        return error;
    }
    error[0]=false;
    return error;
}
btn_enviar.addEventListener("click", (e) =>{

    e.preventDefault();
    let error = validarCampos();
   if (error[0]){
    resultado.innerHTML = error [1];
    resultado.classList.add("red")
   }else {
    resultado.innerHTML  = "solicitud enviada correctamente";
    resultado.classList.add("green")
   } 
   
})


