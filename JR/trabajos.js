let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos prácticos";
let quehaceres = "30 minutos de quehaceres";
let descanso = "10 minutos de descanso";

console.log("TAREAS");


for (var i=0; i<14; i++){
    if (i == 0 ){
        console.group("semana 1");
    }
console.group("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso)
    console.log(estudio);
    console.log(tp);
    console.log(quehaceres);
    console.groupEnd();

    if (i == 6 ){
        console.groupEnd();
        console.group("semana 2");
    }
}

console.groupEnd();
console.groupEnd();

