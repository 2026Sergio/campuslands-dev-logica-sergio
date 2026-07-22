function calcularPuntajeParacaidismo(alturasLanzamiento, bonoViento, penalizacionDesvio) {
    if (alturasLanzamiento.length === 0) {
        return 0;
    }

    let totalSaltos = alturasLanzamiento.length;
    let puntajeFinal = totalSaltos + bonoViento - penalizacionDesvio;

    return puntajeFinal;
}

// prueba flujo normal
let registrosSaltos = [12, 18, 25, 30];
console.log("Resultado Paracaidismo:", calcularPuntajeParacaidismo(registrosSaltos, 8, 3)); // esperado: 27

// prueba caso borde
let saltoRecord = [4000];
console.log("Resultado Paracaidismo Caso Borde:", calcularPuntajeParacaidismo(saltoRecord, 500, 200)); // esperado: 301