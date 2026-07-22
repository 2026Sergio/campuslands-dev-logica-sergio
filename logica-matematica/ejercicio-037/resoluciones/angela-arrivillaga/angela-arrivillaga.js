function calcularPuntajeArquitectura3D(planosModelados, bonoDetalle, penalizacionRevision) {
    if (planosModelados.length === 0) {
        return 0;
    }

    let totalPlanos = planosModelados.length;
    let puntajeFinal = totalPlanos + bonoDetalle - penalizacionRevision;

    return puntajeFinal;
}

// prueba flujo normal
let proyectoEdificio = [12, 18, 25, 30];
console.log("Resultado Arquitectura 3D:", calcularPuntajeArquitectura3D(proyectoEdificio, 8, 3)); // esperado: 27

// prueba caso borde
let fasePendiente = [];
console.log("Resultado Arquitectura 3D Caso Borde:", calcularPuntajeArquitectura3D(fasePendiente, 10, 2)); // esperado: 0
