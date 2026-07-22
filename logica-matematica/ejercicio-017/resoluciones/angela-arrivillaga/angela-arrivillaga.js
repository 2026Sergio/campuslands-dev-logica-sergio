function calcularPuntajeArquitectura(planosCargados, bonoEscala, penalizacionEstructura) {
    if (planosCargados.length === 0) {
        return 0;
    }

    let cantidadProyectos = planosCargados.length;
    let puntajeFinal = cantidadProyectos + bonoEscala - penalizacionEstructura;

    return puntajeFinal;
}

// prueba flujo normal
let portafolioPlanos = [12, 18, 25, 30];
console.log("Resultado Arquitectura:", calcularPuntajeArquitectura(portafolioPlanos, 8, 3)); // esperado: 27

// preuba caso borde
let unPlano = [5];
console.log("Resultado Arquitectura Caso Borde:", calcularPuntajeArquitectura(unPlano, 0, 100)); // esperado: -99
