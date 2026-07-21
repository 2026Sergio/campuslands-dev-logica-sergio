/*
=========================================
Reto: Matrices Simples
Temática: Animación 3D
Campuslands
=========================================

Objetivo:
Analizar una matriz que representa la ocupación de una
granja de renderizado (Render Farm) y generar un reporte
del estado de los equipos.
*/

// Matriz de equipos
// L = Libre
// O = Ocupado
const renderFarm = [
    ["O", "L", "O"],
    ["L", "L", "O"],
    ["O", "O", "L"]
];

/*
=========================================
Función para analizar la matriz
=========================================
*/

function analizarRenderFarm(matriz) {

    let libres = 0;
    let ocupados = 0;

    for (let fila = 0; fila < matriz.length; fila++) {

        for (let columna = 0; columna < matriz[fila].length; columna++) {

            if (matriz[fila][columna] === "L") {
                libres++;
            } else {
                ocupados++;
            }

        }

    }

    return {
        libres,
        ocupados
    };

}

/*
=========================================
Mostrar reporte
=========================================
*/

function mostrarReporte(resultado) {

    console.log("===================================");
    console.log("REPORTE DE RENDER FARM");
    console.log("ANIMACIÓN 3D");
    console.log("===================================\n");

    console.log("Equipos libres: " + resultado.libres);
    console.log("Equipos ocupados: " + resultado.ocupados);

}

const resultado = analizarRenderFarm(renderFarm);

mostrarReporte(resultado);