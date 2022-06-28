const obtenerInformacion = (materia)=>{


     materias = {
        fisica: ["PEREZ","pedro","pepito", "cofla","antonieta" ],
        programacion: ["SUAREZ","pedro","pepito","cofla"],
        logica: ["HANS","pedro","pepito","antonieta" ],
        quimica: ["GAONA","pepito","cofla","antonieta"]
    }
if (materias[materia] !== undefined){
    return [materias[materia], materia, materias];

}else {
    return materias;
}

}

const mostrarInformacion = (materia)=>{

let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();

    document.write(`El profesor de ${informacion[1]} es <b> ${profesor}</b><br>
    los alumnos son: ${alumnos} <br> <br>
    `)


}

}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes= [];
    let cantidadTotal= 0;
    for (info in informacion){
        // document.write(info)
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `${alumno}  esta en un total de   ${cantidadTotal} clases <br>
      y esta cursando los cursos:<b> ${clasesPresentes}</b> <br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
mostrarInformacion("logica");
document.write(cantidadDeClases("pedro"))
document.write(cantidadDeClases("pepito"))



