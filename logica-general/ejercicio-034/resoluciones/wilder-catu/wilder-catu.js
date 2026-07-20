/*
=========================================
Reto: Diagnóstico de Errores
Temática: Tatuajes
Campuslands
=========================================

Objetivo:
Revisar una lista de solicitudes de tatuajes para
detectar errores o inconsistencias antes de agendar
una cita.
*/

// Lista de solicitudes
const solicitudes = [
    {
        cliente: "Carlos Pérez",
        edad: 22,
        diseño: "Dragón",
        presupuesto: 800
    },
    {
        cliente: "Ana López",
        edad: 17,
        diseño: "Flor de loto",
        presupuesto: 600
    },
    {
        cliente: "Luis Gómez",
        edad: 28,
        diseño: "",
        presupuesto: 500
    },
    {
        cliente: "María Rodríguez",
        edad: 30,
        diseño: "Rosa",
        presupuesto: -100
    },
    {
        cliente: "José Martínez",
        edad: 25,
        diseño: "Calavera",
        presupuesto: 1200
    }
];

/*
=========================================
Función para diagnosticar errores
=========================================
*/

function diagnosticarSolicitudes(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let solicitud = lista[i];
        let resultado = "";

        // Verificar mayoría de edad
        if (solicitud.edad < 18) {

            resultado = "Error: el cliente es menor de edad.";

        }
        // Verificar diseño
        else if (solicitud.diseño.trim() === "") {

            resultado = "Error: no se especificó el diseño.";

        }
        // Verificar presupuesto
        else if (solicitud.presupuesto <= 0) {

            resultado = "Error: presupuesto inválido.";

        }
        // Solicitud válida
        else {

            resultado = "Solicitud válida para agendar.";

        }

        reporte.push({
            cliente: solicitud.cliente,
            resultado: resultado
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

    console.log("===================================");
    console.log("DIAGNÓSTICO DE ERRORES");
    console.log("SOLICITUDES DE TATUAJES");
    console.log("===================================\n");

    datos.forEach((solicitud) => {

        console.log("Cliente: " + solicitud.cliente);
        console.log("Resultado: " + solicitud.resultado);
        console.log("--------------------------------");

    });

}

const resultado = diagnosticarSolicitudes(solicitudes);

mostrarReporte(resultado);