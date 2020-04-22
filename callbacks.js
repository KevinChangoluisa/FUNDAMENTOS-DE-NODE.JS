//Funcion callback

// setTimeout(function() {
//     console.log("Hola muchachos");
// }, 3000);

// setTimeout(() => {
//     console.log("Hola muchachos");
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Kevin",
        id
    }
    if (id === 20) {
        console.log("no existe usuario con id= " + id);
    } else {
        callback(null, usuario);
        //cuando esta todo correcto enviamos null, asumiendo que no hay ningun error 
    }

}

getUsuarioById(40, (err, usuario) => {
    //err error
    //si llega un error s eenvia el error
    //el primer paramatro siempre es el error
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de la bd:", usuario);
})