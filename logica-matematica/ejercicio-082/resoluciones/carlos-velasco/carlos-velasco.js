// ejercicio logica - porcentajes y proporciones - Ejercicio 082

const calcularRendimientoFutbolSala = (partidosJugados, partidosGanados, golesAnotados, golesRecibidos) => {
    if (partidosJugados <= 0) {
        return { error: "El número de partidos jugados debe ser mayor a cero." };
    }

    // Cálculo del porcentaje de efectividad (victorias / partidos jugados)
    const porcentajeEfectividad = (partidosGanados / partidosJugados) * 100;

    // Cálculo de la proporción o diferencia de goles
    const diferenciaGoles = golesAnotados - golesRecibidos;

    // Clasificación según porcentaje de efectividad
    let categoria = "Regular";
    if (porcentajeEfectividad >= 80) {
        categoria = "Líder de Torneo";
    } else if (porcentajeEfectividad >= 50) {
        categoria = "Competitivo";
    }

    return {
        porcentaje_efectividad: `${porcentajeEfectividad.toFixed(2)}%`,
        diferencia_de_goles: diferenciaGoles,
        categoria_equipo: categoria,
        explicacion: "Se calculó el porcentaje de efectividad en base a los partidos ganados y la proporción de goles anotados frente a recibidos."
    };
};

const estadisticasNormales = { jugados: 10, ganados: 8, anotados: 35, recibidos: 15 };
const estadisticasBorde = { jugados: 5, ganados: 0, anotados: 2, recibidos: 18 };

console.log(calcularRendimientoFutbolSala(
    estadisticasNormales.jugados,
    estadisticasNormales.ganados,
    estadisticasNormales.anotados,
    estadisticasNormales.recibidos
));

console.log(calcularRendimientoFutbolSala(
    estadisticasBorde.jugados,
    estadisticasBorde.ganados,
    estadisticasBorde.anotados,
    estadisticasBorde.recibidos
));