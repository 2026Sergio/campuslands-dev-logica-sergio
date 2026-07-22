function calcularPuntajeFutbolSala(golesRegistrados, bonoVictoria, penalizacionTarjetas) {
    if (golesRegistrados.length === 0) {
        return 0;
    }

    let partidosJugados = golesRegistrados.length;
    let puntajeFinal = partidosJugados + bonoVictoria - penalizacionTarjetas;

    return puntajeFinal;
}

// prueba flujo normal
let jornadasLiga = [12, 18, 25, 30];
console.log("Resultado Fútbol Sala:", calcularPuntajeFutbolSala(jornadasLiga, 8, 3)); // esperado: 27

// prueba coas borde
let partidoTenso = [2];
console.log("Resultado Fútbol Sala Caso Borde:", calcularPuntajeFutbolSala(partidoTenso, 5, 20)); // esperado: -14
e