function calcularPuntajeHiperdeportivos(pruebasVelocidad, bonoAerodinamica, penalizacionPeso) {
    if (pruebasVelocidad.length === 0) {
        return 0;
    }

    let totalModelos = pruebasVelocidad.length;
    let puntajeFinal = totalModelos + bonoAerodinamica - penalizacionPeso;

    return puntajeFinal;
}

// prueba flujo normal
let testPista = [12, 18, 25, 30];
console.log("Resultado Hiperdeportivos:", calcularPuntajeHiperdeportivos(testPista, 8, 3)); // esperado: 27

// prueba caso borde
let autoEnTaller = [];
console.log("Resultado Hiperdeportivos Caso Borde:", calcularPuntajeHiperdeportivos(autoEnTaller, 15, 5)); // esperado: 0

