function analizarEscena3D(matriz) {
    if (!Array.isArray(matriz) || matriz.length === 0) {
        return {
            estado: "error",
            motivo: "matriz vacia"
        };
    }

    let objetosActivos = 0;
    let posiciones = [];

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            if (matriz[fila][columna] !== null) {
                objetosActivos++;

                posiciones.push({
                    fila,
                    columna,
                    objeto: matriz[fila][columna]
                });
            }
        }
    }

    return {
        cantidadObjetos: objetosActivos,
        posiciones
    };
}

const escenaNormal = [
    ["robot", null, "arbol"],
    [null, "casa", null],
    ["auto", null, "personaje"]
];

const escenaBorde = [];

console.log(analizarEscena3D(escenaNormal));
console.log(analizarEscenaBorde);