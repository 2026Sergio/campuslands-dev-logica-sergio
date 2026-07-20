/*
=========================================
Reto: Tablas de Decisiones
Temática: Arquitectura 3D
Campuslands
=========================================

Objetivo:
Evaluar proyectos de arquitectura 3D utilizando una
tabla de decisiones para determinar si un proyecto
es aprobado, requiere revisión o es rechazado.
*/

// Lista de proyectos
const proyectos = [
    {
        nombre: "Casa Moderna",
        renderCompleto: true,
        presupuestoAprobado: true,
        clienteConfirmado: true
    },
    {
        nombre: "Edificio Central",
        renderCompleto: true,
        presupuestoAprobado: false,
        clienteConfirmado: true
    },
    {
        nombre: "Centro Comercial",
        renderCompleto: false,
        presupuestoAprobado: true,
        clienteConfirmado: true
    },
    {
        nombre: "Hotel Vista",
        renderCompleto: true,
        presupuestoAprobado: true,
        clienteConfirmado: false
    },
    {
        nombre: "Condominios Norte",
        renderCompleto: false,
        presupuestoAprobado: false,
        clienteConfirmado: false
    }
];

/*
=========================================
Función para evaluar proyectos
=========================================
*/

function evaluarProyectos(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let proyecto = lista[i];
        let decision = "";

        // Tabla de decisiones

        if (
            proyecto.renderCompleto &&
            proyecto.presupuestoAprobado &&
            proyecto.clienteConfirmado
        ) {

            decision = "Proyecto aprobado.";

        } else if (
            proyecto.renderCompleto &&
            proyecto.presupuestoAprobado &&
            !proyecto.clienteConfirmado
        ) {

            decision = "Pendiente de confirmación del cliente.";

        } else if (
            proyecto.renderCompleto &&
            !proyecto.presupuestoAprobado
        ) {

            decision = "Pendiente de aprobación del presupuesto.";

        } else {

            decision = "Proyecto rechazado o requiere revisión.";

        }

        reporte.push({
            nombre: proyecto.nombre,
            decision: decision
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

    console.log("======================================");
    console.log("TABLA DE DECISIONES");
    console.log("ARQUITECTURA 3D");
    console.log("======================================\n");

    datos.forEach((proyecto) => {

        console.log("Proyecto: " + proyecto.nombre);
        console.log("Resultado: " + proyecto.decision);
        console.log("----------------------------------");

    });

}

const resultado = evaluarProyectos(proyectos);

mostrarReporte(resultado);