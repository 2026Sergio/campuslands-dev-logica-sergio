function calcularPuntajeComidaUrbana(recetasPreparadas, bonoSabor, penalizacionEspera) {
    if (recetasPreparadas.length === 0) {
        return 0;
    }

    let totalRecetas = recetasPreparadas.length;
    let puntajeFinal = totalRecetas + bonoSabor - penalizacionEspera;

    return puntajeFinal;
}

// prueba flujo normal
let foodTruck = [12, 18, 25, 30];
console.log("Resultado Comida Urbana:", calcularPuntajeComidaUrbana(foodTruck, 8, 3)); // Esperado: 27

// Prueba caso brde
let pedidosExpress = [1, 2, 3, 4];
console.log("Resultado Comida Urbana Caso Borde:", calcularPuntajeComidaUrbana(pedidosExpress, 15, 0)); // Esperado: 19
