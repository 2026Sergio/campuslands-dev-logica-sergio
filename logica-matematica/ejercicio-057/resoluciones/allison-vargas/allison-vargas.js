function evaluarRankingProyectos3D(proyectos) {
    // Validar entrada
    if (!Array.isArray(proyectos) || proyectos.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de proyectos."
        };
    }

    let sumaPuntajes = 0;
    let mejorProyecto = null;
    let peorProyecto = null;
    const rankingProcesado = [];

    // Procesamiento y cálculo de métricas acumuladas
    for (let i = 0; i < proyectos.length; i++) {
        const p = proyectos[i];

        // Validar propiedades del objeto
        if (!p || typeof p.nombre !== "string" || typeof p.puntaje !== "number" || p.puntaje < 0 || p.puntaje > 100) {
            return {
                error: true,
                mensaje: `El proyecto en el índice ${i} contiene datos inválidos.`
            };
        }

        sumaPuntajes += p.puntaje;

        if (!mejorProyecto || p.puntaje > mejorProyecto.puntaje) {
            mejorProyecto = p;
        }

        if (!peorProyecto || p.puntaje < peorProyecto.puntaje) {
            peorProyecto = p;
        }
    }

    // Ordenar de mayor a menor puntaje para definir el ranking
    const proyectosOrdenados = [...proyectos].sort((a, b) => b.puntaje - a.puntaje);

    // Asignar posición en el ranking (gestionando empates)
    let posicionActual = 1;
    for (let i = 0; i < proyectosOrdenados.length; i++) {
        if (i > 0 && proyectosOrdenados[i].puntaje < proyectosOrdenados[i - 1].puntaje) {
            posicionActual = i + 1;
        }

        let nivel = "";
        if (proyectosOrdenados[i].puntaje >= 90) {
            nivel = "Sobresaliente / Render Realista";
        } else if (proyectosOrdenados[i].puntaje >= 75) {
            nivel = "Aceptable / Render Estándar";
        } else {
            nivel = "Bajo / Requiere Optimización";
        }

        rankingProcesado.push({
            posicion: posicionActual,
            nombre: proyectosOrdenados[i].nombre,
            puntaje: proyectosOrdenados[i].puntaje,
            clasificacion: nivel
        });
    }

    const promedioPuntajes = Number((sumaPuntajes / proyectos.length).toFixed(2));

    return {
        total_proyectos: proyectos.length,
        promedio_general: promedioPuntajes,
        mejor_proyecto: { nombre: mejorProyecto.nombre, puntaje: mejorProyecto.puntaje },
        peor_proyecto: { nombre: peorProyecto.nombre, puntaje: peorProyecto.puntaje },
        tabla_ranking: rankingProcesado,
        explicacion: `Se evaluaron ${proyectos.length} proyectos de Arquitectura 3D. Promedio general: ${promedioPuntajes}/100.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Lista de Proyectos Arquitectónicos) ===");
const proyectosEjemplo = [
    { nombre: "Fachada Rascacielos A", puntaje: 92 },
    { nombre: "Render Interior Loft", puntaje: 78 },
    { nombre: "Modelado Estructura Viento", puntaje: 65 },
    { nombre: "Plaza Urbana VR", puntaje: 92 }
];
console.log(evaluarRankingProyectos3D(proyectosEjemplo));

console.log("\n=== Caso Borde (Lista con un Solo Elemento) ===");
const proyectoUnico = [
    { nombre: "Complejo Residencial", puntaje: 85 }
];
console.log(evaluarRankingProyectos3D(proyectoUnico));

console.log("\n=== Caso Entrada Inválida (Puntaje fuera de rango) ===");
const datosInvalidos = [
    { nombre: "Puente Estructural", puntaje: 105 }
];
console.log(evaluarRankingProyectos3D(datosInvalidos));