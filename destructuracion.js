//Destructuracion
//Creamos un objeto 
//Js permite crear objetons sin tener que crear una clase

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: function() {
        return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nPoder: ${this.poder}`
    }

}
console.log(deadpool.getNombre());


//opc1
let nom = deadpool.nombre
let ape = deadpool.apellido
let pod = deadpool.poder

//Obtenemos los atribulos del objetos deadpool

//Destructuracion de objetos Opcion 2

let {
    nombre: primerNombre, //cambiamo el nombre de la variable de afuera con :
    apellido,
    poder
} = deadpool; //obtenernos de deadpool sus atributos nombre,apellido,poder
console.log(primerNombre, apellido, poder);