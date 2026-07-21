function calcularRankingFutbolSala(estadisticas) {
    // 1. Validar objeto de entrada
    if (!estadisticas || typeof estadisticas !== 'object') {
        return {
            puntos_totales: 0,
            efectividad: 0,
            clasificacion: "inválido",
            explicacion: "No se proporcionaron las estadísticas del equipo."
        };
    }

    const { jugados, ganados, empatados, perdidos, golesFavor, golesContra } = estadisticas;

    // Validar números y coherencia de partidos
    if (typeof jugados !== 'number' || jugados <= 0 ||
        typeof ganados !== 'number' || ganados < 0 ||
        typeof empatados !== 'number' || empatados < 0 ||
        typeof perdidos !== 'number' || perdidos < 0 ||
        (ganados + empatados + perdidos !== jugados)) {
        return {
            puntos_totales: 0,
            efectividad: 0,
            clasificacion: "inválido",
            explicacion: "Los datos de partidos jugados no son coherentes o son inválidos."
        };
    }

    // 2. Calcular puntos y proporciones
    const puntosObtenidos = (ganados * 3) + (empatados * 1);
    const puntosMaximos = jugados * 3;
    const porcentajeEfectividad = Number(((puntosObtenidos / puntosMaximos) * 100).toFixed(2));
    const diferenciaGoles = (golesFavor || 0) - (golesContra || 0);

    // 3. Clasificar rendimiento
    let clasificacion = "";
    if (porcentajeEfectividad >= 75) {
        clasificacion = "lider";
    } else if (porcentajeEfectividad >= 45) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "en riesgo";
    }

    return {
        puntos_totales: puntosObtenidos,
        efectividad: porcentajeEfectividad,
        diferencia_goles: diferenciaGoles,
        clasificacion: clasificacion,
        explicacion: `Equipo obtuvo ${puntosObtenidos} de ${puntosMaximos} pts posibles (${porcentajeEfectividad}% de efectividad).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularRankingFutbolSala({
    jugados: 10,
    ganados: 7,
    empatados: 2,
    perdidos: 1,
    golesFavor: 25,
    golesContra: 12
});
console.log(caso1);

console.log("\n=== Caso Borde (Datos incoherentes) ===");
const caso2 = calcularRankingFutbolSala({
    jugados: 5,
    ganados: 4,
    empatados: 2,
    perdidos: 1, // 4+2+1 = 7 != 5
    golesFavor: 10,
    golesContra: 10
});
console.log(caso2);