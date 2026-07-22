function calcularPuntajeComidaUrbana(pedidosDespachados, bonoRapidez, penalizacionDesperdicio) {
    if (pedidosDespachados.length === 0) {
        return 0;
    }

    let totalOrdenes = pedidosDespachados.length;
    let puntajeFinal = totalOrdenes + bonoRapidez - penalizacionDesperdicio;

    return puntajeFinal;
}

// prueba flujo normal
let servicioDia = [12, 18, 25, 30];
console.log("Resultado Comida Urbana:", calcularPuntajeComidaUrbana(servicioDia, 8, 3)); // Esperado: 27

// prueba caso borde
let ordenPerfecta = [10, 12];
console.log("Resultado Comida Urbana Caso Borde:", calcularPuntajeComidaUrbana(ordenPerfecta, 15, 0)); // Esperado: 17