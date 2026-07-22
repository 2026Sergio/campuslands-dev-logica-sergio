function calcularPuntajePingPong(serviciosEfectivos, bonoSet, penalizacionFalla) {
    if (serviciosEfectivos.length === 0) {
        return 0;
    }

    let cantidadJugadores = serviciosEfectivos.length;
    let puntajeFinal = cantidadJugadores + bonoSet - penalizacionFalla;

    return puntajeFinal;
}

// prueba
let torneoPingPong = [12, 18, 25, 30];
console.log("Resultado Pingpong:", calcularPuntajePingPong(torneoPingPong, 8, 3)); // Esperado: 27

// prueba caso borde
let juegoLimpio = [10, 15];
console.log("Resultado Pingpong Caso Borde:", calcularPuntajePingPong(juegoLimpio, 0, 0)); // Esperado: 2
