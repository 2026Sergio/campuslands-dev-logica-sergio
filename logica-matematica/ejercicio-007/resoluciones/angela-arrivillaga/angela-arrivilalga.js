function calcularPuntajePlaylist(duracionCanciones, bonoGeneros, penalizacionSaltos) {
    if (duracionCanciones.length === 0) {
        return 0;
    }

    let cantidadCanciones = duracionCanciones.length;
    let puntajeFinal = cantidadCanciones + bonoGeneros - penalizacionSaltos;
    
    return puntajeFinal;
}

// pruebas
let listaCanciones = [180, 210, 240, 195];
console.log("Resultado Playlist:", calcularPuntajePlaylist(listaCanciones, 8, 3)); // Esperado: 27

// Prueba de caso borde
let cancionesPlanos = [200, 300];
console.log("Resultado Playlist Caso Borde:", calcularPuntajePlaylist(cancionesPlanos, 0, 0)); // Esperado: 2