function calcularPuntajeInventarioMotos(motosDisponibles, bonoMarca, penalizacionFaltaStock) {
    if (motosDisponibles.length === 0) {
        return 0;
    }

    let totalModelos = motosDisponibles.length;
    let puntajeFinal = totalModelos + bonoMarca - penalizacionFaltaStock;

    return puntajeFinal;
}

// prueba flujo normal
let loteMotos = [12, 18, 25, 30];
console.log("Resultado Inventario Motos:", calcularPuntajeInventarioMotos(loteMotos, 8, 3)); // esperado: 27

// prueba caso borde
let motoExclusiva = [1200];
console.log("Resultado Inventario Motos Caso Borde:", calcularPuntajeInventarioMotos(motoExclusiva, 500, 50)); // Esperado: 451
    