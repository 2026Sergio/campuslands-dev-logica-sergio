/*
=========================================
Reto: Lectura de Instrucciones
Temática: Viajes y Turismo
Campuslands
=========================================

Objetivo:
Analizar una lista de destinos turísticos y determinar
si un viaje puede realizarse según las reglas dadas.
*/

// Lista de destinos turísticos
const destinos = [
    {
        lugar: "Antigua Guatemala",
        precio: 500,
        cupos: 8,
        temporada: "Alta"
    },
    {
        lugar: "Lago de Atitlán",
        precio: 350,
        cupos: 0,
        temporada: "Media"
    },
    {
        lugar: "Semuc Champey",
        precio: 700,
        cupos: 5,
        temporada: "Baja"
    },
    {
        lugar: "Tikal",
        precio: 900,
        cupos: 2,
        temporada: "Alta"
    }
];

// Datos del cliente
const presupuesto = 800;
const temporadaPreferida = "Alta";

/*
=========================================
Función para evaluar destinos
=========================================
*/

function evaluarDestinos(lista, presupuesto, temporada) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let destino = lista[i];
        let resultado = "";

        if (destino.cupos === 0) {

            resultado = "No disponible (sin cupos).";

        } else if (destino.precio > presupuesto) {

            resultado = "Fuera del presupuesto.";

        } else if (destino.temporada !== temporada) {

            resultado = "No coincide con la temporada preferida.";

        } else {

            resultado = "Destino recomendado.";

        }

        reporte.push({
            lugar: destino.lugar,
            resultado: resultado
        });

    }

    return reporte;

}

/*
=========================================
Mostrar resultados
=========================================
*/

function mostrarReporte(datos) {

    console.log("===================================");
    console.log("REPORTE DE VIAJES Y TURISMO");
    console.log("===================================\n");

    datos.forEach((destino) => {

        console.log("Destino: " + destino.lugar);
        console.log("Resultado: " + destino.resultado);
        console.log("------------------------------");

    });

}

const resultado = evaluarDestinos(
    destinos,
    presupuesto,
    temporadaPreferida
);

mostrarReporte(resultado);