function calcularPuntajeDibujoDigital(trazosRegistrados, bonoVelocidad, penalizacionCorreccion) {
    if (trazosRegistrados.length === 0) {
        return 0;
    }

    let totalTrazos = trazosRegistrados.length;
    let puntajeFinal = totalTrazos + bonoVelocidad - penalizacionCorreccion;

    return puntajeFinal;
}

// prueba flujo normal
let canvasEstudio = [12, 18, 25, 30];
console.log("Resultado Dibujo Digital:", calcularPuntajeDibujoDigital(canvasEstudio, 8, 3)); // Esperado: 27

// prueba caso borde
let lienzoEnBlanco = [];
console.log("Resultado Dibujo Digital Caso Borde:", calcularPuntajeDibujoDigital(lienzoEnBlanco, 5, 1)); // Esperado: 0
