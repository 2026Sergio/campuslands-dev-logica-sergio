function normalizarPuntajesSoldadura(puntajes) {
    // 1. Validar caso borde: arreglo vacío, no válido o con datos no numéricos
    if (!Array.isArray(puntajes) || puntajes.length === 0 || 
        !puntajes.every(p => typeof p === 'number' && !isNaN(p) && p >= 0)) {
        return {
            puntajes_normalizados: [],
            promedio_normalizado: 0,
            clasificacion: "inválido",
            explicacion: "El listado de puntajes debe ser un arreglo no vacío con números válidos."
        };
    }

    const minimo = Math.min(...puntajes);
    const maximo = Math.max(...puntajes);

    // Validar división por cero si todos los valores son iguales
    if (maximo === minimo) {
        return {
            puntajes_normalizados: [],
            promedio_normalizado: 0,
            clasificacion: "inválido",
            explicacion: "No se puede normalizar un conjunto con un solo valor o con valores idénticos."
        };
    }

    // 2. Aplicar normalización Min-Max
    const puntajesNormalizados = [];
    let suma = 0;

    for (let i = 0; i < puntajes.length; i++) {
        const valorNormalizado = Number((((puntajes[i] - minimo) / (maximo - minimo)) * 100).toFixed(2));
        puntajesNormalizados.push(valorNormalizado);
        suma += valorNormalizado;
    }

    const promedioNormalizado = Number((suma / puntajesNormalizados.length).toFixed(2));

    // 3. Clasificar calidad de la soldadura
    let clasificacion = "";
    if (promedioNormalizado >= 80) {
        clasificacion = "excelente";
    } else if (promedioNormalizado >= 50) {
        clasificacion = "aceptable";
    } else {
        clasificacion = "deficiente";
    }

    return {
        puntajes_normalizados: puntajesNormalizados,
        promedio_normalizado: promedioNormalizado,
        clasificacion: clasificacion,
        explicacion: `Se normalizaron ${puntajes.length} puntajes de soldadura a escala 0-100. Promedio: ${promedioNormalizado}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = normalizarPuntajesSoldadura([150, 200, 300, 250, 400]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores iguales) ===");
const caso2 = normalizarPuntajesSoldadura([100, 100, 100]);
console.log(caso2);