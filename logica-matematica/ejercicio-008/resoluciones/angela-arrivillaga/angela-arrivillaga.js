function calcularPuntajeCienciaFiccion(votosAudiencia, bonoEfectos, penalizacionGuion) {
    if (votosAudiencia.length === 0) {
        return 0;
    }

    let cantidadCriticos = votosAudiencia.length;
    let puntajeFinal = cantidadCriticos + bonoEfectos - penalizacionGuion;
    
    return puntajeFinal;
}

// Prueba
let criticasCine = [9, 8, 10, 7];
console.log("Resultado Sci-Fi:", calcularPuntajeCienciaFiccion(criticasCine, 8, 3)); // Esperado: 27

// prueba caso borde
let unVoto = [2];
console.log("Resultado Sci-Fi Caso Borde:", calcularPuntajeCienciaFiccion(unVoto, 4, 1)); // Esperado: 4
