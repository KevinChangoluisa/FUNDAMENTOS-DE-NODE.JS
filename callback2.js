//callback2
let empleado = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];
// con corchetes se crea vectores en js

let salario = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = (id, callback) => {
    //metodo de los vectores para recorrer objeto por objeto
    let empleadoDB = empleado.find(empleado => empleado.id === id);
    //definimos una variable empleadoDB
    //Si empleado.id es igual a la id ingresada retornara y guardara el valor
    //en empleadoDB
    if (!empleadoDB) {
        callback(`El usuario con id: ${id} no existe`);
    } else {
        callback(null, empleadoDB);
    }
}
getEmpleado(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log(usuario);
});