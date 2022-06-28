// const temp = setTimeout( ()=>{
// document.write("hola")
// },
// 2000
// );

// clearTimeout(temp);


const inter = setInterval( ()=>{
    document.write("hola ")
    },
    2000
    );
setTimeout(()=>{
clearInterval(inter);
}, 8000)
    