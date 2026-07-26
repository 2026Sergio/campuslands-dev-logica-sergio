const calcularProbabilidadVictoriaPingPong = (partidosGanadosJugador, totalPartidosJugados) => {
    if (typeof partidosGanadosJugador !== 'number' || typeof totalPartidosJugados !== 'number') {
        return { error: "Los datos de entrada deben ser valores numéricos válidos." };
    }

    if (totalPartidosJugados <= 0) {
        return { error: "El total de partidos jugados debe ser mayor a cero." };
    }

    if (partidosGanadosJugador < 0 || partidosGanadosJugador > totalPartidosJugados) {
        return { error: "El número de partidos ganados no puede ser negativo ni mayor al total de partidos." };
    }

    const probabilidadPorcentaje = (partidosGanadosJugador / totalPartidosJugados) * 100;
    const probabilidadDecimal = partidosGanadosJugador / totalPartidosJugados;

    let nivelProbabilidad = "Moderado";
    if (probabilidadPorcentaje >= 75) {
        nivelProbabilidad = "Alto / Favorito";
    } else if (probabilidadPorcentaje < 40) {
        nivelProbabilidad = "Bajo / En Riesgo";
    }

    return {
        partidos_ganados: partidosGanadosJugador,
        total_partidos: totalPartidosJugados,
        probabilidad_decimal: parseFloat(probabilidadDecimal.toFixed(4)),
        probabilidad_porcentaje: parseFloat(probabilidadPorcentaje.toFixed(2)) + "%",
        nivel_rendimiento: nivelProbabilidad,
        explicacion: "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong."
    };
};

const ganadosNormal = 14;
const totalNormal = 20;

const ganadosBorde = 0;
const totalBorde = 5;

console.log(calcularProbabilidadVictoriaPingPong(ganadosNormal, totalNormal));
console.log(calcularProbabilidadVictoriaPingPong(ganadosBorde, totalBorde));