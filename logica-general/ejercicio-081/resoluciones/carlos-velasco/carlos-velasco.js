// ejercicio logica - clasificacion por reglas - Ejercicio 081

const clasificarJugadorCompetitivo = (estadisticas) => {
    if (!estadisticas || typeof estadisticas.kda !== 'number' || typeof estadisticas.winrate !== 'number') {
        return { error: "Datos de entrada incompletos o inválidos para la clasificación." };
    }

    let rango = "Bronce";

    // Reglas de clasificación competitiva
    if (estadisticas.kda >= 3.5 && estadisticas.winrate >= 65) {
        rango = "Gran Maestro";
    } else if (estadisticas.kda >= 2.5 && estadisticas.winrate >= 55) {
        rango = "Diamante";
    } else if (estadisticas.kda >= 1.5 && estadisticas.winrate >= 50) {
        rango = "Oro";
    } else {
        rango = "Plata / Bronce";
    }

    return {
        kda: estadisticas.kda,
        winrate: `${estadisticas.winrate}%`,
        rango_asignado: rango,
        explicacion: "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo."
    };
};

const jugadorPro = { kda: 4.2, winrate: 70 };
const jugadorBorde = { kda: 1.0, winrate: 45 };

console.log(clasificarJugadorCompetitivo(jugadorPro));
console.log(clasificarJugadorCompetitivo(jugadorBorde));