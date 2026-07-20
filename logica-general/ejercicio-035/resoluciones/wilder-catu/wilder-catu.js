/*
=========================================
Reto: Reglas de Negocio
Temática: Dibujo Digital
Campuslands
=========================================

Objetivo:
Aplicar las reglas de negocio para aprobar o rechazar
proyectos de dibujo digital antes de ser publicados.
*/

// Lista de proyectos
const proyectos = [
    {
        autor: "Laura Gómez",
        titulo: "Paisaje Fantástico",
        resolucion: 4000,
        formato: "PNG",
        publicado: false
    },
    {
        autor: "Carlos Pérez",
        titulo: "Robot Futurista",
        resolucion: 1800,
        formato: "JPG",
        publicado: false
    },
    {
        autor: "Ana López",
        titulo: "Retrato Anime",
        resolucion: 3500,
        formato: "PSD",
        publicado: false
    },
    {
        autor: "Luis Martínez",
        titulo: "Ciudad Cyberpunk",
        resolucion: 4500,
        formato: "PNG",
        publicado: true
    }
];

/*
=========================================
Función para validar proyectos
=========================================
*/

function validarProyectos(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let proyecto = lista[i];
        let resultado = "";

        // Regla 1: No debe estar publicado
        if (proyecto.publicado) {

            resultado = "Rechazado: el proyecto ya fue publicado.";

        }
        // Regla 2: Resolución mínima
        else if (proyecto.resolucion < 3000) {

            resultado = "Rechazado: resolución insuficiente.";

        }
        // Regla 3: Formato permitido
        else if (
            proyecto.formato !== "PNG" &&
            proyecto.formato !== "PSD"
        ) {

            resultado = "Rechazado: formato no permitido.";

        }
        // Cumple todas las reglas
        else {

            resultado = "Proyecto aprobado para publicación.";

        }

        reporte.push({
            titulo: proyecto.titulo,
            autor: proyecto.autor,
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
    console.log("REPORTE DE DIBUJO DIGITAL");
    console.log("====================================\n");

    datos.forEach((proyecto) => {

        console.log("Proyecto: " + proyecto.titulo);
        console.log("Autor: " + proyecto.autor);
        console.log("Resultado: " + proyecto.resultado);
        console.log("--------------------------------");

    });

}

const resultado = validarProyectos(proyectos);

mostrarReporte(resultado);