const JugadoresPingPong = [
    { nombre: "Ma Long", rankingMundial: 1, partidosJugados: 500, partidosGanados: 450, efectividadSaque: 0.85 },
    { nombre: "Fan Zhendong", rankingMundial: 2, partidosJugados: 400, partidosGanados: 360, efectividadSaque: 0.88 },
    { nombre: "Truls Moregard", rankingMundial: 10, partidosJugados: 250, partidosGanados: 180, efectividadSaque: 0.75 },
    { nombre: "Hugo Calderano", rankingMundial: 6, partidosJugados: 300, partidosGanados: 230, efectividadSaque: 0.80 },
    { nombre: "Tomokazu Harimoto", rankingMundial: 4, partidosJugados: 350, partidosGanados: 270, efectividadSaque: 0.82 }
];

let mejorJugador = JugadoresPingPong[0];

let calcular_probabilidad_victoria = (jugador) => {
    let porcentajeHistorial = (jugador.partidosGanados / (jugador.partidosJugados > 0 ? jugador.partidosJugados : 1)) * 100;
    let factorRanking = (50 - jugador.rankingMundial) * 5;
    let factorSaque = jugador.efectividadSaque * 100;
    return porcentajeHistorial + factorRanking + factorSaque;
};

if (JugadoresPingPong.length === 0) {
    console.log("No hay jugadores de pingpong registrados para calcular la probabilidad.");
} else {
    JugadoresPingPong.forEach((jugador) => {
        if (calcular_probabilidad_victoria(jugador) > calcular_probabilidad_victoria(mejorJugador)) {
            mejorJugador = jugador;
        }
    });
    console.log(`El jugador de pingpong con la mejor probabilidad de victoria estimada es ${mejorJugador.nombre}`);
}