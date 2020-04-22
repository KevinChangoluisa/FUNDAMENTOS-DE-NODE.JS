//Funcion flecha
//forma HABITUAL de una funcion
//function sumar(a, b) {
//    return a + b;
//}
//console.log(`La suma de  5 + 8 es: ${sumar(5,8)}`);

//FUNCION FLECHA COMPLEJA

//let sumar = (a, b) => {
//    return a + b;
//}
//console.log(`La suma de  5 + 8 es: ${sumar(5,8)}`);

//se puede simplificar de la siguiente forma

//let sumar = (a, b) => a + b;

//console.log(`la suma de 3 + 4 es ${sumar(3,4)}`);

//function saludar() {
//    return `Hola chicos`;
//}

//funcion flecha simple
//let saludar = () => "Hola chicos";
//console.log(saludar());

//funcion let compleja
//let saludo = () => {
//    let a = "Kevin";
//    let b = "Changoluisa";
//    return `${a}  ${b}`
//}
//console.log(saludo());

//Ejercicio 

let deadpool = {
        nombre: 'Wade',
        apellido: 'Wilson',
        poder: 'Regeneracion',
        getNombre: () => `Nombre: ${deadpool.nombre}\nApellido: ${deadpool.apellido} \npoder:${deadpool.poder}`
    }
    //Al transformar una funcion flecha dentro de un objeto el this deja de funcionar
    //se accede mediante el nombre del objeto 

console.log(deadpool.getNombre());