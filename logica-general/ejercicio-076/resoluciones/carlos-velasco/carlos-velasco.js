const analizarEscenario3D = (matrizEscena) => {
    let totalPoligonos = 0;
    let objetosConteo = 0;

    for (let i = 0; i < matrizEscena.length; i++) {
        for (let j = 0; j < matrizEscena[i].length; j++) {
            totalPoligonos += matrizEscena[i][j];
            objetosConteo++;
        }
    }

    const promedioPoligonos = objetosConteo > 0 ? totalPoligonos / objetosConteo : 0;

    return {
        total_objetos: objetosConteo,
        suma_poligonos: totalPoligonos,
        promedio_poligonos_por_objeto: parseFloat(promedioPoligonos.toFixed(2)),
        explicacion: "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos."
    };
};

const escena1 = [
    [1500, 3000, 450],
    [800, 1200, 3500]
];

const escenaVacia = [];

console.log(analizarEscenario3D(escena1));
console.log(analizarEscenario3D(escenaVacia));