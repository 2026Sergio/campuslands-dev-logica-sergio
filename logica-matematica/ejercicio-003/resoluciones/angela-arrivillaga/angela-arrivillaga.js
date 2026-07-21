function calcularPuntajeTorneoEsports(KDA_Jugadores, bonoStream, penalizacionToxicidad) {
    if (KDA_Jugadores.length === 0) {
        return 0;
    }

    let totalEscuadras = KDA_Jugadores.length;
    let puntajeFinal = totalEscuadras + bonoStream - penalizacionToxicidad;
    
    return puntajeFinal;
}

// prueba
let escuadrasEnTorneo = [3, 4, 5, 2];
console.log("Resultado Esports:", calcularPuntajeTorneoEsports(escuadrasEnTorneo, 8, 3)); // Esperado: 27

// prueba caso borde
let escuadrasSolas = [4, 5];
console.log("Resultado Esports Caso Borde:", calcularPuntajeTorneoEsports(escuadrasSolas, 0, 0)); // Esperado: 2