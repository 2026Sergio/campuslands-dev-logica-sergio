function normalizarPuntajesSoldadura(evaluaciones, escalaMin = 0, escalaMax = 100) {
    // Validar que la lista de entrada no esté vacía
    if (!Array.isArray(evaluaciones) || evaluaciones.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar un listado válido de evaluaciones."
        };
    }

    // Identificar el valor mínimo y máximo de las evaluaciones crudas
    let minCrudo = Infinity;
    let maxCrudo = -Infinity;

    for (let i = 0; i < evaluaciones.length; i++) {
        const ev = evaluaciones[i];

        // Validación de datos dentro de cada objeto
        if (!ev || typeof ev.tecnico !== "string" || typeof ev.puntajeBruto !== "number") {
            return {
                error: true,
                mensaje: `Evaluación inválida encontrada en el índice ${i}.`
            };
        }

        if (ev.puntajeBruto < minCrudo) minCrudo = ev.puntajeBruto;
        if (ev.puntajeBruto > maxCrudo) maxCrudo = ev.puntajeBruto;
    }

    const resultadosNormalizados = [];

    // Iterar para aplicar la fórmula de normalización Feature Scaling / Min-Max
    for (let i = 0; i < evaluaciones.length; i++) {
        const ev = evaluaciones[i];
        let puntajeNorm = 0;

        // Si todos los puntajes son iguales, se asigna el valor máximo de la escala para evitar división por cero
        if (maxCrudo === minCrudo) {
            puntajeNorm = escalaMax;
        } else {
            // Fórmula: N = ((x - min) / (max - min)) * (escalaMax - escalaMin) + escalaMin
            const proporcion = (ev.puntajeBruto - minCrudo) / (maxCrudo - minCrudo);
            puntajeNorm = Number((proporcion * (escalaMax - escalaMin) + escalaMin).toFixed(2));
        }

        // Clasificación de la calidad del cordón de soldadura
        let nivelInspeccion = "";
        if (puntajeNorm >= 90) {
            nivelInspeccion = "Aprobado - Cordón Homogéneo (Sin Porosidades)";
        } else if (puntajeNorm >= 70) {
            nivelInspeccion = "Aprobado - Penetración Aceptable";
        } else {
            nivelInspeccion = "Rechazado - Requiere Pulido / Retrabajo";
        }

        resultadosNormalizados.push({
            tecnico: ev.tecnico,
            puntajeBruto: ev.puntajeBruto,
            puntajeNormalizado: puntajeNorm,
            clasificacion: nivelInspeccion
        });
    }

    return {
        total_evaluaciones: evaluaciones.length,
        rango_original: { minimo: minCrudo, maximo: maxCrudo },
        evaluaciones_normalizadas: resultadosNormalizados,
        explicacion: `Se normalizaron ${evaluaciones.length} pruebas de soldadura a la escala [${escalaMin}, ${escalaMax}] utilizando min-max scaling.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Inspección de Trazos de Soldadura) ===");
const pruebasNormales = [
    { tecnico: "Muestra A (MIG)", puntajeBruto: 45 },
    { tecnico: "Muestra B (TIG)", puntajeBruto: 85 },
    { tecnico: "Muestra C (Electrodo)", puntajeBruto: 65 },
    { tecnico: "Muestra D (Autógena)", puntajeBruto: 95 }
];
console.log(normalizarPuntajesSoldadura(pruebasNormales));

console.log("\n=== Caso Borde (Valores Idénticos - Evitar División por Cero) ===");
const pruebasIdenticas = [
    { tecnico: "Junta 1", puntajeBruto: 50 },
    { tecnico: "Junta 2", puntajeBruto: 50 }
];
console.log(normalizarPuntajesSoldadura(pruebasIdenticas));

console.log("\n=== Caso Entrada Inválida (Estructura Incorrecta) ===");
const pruebaInvalida = [
    { tecnico: "Junta Defectuosa", puntajeBruto: "no-numero" }
];
console.log(normalizarPuntajesSoldadura(pruebaInvalida));