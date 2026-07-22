function calcularPuntajeTorneoEsports(KDA_registrados, bonoMVP, penalizacionDerrota) {
    if (KDA_registrados.length === 0) {
        return 0;
    }

    let partidasTotales = KDA_registrados.length;
    let puntajeFinal = partidasTotales + bonoMVP - penalizacionDerrota;

    return puntajeFinal;
}

// prueba flujo normal
let historialKDA = [12, 18, 25, 30];
console.log("Resultado Torneo Esports:", calcularPuntajeTorneoEsports(historialKDA, 8, 3)); // Esperado: 27

// prueba caso borde
let cuentaNueva = [];
console.log("Resultado Torneo Esports Caso Borde:", calcularPuntajeTorneoEsports(cuentaNueva, 10, 2)); // Esperado: 0
