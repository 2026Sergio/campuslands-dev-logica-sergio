function calcularPuntajeAnimacion(fotogramasClave, bonoRender, penalizacionRuido) {
    if (fotogramasClave.length === 0) {
        return 0;
    }

    let cantidadEscenas = fotogramasClave.length;
    let puntajeFinal = cantidadEscenas + bonoRender - penalizacionRuido;

    return puntajeFinal;
}

// preuba
let lineaTiempo = [12, 18, 25, 30];
console.log("Resultado Animación 3D:", calcularPuntajeAnimacion(lineaTiempo, 8, 3)); // Esperado: 27

// prueba caso borde
let sinEscenas = [];
console.log("Resultado Animación 3D Caso Borde:", calcularPuntajeAnimacion(sinEscenas, 10, 5)); // esperado: 0
