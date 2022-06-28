// const rangoEtario = document.querySelector(".rangoEtario");
// document.write(rangoEtario)

// rangoEtario.setAttribute("type", "color");
// document.write(rangoEtario.getAttribute("type"));
// rangoEtario.removeAttribute("type");
// document.write(rangoEtario.getAttribute("type"));

// const titulos = document.querySelector(".titulo1");
// titulos.setAttribute("contenteditable","true");
// titulos.setAttribute("dir","rtl");
// titulos.setAttribute("hidden","true");
// titulos.setAttribute("tabindex","3");


// const titulos = document.querySelector(".titulo1");
// titulos.setAttribute("title", "jajaja XD")


// const input = document.querySelector(".input-normal");

// document.write(input.className + "<br>")
// document.write(input.value + "<br>")
// input.type = "color"
// document.write(input.type = "color" + "<br>")
// input.accept = "image/png" 
// input.minLength = 5;
// input.placeholder = "a que no me podes escribir";
// input.required = " ";



////
// const titulo = document.querySelector(".titulo");

// titulo.style.padding = "30px";
// titulo.style.backgroundColor="#5fe";

// titulo.classList.add("grande")
// titulo.classList.remove("grande")
// document.write(titulo.classList.item(1));
// document.write(titulo.classList.contains("grande"));
// let claseExiste = titulo.classList.toggle("grande", true);
// document.write(claseExiste);

// titulo.classList.replace("grande", "pato")
// let resultado = titulo.textContent;
// let resultado = titulo.innerHTML;

// let resultado = titulo.outerHTML;
// document.write(resultado);
// alert(resultado)

// const contenedor = document.querySelector(".contenedor");
// // const item = document.createElement("LI")
// // const textoDelItem = document.createTextNode("este es un item");
// // item.appendChild(textoDelItem);

// const fragmento = document.createDocumentFragment();
// for(i =0 ; i <20 ; i++){
//     const item = document.createElement("LI")
//     item.innerHTML = " elemento agregado # " + (i+1);    
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento);
// console.log(fragmento);
// // console.log(textoDelItem)


// const contenedor = document.querySelector(".contenedor");
// // const primerHijo = contenedor.firstChild;
// // const primerHijo = contenedor.lastChild;
// // const primerHijo = contenedor.firstElementChild;
// // const primerHijo = contenedor.lastElementChild;
// // const hijos = contenedor.childNodes;
// const hijos = contenedor.children; //HTML colection no se recorre con forEach, se usa for of

// // hijos.forEach(hijo => console.log(hijo))
// // console.log(primerHijo)
// console.log(hijos)

// for (hijo of hijos){
//     console.log(hijo)
// }

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("p");
// parrafo.innerHTML = "parrafo creado";

// const h2_nuevo = document.createElement("h2");
// // h2_nuevo.innerHTML = "h2 creado";

// h2_antiguo = document.querySelector(".h2_antiguo");

// contenedor.replaceChild(h2_nuevo, h2_antiguo);
// contenedor.removeChild(h2_antiguo);


// let respuesta = contenedor.hasChildNodes();
// let respuesta = h2_nuevo.hasChildNodes();

// if (respuesta){
//     document.write("El elemento tiene hijos")
// }else{
//     document.write("el elemento no tiene hijos")
// }

// console.log(contenedor.parentElement);
// console.log(h2_antiguo.nextSibling);
// console.log(h2_antiguo.previousSibling);
// console.log(h2_antiguo.previousNextSibling);
// console.log(h2_antiguo.nextElementSibling);
// console.log(h2_antiguo.previousElementSibling);

//////////////////////////////

// const div = document.querySelector(".div2");
// console.log(div.closest("div"))


