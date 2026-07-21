function calcularPuntajeViajes(destinosVisitados, bonoTemporada, penalizacionEquipaje) {
    if (destinosVisitados.length === 0) {
        return 0;
    }

    let totalDestinos = destinosVisitados.length;
    let puntajeFinal = totalDestinos + bonoTemporada - penalizacionEquipaje;
    
    return puntajeFinal;
}

// pruebas
let ciudades = [1, 2, 3, 4];
console.log("Resultado Viajes:", calcularPuntajeViajes(ciudades, 8, 3)); // esperado: 27

// pruebas caso borde
let ningunDestino = [];
console.log("Resultado Viajes Caso Borde:", calcularPuntajeViajes(ningunDestino, 10, 2)); // esperado: 0