function calcularPuntajePingpong(saquesRegistrados, bonoEfecto, penalizacionError) {
    if (saquesRegistrados.length === 0) {
        return 0;
    }

    let totalSaques = saquesRegistrados.length;
    let puntajeFinal = totalSaques + bonoEfecto - penalizacionError;

    return puntajeFinal;
}

// prueba flujo normal
let historialSaques = [12, 18, 25, 30];
console.log("Resultado Pingpong:", calcularPuntajePingpong(historialSaques, 8, 3)); // Esperado: 27

// pruebla caso borde
let setDecisivo = [1];
console.log("Resultado Pingpong Caso Borde:", calcularPuntajePingpong(setDecisivo, 2, 10)); // Esperado: -7
