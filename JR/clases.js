let cantidad  = prompt (" cuantos alumnos son")
let alumnost = []


for (i = 0 ; i < cantidad; i++){

    alumnost[i] = [ prompt ("nombre del alumno" + (i  +1 )), 0];
}

const asisitencia = (nombre, p )=>
{

    let presencia = prompt (nombre);
    if ( presencia == "p" || presencia == "P"){

        alumnost[p][1]++;
    }
}


for (i = 0; i < 30; i ++){

    for (alumno in alumnost){

        asisitencia(alumnost[alumno][0], alumno);
    }
}

for (alumno in alumnost){

    let resultado = `${alumnost[alumno][0]}: <br>
    ___________presentes: ${alumnost[alumno][1]} <br>
    ___________Ausencias: ${30 - alumnost[alumno][1]}
    `;
    if (30 - alumnost[alumno][1] > 18){

        resultado+= " <b sytle = ' color:red'> REPROBADO POR INACISTENCIAS </b> <br> <br>";


    }else {

        resultado+="<br><br>2"
    } 
    document.write(resultado);

}