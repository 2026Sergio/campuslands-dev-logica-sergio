function calcularPuntajeAnimacion3D(framesRender, bonoCalidad, penalizacionTiempo) {
    if (framesRender.length === 0) {
        return 0;
    }

    let totalFrames = framesRender.length;
    let puntajeFinal = totalFrames + bonoCalidad - penalizacionTiempo;

    return puntajeFinal;
}

// prueba flujo normal
let secuenciaAnimacion = [12, 18, 25, 30];
console.log("Resultado Animación 3D:", calcularPuntajeAnimacion3D(secuenciaAnimacion, 8, 3)); // esperado: 27

// prueba caso borde
let escenaEpica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Resultado Animación 3D Caso Borde:", calcularPuntajeAnimacion3D(escenaEpica, 20, 5)); // esperado: 25
