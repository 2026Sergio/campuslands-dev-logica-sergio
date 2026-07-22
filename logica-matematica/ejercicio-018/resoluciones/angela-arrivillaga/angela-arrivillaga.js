function calcularPuntajeSoldadura(puntosUnion, bonoGrosor, penalizacionPorosidad) {
    if (puntosUnion.length === 0) {
        return 0;
    }

    let totalPiezas = puntosUnion.length;
    let puntajeFinal = totalPiezas + bonoGrosor - penalizacionPorosidad;

    return puntajeFinal;
}

// prueba flujo normal
let controlCalidad = [12, 18, 25, 30];
console.log("Resultado Soldadura:", calcularPuntajeSoldadura(controlCalidad, 8, 3)); // Esperado: 27

// prueba caso borde
let muchasPiezas = [1, 2, 3, 4, 5, 6];
console.log("Resultado Soldadura Caso Borde:", calcularPuntajeSoldadura(muchasPiezas, 4, 4)); // Esperado: 6

