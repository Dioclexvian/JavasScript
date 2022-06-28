class Animal {

    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color} `;

    }

    verInfo(){
        document.write(this.info + "<br>")
    }
    // ladra(){

    //     if(this.especie == "perro"){
    //         document.write("waaaw <br>")
    //     }else{
    //         document.write("no puede ladrar, ya que es un " + this.especie + "<br>")
    //     }
    // }


}

class Perro extends Animal {

    contructor(especie,edad,color, raza){
        // super(especie,edad,color);
        this.raza =null;
    }
    set setRaza(newname){
        this.raza=newname;
    }
    get getRaza(){
        return this.raza;
    }
}
const perro = new Perro ("perro", 4, "verde", "doberman");
const gato = new Animal ("gato", 3, "negro");
const loro = new Animal ("loro", 1, "verde");


// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(loro.info + "<brconst

perro.verInfo();
perro.setRaza= "pedro";
document.write(perro.getRaza + "<br>");
gato.verInfo();
loro.verInfo();
//  perro.ladra();
//  gato.ladra();
//  loro.ladra();