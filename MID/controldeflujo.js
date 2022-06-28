// let exp = "pera"
// switch(exp){
//     case "banana":
//          console.log("tiene forma de uwu");
//          break;
//     case "pera":
//          console.log("tiene forma de ewe");
//          break;
//     case "manzana":
//          console.log("tiene forma de -.-");
//          break;

//     default: 
//     alert("no es nada");

// }


//  const pruebaTry = () => {

//     try {
//         return 1;
//     }
//     catch(e){
//      return 2;
//     } 
//     finally{
//         return 3;
//     }

//  }

//  console.log(pruebaTry());

 try {
    throw {
        error: "nombre del error ",
        info: "info del error"
    };
}
catch(e){
 console.log(e.info)
} 
finally{
    
}