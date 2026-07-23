function calcularPuntajeCompetitivo(jugadoresPorPartida, bonoVictoria, penalizacionDerrota) {
    if (jugadoresPorPartida.length === 0) {
        return 0;
    }

    let totalJugadores = jugadoresPorPartida.length;
    
    let puntajeFinal = totalJugadores + bonoVictoria - penalizacionDerrota;
    
    return puntajeFinal;
}

// pruebas
let partidaNormal = [12, 18, 25, 30];
let bonoNormal = 8;
let penalizacionNormal = 3;
console.log("Resultado Ejemplo:", calcularPuntajeCompetitivo(partidaNormal, bonoNormal, penalizacionNormal)); // Esperado: 27

// Prueba caso borde
let partidaVacia = [];
console.log("Resultado Caso Borde:", calcularPuntajeCompetitivo(partidaVacia, 5, 2)); // Esperado: 0