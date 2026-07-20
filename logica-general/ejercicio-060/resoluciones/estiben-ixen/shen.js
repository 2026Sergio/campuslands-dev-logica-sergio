function seleccionarComida(opciones) {
    let seleccion = null;

    for (const comida of opciones) {
        if (comida.disponible === true) {
            if (
                seleccion === null ||
                comida.popularidad > seleccion.popularidad ||
                (comida.popularidad === seleccion.popularidad && comida.precio < seleccion.precio)
            ) {
                seleccion = comida;
            }
        }
    }

    if (seleccion === null) {
        return {
            resultado: "sin opciones disponibles"
        };
    }

    return {
        resultado: "opcion seleccionada",
        comida: seleccion.nombre,
        precio: seleccion.precio,
        popularidad: seleccion.popularidad
    };
}

const opcionesNormal = [
    {
        nombre: "Hamburguesa urbana",
        precio: 15000,
        popularidad: 90,
        disponible: true
    },
    {
        nombre: "Perro caliente",
        precio: 10000,
        popularidad: 85,
        disponible: true
    },
    {
        nombre: "Tacos",
        precio: 12000,
        popularidad: 95,
        disponible: true
    }
];

const opcionesBorde = [
    {
        nombre: "Pizza callejera",
        precio: 13000,
        popularidad: 80,
        disponible: false
    }
];

console.log(seleccionarComida(opcionesNormal));
console.log(seleccionarComida(opcionesBorde));
