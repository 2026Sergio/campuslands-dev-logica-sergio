function calcularPuntajeCompetitivo(puntajesBase, bonoEstandard = 10, penalizacion = 5) {
    // 1. Validar entradas
    if (!Array.isArray(puntajesBase) || puntajesBase.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "inválido",
            explicacion: "La lista de puntajes debe ser un arreglo no vacío."
        };
    }

    const puntajesAjustados = [];
    let sumaPuntajes = 0;

    // 2. Procesar cada puntaje con reglas aritméticas controladas
    for (let i = 0; i < puntajesBase.length; i++) {
        const p = puntajesBase[i];

        if (typeof p !== 'number' || isNaN(p) || p < 0) {
            return {
                puntaje_final: 0,
                clasificacion: "inválido",
                explicacion: "Se encontraron puntajes inválidos (deben ser números mayores o iguales a 0)."
            };
        }

        let puntajeCalculado = p;

        if (p < 50) {
            // Penalización controlada
            puntajeCalculado = Math.max(0, p - penalizacion);
        } else if (p <= 100) {
            // Bono estándar
            puntajeCalculado = p + bonoEstandard;
        } else {
            // Multiplicador alto rendimiento (1.2x)
            puntajeCalculado = Math.round(p * 1.2);
        }

        puntajesAjustados.push(puntajeCalculado);
        sumaPuntajes += puntajeCalculado;
    }

    // 3. Calcular promedio final
    const promedioFinal = Math.round(sumaPuntajes / puntajesBase.length);

    // 4. Clasificar rendimiento
    let clasificacion = "";
    if (promedioFinal >= 100) {
        clasificacion = "elite";
    } else if (promedioFinal >= 60) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        puntajes_ajustados: puntajesAjustados,
        puntaje_final: promedioFinal,
        clasificacion: clasificacion,
        explicacion: `Se procesaron ${puntajesBase.length} partidas. Promedio ajustado: ${promedioFinal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPuntajeCompetitivo([40, 60, 85, 120]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores inválidos) ===");
const caso2 = calcularPuntajeCompetitivo([50, -10, "100"]);
console.log(caso2);