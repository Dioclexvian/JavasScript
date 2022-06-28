const imgprub = document.querySelector(".img-prueba");
const input = document.querySelector(".in-prueba")
const selec= document.querySelector(".selecionado")


// imgprub.addEventListener("error",(e)=>{
//     console.log("ha sucedido un error")
// });
// addEventListener("load",(e)=>{
//     console.log("ha cargado el sitio")
// });

// addEventListener("beforeunload",()=>{
//     console.log("te estas por ir del sitio")
// })
// addEventListener("resize",()=>{
//     console.log("se ha actulizado la resolución")
// })

// addEventListener("scroll",()=>{
//     console.log("se ha escroleado")
// })

input.addEventListener("select",(e)=>{
    // console.log("se ha selecionado")
    // console.log(e.target.selectionStart)
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let texto = input.value;
    selec.innerHTML= texto.substring(start,end);

})