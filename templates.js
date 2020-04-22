//templates
let nombre = "Deadpool";
let real = "Wade Wilson";
let nombreCompleto = nombre + " " + real;
console.log(nombre + " " + real);
console.log(`${nombre}\n${real}`);
console.log(nombreCompleto === nombre + " " + real);
//En js el triple igual sirve para comparar tanto la forma como el contenido, son 
//operadores de comparacion estricta

function getNombre() {
    return `${nombre}`;
};
console.log(`el nombre es: ${nombre}`);
//En w10 para obtener la tilde invertida se oprime alt+96
//Es mas comoda para la impresion de variables y texto, evitando el usar el mas
//en comillas dobles