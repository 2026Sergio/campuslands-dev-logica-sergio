function calcularPuntajeQuimica(reactivosGramos, bonoEstabilidad, penalizacionImpureza) {
    if (reactivosGramos.length === 0) {
        return 0;
    }

    let totalMezclas = reactivosGramos.length;
    let puntajeFinal = totalMezclas + bonoEstabilidad - penalizacionImpureza;

    return puntajeFinal;
}

// Prueba flujo normal
let laboratorio = [12, 18, 25, 30];
console.log("Resultado Química:", calcularPuntajeQuimica(laboratorio, 8, 3)); // Esperado: 27

// prueba caso borde
let sinReactivos = [];
console.log("Resultado Química Caso Borde:", calcularPuntajeQuimica(sinReactivos, 20, 10)); // Esperado: 0