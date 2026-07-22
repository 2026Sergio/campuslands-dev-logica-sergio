function calcularPuntajeTallerMecanico(autosReparados, bonoEficiencia, penalizacionGarantia) {
    if (autosReparados.length === 0) {
        return 0;
    }

    let totalServicios = autosReparados.length;
    let puntajeFinal = totalServicios + bonoEficiencia - penalizacionGarantia;

    return puntajeFinal;
}

// prueba flujo normal
let ordenesTrabajo = [12, 18, 25, 30];
console.log("Resultado Taller Mecánico:", calcularPuntajeTallerMecanico(ordenesTrabajo, 8, 3)); // Esperado: 27

// prueba caso borde
let filaAutos = [1, 2, 3, 4, 5, 6];
console.log("Resultado Taller Mecánico Caso Borde:", calcularPuntajeTallerMecanico(filaAutos, 2, 2)); // Esperado: 6
