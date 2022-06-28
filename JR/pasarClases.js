let materias ={

    fisica: [90,7,3,"fisica"],
    matematicas:[95,8,4,"matematicas"],
    logica:[72,6,2,"logica"],
    programacion: [60,6,3,"programacion"],
    biologia: [89,7,2,"biologia"],
    calculo: [97,9,4,"calculo"],
    bbdd: [55,6,1,"bbdd"],
    quimica: [95,6,2,"quimica"]

}

const aprobo = ()=>{

    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90){
            console.log("%c   Asistencias en orden","color:green");

        }else {
            console.log("%c   Falta de asistencias","color:red");

        }
        
        if (promedio >= 7){
            console.log("%c   promedio en orden","color:green");

        }else {
            console.log("%c   Falta de promedio","color:red");

        }

        if (trabajos >= 3){
            console.log("%c   Tabajos prácticos en orden","color:green");

        }else {
            console.log("%c   Falta de trabajos prácticos","color:red");

        }

    }
}
aprobo();