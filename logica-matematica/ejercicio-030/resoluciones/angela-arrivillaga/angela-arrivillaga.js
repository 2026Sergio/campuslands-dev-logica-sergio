function calcularPuntajeTurismo(destinosVisitados, bonoTemporada, penalizacionCancelacion) {
    if (destinosVisitados.length === 0) {
        return 0;
    }

    let totalViajes = destinosVisitados.length;
    let puntajeFinal = totalViajes + bonoTemporada - penalizacionCancelacion;

    return puntajeFinal;
}

// prueba flujo normal
let itinerarioAño = [12, 18, 25, 30];
console.log("Resultado Viajes y Turismo:", calcularPuntajeTurismo(itinerarioAño, 8, 3)); // Esperado: 27

// prueba caso borde
let viajePerfecto = [5, 6, 7];
console.log("Resultado Viajes y Turismo Caso Borde:", calcularPuntajeTurismo(viajePerfecto, 12, 0)); // Esperado: 15