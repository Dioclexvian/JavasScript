let animales = ["gato", "perro", "rex"];
animales.tamano = "grande"
for ( animal in animales){

    document.write ( animal + " ");
}

document.write("<br>")

for ( animal of animales){

    document.write ( animal + " ")
}

array1 = [ "josefa", " roberta", "martina"];
array2 = [ "pedro", "manuela", array1, "gargament"];
document.write("<br>");

forRancio:
for (let array in array2){
    if (array == 2 ){

        for (let array of array1){  
            document.write(array  + " ");
            break   forRancio;
        }
    } else {

        document.write(array2[array] + " ")
    }


}