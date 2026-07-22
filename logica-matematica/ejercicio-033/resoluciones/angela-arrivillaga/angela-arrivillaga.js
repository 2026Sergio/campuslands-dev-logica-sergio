function calcularPuntajeParacaidismo(saltosUbicacion, bonoViento, penalizacionDesviacion) {
    if (saltosUbicacion.length === 0) {
        return 0;
    }

    let totalSaltos = saltosUbicacion.length;
    let puntajeFinal = totalSaltos + bonoViento - penalizacionDesviacion;

    return puntajeFinal;
}

// prueba flujo normal
let zonaAterrizaje = [12, 18, 25, 30];
console.log("Resultado Paracaidismo:", calcularPuntajeParacaidismo(zonaAterrizaje, 8, 3)); // Esperado: 27

// prueba caso borde
let diaNublado = [];
console.log("Resultado Paracaidismo Caso Borde:", calcularPuntajeParacaidismo(diaNublado, 15, 2)); // Esperado: 0
