class Celulares {
    constructor(color,peso,rdp,rdc,ram){
        this.color= color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoria= ram;
        this.encendido=false;

    }
    prender(){
        if (this.encendido==false){
            alert("celular prendido")
            this.encendido=true;
        }else {
            alert( "el celular apagado")
        }
    }
    
    reiniciar(){

        if (this.encendido == true){

            alert("reinciando celular");
        }else {
            alert("el celular está apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada con una resulución de: ${this.resolucionDeCamara}`)

    }
    grabarVideo(){
        alert(`video grabado con una resulución de: ${this.resolucionDeCamara}`)   

    }
    mobileInfo(){
        return `
        Color:<b>${this.color}</b><br>
        Peso:<b>${this.peso}</b><br>
        Tamaño:<b>${this.resolucionDePantalla}</b><br>
        Resolución de cámara:<b>${this.resolucionDeCamara}</b><br>
        Resolución de video:<b>${this.resolucionDeCamara}</b><br>
        Memoria RAM:<b>${this.memoria}</b><br>
        
        `
    }

}


class CelularAltaGama extends Celulares{

    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp, rdc, ram);
        this.resolucionDeCamaraExtra= rdce;
       

    }

grabarVideoLento(){
            alert("estas grabando en camara lenta")
}
reconocimientoFacial(){

alert("vamos a inciar reconocimiento facial")

}
mobileInfoAltaGama(){
    return this.mobileInfo() + `Resolución de camara trasera ${this.resolucionDeCamaraExtra} <br>` 
}
}



celular1 = new Celulares("rojo", "150gr", "5 pulg", "fullHD", "2GB");
celular2 = new Celulares("gris", "115gr", "5.5 pulg", "HD", "2GB");
celular3 = new Celulares("rosa", "160gr", "6 pulg", "fullHD", "3GB");

// celular1.prender();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.tomarFoto();



// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>

// `);

const celulara1= new CelularAltaGama ("rojo", "200gr", "6 pulg", "4k", "8GB","full HD");
const celulara2= new CelularAltaGama ("negro", "150gr", "6.3 pulg", "4k", "4GB", "HD");

document.write(`
${celulara1.mobileInfoAltaGama()} <br>
${celulara2.mobileInfoAltaGama()} <br>
`)