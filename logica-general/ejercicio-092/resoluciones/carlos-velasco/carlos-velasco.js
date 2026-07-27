const compararOpcionesTorneoPingPong = (jugadores) => {
    if (!jugadores || !Array.isArray(jugadores) || jugadores.length === 0) {
        return { error: "La lista de jugadores de ping pong está vacía o no es válida." };
    }

    let mejorJugador = jugadores[0];
    let comparacionesRealizadas = [];

    for (let i = 1; i < jugadores.length; i++) {
        const oponente = jugadores[i];
        let resultadoComparacion = "";

        if (oponente.partidosGanados > mejorJugador.partidosGanados) {
            resultadoComparacion = `${oponente.nombre} supera a ${mejorJugador.nombre} en partidos ganados.`;
            mejorJugador = oponentes = oponente; // Actualiza el mejor
        } else if (oponente.partidosGanados === mejorJugador.partidosGanados) {
            if (oponente.setsFavor > mejorJugador.setsFavor) {
                resultadoComparacion = `${oponente.nombre} empata en partidos pero supera a ${mejorJugador.nombre} en sets a favor.`;
                mejorJugador = oponentes = oponente;
            } else {
                resultadoComparacion = `${mejorJugador.nombre} mantiene la ventaja frente a ${oponente.nombre}.`;
            }
        } else {
            resultadoComparacion = `${mejorJugador.nombre} mantiene la ventaja frente a ${oponente.nombre}.`;
        }

        comparacionesRealizadas.push({
            comparacion_index: i,
            detalle: resultadoComparacion
        });
    }

    return {
        ganador_opcion_optima: mejorJugador,
        total_opciones_comparadas: jugadores.length,
        historial_comparaciones: comparacionesRealizadas,
        explicacion: "Se compararon las opciones de los jugadores de ping pong mediante condicionales iterativos evaluando partidos ganados y desempates por sets a favor para encontrar el perfil óptimo del torneo."
    };
};

const jugadoresNormales = [
    { nombre: "Alejandro Meza", partidosGanados: 5, setsFavor: 15 },
    { nombre: "Sofía Vargas", partidosGanados: 6, setsFavor: 18 },
    { nombre: "Mateo Rincón", partidosGanados: 4, setsFavor: 12 }
];

const jugadoresBorde = [
    { nombre: "Jugador Único", partidosGanados: 3, setsFavor: 9 }
];

console.log(compararOpcionesTorneoPingPong(jugadoresNormales));
console.log(compararOpcionesTorneoPingPong(jugadoresBorde));