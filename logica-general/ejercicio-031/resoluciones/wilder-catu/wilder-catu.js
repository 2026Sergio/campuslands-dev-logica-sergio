/*
=========================================
Reto: Organización de Listas
Temática: Kickboxing
Campuslands
=========================================

Objetivo:
Organizar una lista de competidores de kickboxing
según diferentes criterios y generar un reporte.
*/

// Lista de competidores
const competidores = [
    {
        nombre: "Carlos Méndez",
        categoria: "Peso Ligero",
        victorias: 18,
        derrotas: 3,
        activo: true
    },
    {
        nombre: "Luis Ramírez",
        categoria: "Peso Medio",
        victorias: 12,
        derrotas: 6,
        activo: false
    },
    {
        nombre: "Ana López",
        categoria: "Peso Pluma",
        victorias: 20,
        derrotas: 2,
        activo: true
    },
    {
        nombre: "José Pérez",
        categoria: "Peso Pesado",
        victorias: 15,
        derrotas: 5,
        activo: true
    },
    {
        nombre: "María González",
        categoria: "Peso Mosca",
        victorias: 10,
        derrotas: 1,
        activo: false
    }
];

/*
=========================================
Función para organizar la lista
=========================================
*/

function organizarCompetidores(lista) {

    let activos = [];
    let inactivos = [];
    let destacados = [];

    for (let i = 0; i < lista.length; i++) {

        let competidor = lista[i];

        // Separar activos e inactivos
        if (competidor.activo) {
            activos.push(competidor);
        } else {
            inactivos.push(competidor);
        }

        // Identificar competidores destacados
        if (competidor.victorias >= 15) {
            destacados.push(competidor.nombre);
        }

    }

    return {
        activos,
        inactivos,
        destacados
    };

}

/*
=========================================
Mostrar reporte
=========================================
*/

function mostrarReporte(resultado) {

    console.log("==================================");
    console.log("ORGANIZACIÓN DE COMPETIDORES");
    console.log("==================================\n");

    console.log("Competidores activos:");

    resultado.activos.forEach((competidor) => {
        console.log("- " + competidor.nombre + " | " + competidor.categoria);
    });

    console.log("\nCompetidores inactivos:");

    resultado.inactivos.forEach((competidor) => {
        console.log("- " + competidor.nombre + " | " + competidor.categoria);
    });

    console.log("\nCompetidores destacados:");

    resultado.destacados.forEach((nombre) => {
        console.log("- " + nombre);
    });

}

const resultado = organizarCompetidores(competidores);

mostrarReporte(resultado);