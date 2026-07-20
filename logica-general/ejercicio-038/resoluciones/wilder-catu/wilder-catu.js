/*
=========================================
Reto: Sistema de Turnos
Temática: Soldadura
Campuslands
=========================================

Objetivo:
Administrar los turnos de trabajo de un taller de
soldadura y determinar el estado de cada soldador.
*/

// Lista de soldadores
const soldadores = [
    {
        nombre: "Carlos Pérez",
        turno: "Mañana",
        disponible: true,
        experiencia: 6
    },
    {
        nombre: "Ana López",
        turno: "Tarde",
        disponible: false,
        experiencia: 4
    },
    {
        nombre: "Luis Gómez",
        turno: "Noche",
        disponible: true,
        experiencia: 2
    },
    {
        nombre: "María Rodríguez",
        turno: "Mañana",
        disponible: true,
        experiencia: 8
    },
    {
        nombre: "José Martínez",
        turno: "Tarde",
        disponible: false,
        experiencia: 10
    }
];

/*
=========================================
Función para evaluar turnos
=========================================
*/

function evaluarTurnos(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let soldador = lista[i];
        let estado = "";

        // Regla 1
        if (soldador.disponible && soldador.experiencia >= 5) {

            estado = "Asignado al turno.";

        }
        // Regla 2
        else if (soldador.disponible && soldador.experiencia < 5) {

            estado = "Disponible, requiere supervisión.";

        }
        // Regla 3
        else {

            estado = "No disponible para asignación.";

        }

        reporte.push({
            nombre: soldador.nombre,
            turno: soldador.turno,
            estado: estado
        });

    }

    return reporte;

}

/*
=========================================
Mostrar reporte
=========================================
*/

function mostrarReporte(datos) {

    console.log("====================================");
    console.log("SISTEMA DE TURNOS");
    console.log("TALLER DE SOLDADURA");
    console.log("====================================\n");

    datos.forEach((soldador) => {

        console.log("Soldador: " + soldador.nombre);
        console.log("Turno: " + soldador.turno);
        console.log("Estado: " + soldador.estado);
        console.log("--------------------------------");

    });

}

const resultado = evaluarTurnos(soldadores);

mostrarReporte(resultado);