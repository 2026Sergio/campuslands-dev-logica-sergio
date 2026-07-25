const JugadoresPingPong = [
    { nombre: "Ma Long", velocidadReflejosMs: 120, precisionSmash: 92, nivelResistencia: 88 },
    { nombre: "Fan Zhendong", velocidadReflejosMs: 115, precisionSmash: 95, nivelResistencia: 90 },
    { nombre: "Truls Moregard", velocidadReflejosMs: 130, precisionSmash: 89, nivelResistencia: 85 },
    { nombre: "Hugo Calderano", velocidadReflejosMs: 125, precisionSmash: 90, nivelResistencia: 92 },
    { nombre: "Tomokazu Harimoto", velocidadReflejosMs: 118, precisionSmash: 91, nivelResistencia: 87 }
];

let mejorJugador = JugadoresPingPong[0];

let comparar_opciones_jugador = (jugador) => {
    let factorReflejos = (200 - jugador.velocidadReflejosMs) * 2;
    let factorSmash = jugador.precisionSmash * 3;
    let factorResistencia = jugador.nivelResistencia * 1.5;
    return factorReflejos + factorSmash + factorResistencia;
};

if (JugadoresPingPong.length === 0) {
    console.log("No hay jugadores de pingpong registrados para realizar la comparación de opciones.");
} else {
    JugadoresPingPong.forEach((jugador) => {
        if (comparar_opciones_jugador(jugador) > comparar_opciones_jugador(mejorJugador)) {
            mejorJugador = jugador;
        }
    });
    console.log(`El jugador de pingpong con la mejor puntuación tras comparar las opciones es ${mejorJugador.nombre}`);
}