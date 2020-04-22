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
        callback(`El empleado con id: ${id} no existe`);
    } else {
        callback(null, empleadoDB);
    }
}
let getSalario = (empleado, callback) => {
    let salarioDB = salario.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`El empleado ${empleado.nombre} no tiene salario`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err2, salario) => {
        if (err2) {
            return console.log(err2);
        }
        console.log(salario);
    });

    12321
    123124
    4564

});