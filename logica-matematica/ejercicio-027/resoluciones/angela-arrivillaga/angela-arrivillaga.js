function calcularPuntajePlaylist(cancionesAgregadas, bonoMix, penalizacionSalto) {
    if (cancionesAgregadas.length === 0) {
        return 0;
    }

    let totalCanciones = cancionesAgregadas.length;
    let puntajeFinal = totalCanciones + bonoMix - penalizacionSalto;

    return puntajeFinal;
}

// prueba flujo normal
let listaReproduccion = [12, 18, 25, 30];
console.log("Resultado Playlist:", calcularPuntajePlaylist(listaReproduccion, 8, 3)); // Esperado: 27

// pruebla caso borde
let setDJ = [180];
console.log("Resultado Playlist Caso Borde:", calcularPuntajePlaylist(setDJ, 5, 0)); // Esperadp: 6
