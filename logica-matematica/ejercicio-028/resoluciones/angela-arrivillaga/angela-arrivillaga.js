function calcularPuntajeCienciaFiccion(votosCritica, bonoEfectos, penalizacionGuion) {
    if (votosCritica.length === 0) {
        return 0;
    }

    let cantidadResenas = votosCritica.length;
    let puntajeFinal = cantidadResenas + bonoEfectos - penalizacionGuion;

    return puntajeFinal;
}

// prueba flujo normal
let calificacionesPeli = [12, 18, 25, 30];
console.log("Resultado Ciencia Ficción:", calcularPuntajeCienciaFiccion(calificacionesPeli, 8, 3)); // Esperado: 27

// prueba caso borde
let estrenoFallido = [8];
console.log("Resultado Ciencia Ficción Caso Borde:", calcularPuntajeCienciaFiccion(estrenoFallido, 1, 40)); // Esperado: -38
