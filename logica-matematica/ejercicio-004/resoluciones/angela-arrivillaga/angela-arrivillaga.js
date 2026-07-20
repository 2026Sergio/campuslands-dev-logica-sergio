function calcularPuntajeInventarioMotos(motosPorLote, bonoMarca, penalizacionRetraso) {
    if (motosPorLote.length === 0) {
        return 0;
    }

    let cantidadLotes = motosPorLote.length;
    let puntajeFinal = cantidadLotes + bonoMarca - penalizacionRetraso;
    
    return puntajeFinal;
}

// prueba
let lotesMotos = [10, 20, 15, 30];
console.log("Resultado Motos:", calcularPuntajeInventarioMotos(lotesMotos, 8, 3)); // Espwrado: 27

// prueba caso borde
let unLote = [50];
console.log("Resultado Motos Caso Borde:", calcularPuntajeInventarioMotos(unLote, 2, 20)); // Esperado: -17