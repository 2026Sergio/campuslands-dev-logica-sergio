function calcularPuntajeSoldadura(cordonesInspeccionados, bonoPrecision, penalizacionPorosidad) {
    if (cordonesInspeccionados.length === 0) {
        return 0;
    }

    let totalCordones = cordonesInspeccionados.length;
    let puntajeFinal = totalCordones + bonoPrecision - penalizacionPorosidad;

    return puntajeFinal;
}

// prueba flujo noraml
let pruebaEstructural = [12, 18, 25, 30];
console.log("Resultado Soldadura:", calcularPuntajeSoldadura(pruebaEstructural, 8, 3)); // esperado: 27

// prueba caso borde
let tuberiaPresion = [50];
console.log("Resultado Soldadura Caso Borde:", calcularPuntajeSoldadura(tuberiaPresion, 5, 45)); // Esperado: -39
