function calcularPuntajeTallerMecanico(autosReparados, bonoEficiencia, penalizacionGarantia) {
    if (autosReparados.length === 0) {
        return 0;
    }

    let totalMecanicos = autosReparados.length;
    let puntajeFinal = totalMecanicos + bonoEficiencia - penalizacionGarantia;
    
    return puntajeFinal;
}

// prueba
let mecanicosTrabajando = [2, 3, 1, 5];
console.log("Resultado Taller:", calcularPuntajeTallerMecanico(mecanicosTrabajando, 8, 3)); // Esperado: 27

// prueba caso borde
let muchosMecanicos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log("Resultado Taller Caso Borde:", calcularPuntajeTallerMecanico(muchosMecanicos, 5, 2)); // Esperadp: 13