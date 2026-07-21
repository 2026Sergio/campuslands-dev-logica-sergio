function calcularProbabilidadVictoriaPingPong(saquesEfectivos, saquesFallados, puntosPistaEfectivos, puntosPistaFallados) {
    // Validar que los datos de entrada sean números enteros no negativos
    if (
        typeof saquesEfectivos !== "number" || saquesEfectivos < 0 || !Number.isInteger(saquesEfectivos) ||
        typeof saquesFallados !== "number" || saquesFallados < 0 || !Number.isInteger(saquesFallados) ||
        typeof puntosPistaEfectivos !== "number" || puntosPistaEfectivos < 0 || !Number.isInteger(puntosPistaEfectivos) ||
        typeof puntosPistaFallados !== "number" || puntosPistaFallados < 0 || !Number.isInteger(puntosPistaFallados)
    ) {
        return {
            error: true,
            mensaje: "Todas las métricas de jugadas deben ser números enteros mayores o iguales a cero."
        };
    }

    const totalSaques = saquesEfectivos + saquesFallados;
    const totalPistas = puntosPistaEfectivos + puntosPistaFallados;
    const totalPuntosJugados = totalSaques + totalPistas;

    // Evitar división por cero si no se registraron puntos
    if (totalPuntosJugados === 0) {
        return {
            error: true,
            mensaje: "El total de puntos jugados debe ser mayor a cero para calcular probabilidades."
        };
    }

    // Regla de Laplace: Casos Favorables / Casos Totales
    const probabilidadSaqueEfectivo = totalSaques > 0 ? saquesEfectivos / totalSaques : 0;
    const probabilidadPistaEfectiva = totalPistas > 0 ? puntosPistaEfectivos / totalPistas : 0;

    const puntosFavorablesTotales = saquesEfectivos + puntosPistaEfectivos;
    const probabilidadVictoriaGlobal = puntosFavorablesTotales / totalPuntosJugados;

    // Convertir a porcentajes formateados a 2 decimales
    const porcentajeSaque = Number((probabilidadSaqueEfectivo * 100).toFixed(2));
    const porcentajePista = Number((probabilidadPistaEfectiva * 100).toFixed(2));
    const porcentajeVictoria = Number((probabilidadVictoriaGlobal * 100).toFixed(2));

    // Clasificación del rendimiento probabilístico
    let nivelExpectativa = "";
    if (porcentajeVictoria >= 70) {
        nivelExpectativa = "Alta Probabilidad de Victoria (Rendimiento Dominante)";
    } else if (porcentajeVictoria >= 50) {
        nivelExpectativa = "Probabilidad Moderada (Partido Competitivo)";
    } else {
        nivelExpectativa = "Baja Probabilidad de Victoria (Requiere Ajuste Técnico)";
    }

    return {
        total_puntos_jugados: totalPuntosJugados,
        puntos_favorables: puntosFavorablesTotales,
        probabilidad_saque_efectivo: `${porcentajeSaque}%`,
        probabilidad_pista_efectiva: `${porcentajePista}%`,
        probabilidad_victoria_global: `${porcentajeVictoria}%`,
        clasificacion: nivelExpectativa,
        explicacion: `De ${totalPuntosJugados} puntos jugados, se ganaron ${puntosFavorablesTotales} (${porcentajeVictoria}% de probabilidad de éxito). Categoría: ${nivelExpectativa}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularProbabilidadVictoriaPingPong(12, 4, 18, 6);
console.log(caso1);

console.log("\n=== Caso Borde (Rendimiento Perfecto / 100% Éxito) ===");
const caso2 = calcularProbabilidadVictoriaPingPong(10, 0, 15, 0);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Valores negativos) ===");
const caso3 = calcularProbabilidadVictoriaPingPong(-5, 2, 10, 4);
console.log(caso3);