let free = false;

const Validar = time=>{

    let edad  = prompt (" cual es tu edad")

    if (edad  > 18 ){


        if (time >= 2 && time < 7 && free == false){

            alert (`puedes pasar porque es la primer persona depues de la 2AM`);
            free = true;
        } else {
            alert ( `123son las ${time} puedes pasar, pero tienes que pagar la entrada`)
        }
    }else {

        alert (" eres menor de edad, no puedes pasar")
    }
}

Validar (23)
Validar (24)
Validar (0)
Validar (1)
Validar (2)
Validar (3)
Validar (4)
Validar (5)

