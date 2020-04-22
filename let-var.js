// let vs var

// definimos una variable 
//  var nombre = "Kevin";
// Nombre a sido reemplazado Kevin ---> Andres var nombre = "Andres";
// Imprimimos en consola un mensaje con la variable
//  si usamos let no podemos volver a definir la variable

// let nombre = "Kevin Andres";
//  let nombre = "Andres";

//  var nombre = "Kevin";
// if (true) {
//      var nombre = "Magneto";
// }

let nombre = "Kevin";
if (true) {
    let nombre = "Magneto";
    // al estar definido let dentro de un bloque de codigo no genera error con el
    // let que esta fuera del bloque
}
console.log(`Hola ${nombre}`);

for (var i = 0; i < 6; i++) {
    console.log(`i=${i}`);
}
console.log(`valor final de i: ${i}`);