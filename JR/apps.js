class app{

    constructor(descargas,puntuacion,peso){

        this.descargas= descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada=false;
        this.instalada=false;
    }
    abrir(){


        if ( this.iniciada == false && this.instalada == true){
            this.iniciada =  true;
            alert("app iniciada");

        }else if(this.iniciada == true && this.instalada==true){
            alert("la app ya se encuentra abierta")
        }else if(this.instalada== false){
            alert("la aplicación no se encuentra instalada")
        }

    }
    cerrar(){


        if ( this.iniciada == true && this.instalada == true){
            this.iniciada =  false; 
            alert("app cerrada");

        }else if(this.iniciada == false && this.instalada==true){
            alert("la app ya se encuentra cerrada")
        }else if(this.instalada== false){
            alert("la aplicación no se encuentra instalada")
        }


    }

    instalar(){

        if (this.instalada == false){
            this.instalada = true;
            alert("la aplicación ha sido instalada");
        }else {
            alert("la aplicación ya ha sido instalada");
        }
    }

    desinstalar(){
        if (this.instalada==true){
            this.instalada = false;
            alert("la aplicación ha sido desintalada");
        }else {
            alert("no se encuentra la aplicación");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        puntuación:<b>${this.puntuacion}</b><br>
        peso:<b>${this.peso}</b><br>
        
        `
    }


}


app1 = new app("16.000", "5 estrellas", "900mb");
app2 = new app("12.000", "4.5 estrellas", "600mb");
app3 = new app("160.000", "4 estrellas", "1200mb");

// app1.abrir();
// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();
// app1.cerrar();
// app1.instalar();
// app1.cerrar();
// app1.abrir();
// app1.abrir();
// app1.instalar();
// app1.desinstalar();
// app1.desinstalar();
document.write(
    `
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>

    `
)