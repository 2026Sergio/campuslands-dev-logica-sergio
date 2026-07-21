function normalizarPuntajesSoldadura(puntajes, puntajeMaximoPosible) {
    // Validar que la entrada sea un arreglo no vacío y que el máximo sea mayor a cero
    if (!Array.isArray(puntajes) || puntajes.length === 0 || typeof puntajeMaximoPosible !== "number" || puntajeMaximoPosible <= 0) {
        return {
            error: true,
            mensaje: "Entradas inválidas. Se requiere una lista de puntajes y un valor máximo mayor a cero."
        };
    }

    // Validar que todos los puntajes sean números válidos dentro del rango de 0 al máximo
    for (let i = 0; i < puntajes.length; i++) {
        if (typeof puntajes[i] !== "number" || puntajes[i] < 0 || puntajes[i] > puntajeMaximoPosible) {
            return {
                error: true,
                mensaje: "Cada puntaje debe ser un número entre 0 y el puntaje máximo posible."
            };
        }
    }

    // Convertir cada puntaje a una escala de 0 a 100 (normalización)
    const puntajesNormalizados = [];
    let sumaNormalizada = 0;

    for (let i = 0; i < puntajes.length; i++) {
        const valorNormalizado = Number(((puntajes[i] / puntajeMaximoPosible) * 100).toFixed(2));
        puntajesNormalizados.push(valorNormalizado);
        sumaNormalizada += valorNormalizado;
    }

    const promedioNormalizado = Number((sumaNormalizada / puntajes.length).toFixed(2));

    // Clasificación de la calidad de la soldadura técnica
    let calidadGeneral = "";
    if (promedioNormalizado >= 85) {
        calidadGeneral = "Soldadura de Alta Calidad (Resistencia Estructural)";
    } else if (promedioNormalizado >= 70) {
        calidadGeneral = "Soldadura Aceptable (Uso Estándar)";
    } else {
        calidadGeneral = "Soldadura Deficiente (Requiere Inspección y Pulido)";
    }

    return {
        total_evaluaciones: puntajes.length,
        escaza_maxima: puntajeMaximoPosible,
        puntajes_normalizados: puntajesNormalizados,
        promedio_normalizado: promedioNormalizado,
        clasificacion: calidadGeneral,
        explicacion: `Se normalizaron ${puntajes.length} evaluaciones a escala 0-100. Promedio general: ${promedioNormalizado}%.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = normalizarPuntajesSoldadura([40, 45, 30, 50], 50);
console.log(caso1);

console.log("\n=== Caso Borde (Puntaje Perfecto) ===");
const caso2 = normalizarPuntajesSoldadura([100], 100);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Puntaje fuera de escala) ===");
const caso3 = normalizarPuntajesSoldadura([150], 100);
console.log(caso3);