function calcularPuntajeRankingFutbol(golesPorPartido, bonoTabla, penalizacionFalta) {
    if (golesPorPartido.length === 0) {
        return 0;
    }

    let totalPartidos = golesPorPartido.length;
    
    let puntajeFinal = totalPartidos + bonoTabla - penalizacionFalta;
    
    return puntajeFinal;
}

// prueba
let partidosJugados = [2, 1, 4, 3];
console.log("Resultado Ranking:", calcularPuntajeRankingFutbol(partidosJugados, 8, 3)); // Esperado: 27

// prueba caso borde
let partidosPocos = [1];
console.log("Resultado Ranking Caso Borde:", calcularPuntajeRankingFutbol(partidosPocos, 1, 10)); // Esperado: -8