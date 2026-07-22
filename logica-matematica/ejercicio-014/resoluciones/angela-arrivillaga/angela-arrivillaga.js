function calcularPuntajeTatuajes(sesionesRegistradas, bonoDiseno, penalizacionRetoque) {
    if (sesionesRegistradas.length === 0) {
        return 0;
    }

    let totalClientes = sesionesRegistradas.length;
    let puntajeFinal = totalClientes + bonoDiseno - penalizacionRetoque;

    return puntajeFinal;
}

// prueba flujo normal
let lienzoClientes = [12, 18, 25, 30];
console.log("Resultado Tatuajes:", calcularPuntajeTatuajes(lienzoClientes, 8, 3)); // Esperadp: 27

// prueba caso borde
let agendaVacia = [];
console.log("Resultado Tatuajes Caso Borde:", calcularPuntajeTatuajes(agendaVacia, 5, 1)); // Esperado: 0