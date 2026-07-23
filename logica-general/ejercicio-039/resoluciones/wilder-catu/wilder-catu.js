/*
=========================================
Reto: Inventarios Lógicos
Temática: Fórmulas Químicas
Campuslands
=========================================

Objetivo:
Administrar un inventario de sustancias químicas y
determinar cuáles pueden utilizarse en un laboratorio
según las reglas establecidas.
*/

// Inventario de sustancias
const sustancias = [
    {
        nombre: "Agua Destilada",
        formula: "H2O",
        cantidad: 25,
        estado: "Disponible"
    },
    {
        nombre: "Ácido Clorhídrico",
        formula: "HCl",
        cantidad: 8,
        estado: "Disponible"
    },
    {
        nombre: "Hidróxido de Sodio",
        formula: "NaOH",
        cantidad: 0,
        estado: "Disponible"
    },
    {
        nombre: "Etanol",
        formula: "C2H5OH",
        cantidad: 15,
        estado: "Agotado"
    },
    {
        nombre: "Sulfato de Cobre",
        formula: "CuSO4",
        cantidad: 30,
        estado: "Disponible"
    }
];

/*
=========================================
Función para evaluar el inventario
=========================================
*/

function evaluarInventario(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let sustancia = lista[i];
        let resultado = "";

        // Regla 1
        if (sustancia.estado !== "Disponible") {

            resultado = "No disponible para uso.";

        }
        // Regla 2
        else if (sustancia.cantidad <= 0) {

            resultado = "Sin existencias.";

        }
        // Regla 3
        else if (sustancia.cantidad < 10) {

            resultado = "Stock bajo.";

        }
        // Regla 4
        else {

            resultado = "Disponible para experimentos.";

        }

        reporte.push({
            nombre: sustancia.nombre,
            formula: sustancia.formula,
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

    console.log("====================================");
    console.log("INVENTARIO DE FÓRMULAS QUÍMICAS");
    console.log("====================================\n");

    datos.forEach((sustancia) => {

        console.log("Sustancia: " + sustancia.nombre);
        console.log("Fórmula: " + sustancia.formula);
        console.log("Estado: " + sustancia.resultado);
        console.log("--------------------------------");

    });

}

const resultado = evaluarInventario(sustancias);

mostrarReporte(resultado);