function calcularPuntajeKickboxing(peleadoresInscritos, bonoNivel, penalizacionFalta) {
    if (peleadoresInscritos.length === 0) {
        return 0;
    }

    let totalPeleadores = peleadoresInscritos.length;
    let puntajeFinal = totalPeleadores + bonoNivel - penalizacionFalta;

    return puntajeFinal;
}

// prueba
let categoriaWelte = [12, 18, 25, 30];
console.log("Resultado Kickboxing:", calcularPuntajeKickboxing(categoriaWelte, 8, 3)); // Esperado: 27

// prueba caso borde
let pocosPeleadores = [22];
console.log("Resultado Kickboxing Caso Borde:", calcularPuntajeKickboxing(pocosPeleadores, 2, 15)); // Esperado: -12
