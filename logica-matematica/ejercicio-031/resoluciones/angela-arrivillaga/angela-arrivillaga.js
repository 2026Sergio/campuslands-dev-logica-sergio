function calcularPuntajeKickboxing(combinacionesGolpes, bonoTecnica, penalizacionBloqueo) {
    if (combinacionesGolpes.length === 0) {
        return 0;
    }

    let totalCombinaciones = combinacionesGolpes.length;
    let puntajeFinal = totalCombinaciones + bonoTecnica - penalizacionBloqueo;

    return puntajeFinal;
}

// prueba flujo normal
let roundsKickboxing = [12, 18, 25, 30];
console.log("Resultado Kickboxing:", calcularPuntajeKickboxing(roundsKickboxing, 8, 3)); // Esperado: 27

// prueba caso borde
let combateRapido = [10, 20];
console.log("Resultado Kickboxing Caso Borde:", calcularPuntajeKickboxing(combateRapido, 0, 0)); // Esperado: 2
