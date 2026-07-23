function calcularEfectividadFutbolSala(partidosGanados, partidosEmpatados, partidosJugados) {
    // Validar que las entradas sean números enteros válidos y no negativos
    if (
        typeof partidosGanados !== "number" || 
        typeof partidosEmpatados !== "number" || 
        typeof partidosJugados !== "number" ||
        !Number.isInteger(partidosGanados) || partidosGanados < 0 ||
        !Number.isInteger(partidosEmpatados) || partidosEmpatados < 0 ||
        !Number.isInteger(partidosJugados) || partidosJugados <= 0
    ) {
        return {
            error: true,
            mensaje: "Las entradas deben ser números enteros mayores o iguales a cero, y los partidos jugados deben ser mayores a cero."
        };
    }

    // Validar coherencia lógica (la suma de ganados y empatados no puede superar los jugados)
    if ((partidosGanados + partidosEmpatados) > partidosJugados) {
        return {
            error: true,
            mensaje: "La suma de partidos ganados y empatados no puede superar el total de partidos jugados."
        };
    }

    // Sistema estándar de puntos: 3 por victoria, 1 por empate
    const puntosObtenidos = (partidosGanados * 3) + (partidosEmpatados * 1);
    const puntosMaximosPosibles = partidosJugados * 3;

    // Proporción y porcentaje de efectividad
    const porcentajeEfectividad = Number(((puntosObtenidos / puntosMaximosPosibles) * 100).toFixed(2));

    // Clasificación en el ranking de la liga
    let nivelRanking = "";
    if (porcentajeEfectividad >= 75) {
        nivelRanking = "Líder de Liga (Puestos de Clasificación Directa)";
    } else if (porcentajeEfectividad >= 50) {
        nivelRanking = "Zona Media (Competitivo en Lucha por Play-offs)";
    } else {
        nivelRanking = "Zona Baja (Riesgo de Descenso)";
    }

    return {
        partidos_jugados: partidosJugados,
        puntos_obtenidos: puntosObtenidos,
        puntos_maximos: puntosMaximosPosibles,
        efectividad_porcentaje: porcentajeEfectividad,
        clasificacion: nivelRanking,
        explicacion: `El equipo obtuvo ${puntosObtenidos} de ${puntosMaximosPosibles} puntos posibles en ${partidosJugados} partidos (${porcentajeEfectividad}% de efectividad).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularEfectividadFutbolSala(7, 2, 10);
console.log(caso1);

console.log("\n=== Caso Borde (Rendimiento Perfecto) ===");
const caso2 = calcularEfectividadFutbolSala(5, 0, 5);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Partidos incoherentes) ===");
const caso3 = calcularEfectividadFutbolSala(8, 5, 10);
console.log(caso3);