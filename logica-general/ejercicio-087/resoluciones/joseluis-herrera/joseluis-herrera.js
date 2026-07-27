const Playlist = [
    { titulo: "Bohemian Rhapsody", duracionMinutos: 5.9, anioLanzamiento: 1975, rankPopularidad: 1 },
    { titulo: "Blinding Lights", duracionMinutos: 3.2, anioLanzamiento: 2019, rankPopularidad: 2 },
    { titulo: "Shape of You", duracionMinutos: 3.9, anioLanzamiento: 2017, rankPopularidad: 3 },
    { titulo: "Hotel California", duracionMinutos: 6.5, anioLanzamiento: 1976, rankPopularidad: 4 },
    { titulo: "Stairway to Heaven", duracionMinutos: 8.0, anioLanzamiento: 1971, rankPopularidad: 5 }
];

let mejorSecuencia = Playlist[0];
let calcular_puntaje_secuencia = (c) => (c.anioLanzamiento * 0.5) - (c.duracionMinutos * 10) - (c.rankPopularidad * 50);

if (Playlist.length === 0) {
    console.log("No hay canciones registradas en la playlist para evaluar la secuencia numérica.");
} else {
    Playlist.forEach((cancion) => {
        if (calcular_puntaje_secuencia(cancion) > calcular_puntaje_secuencia(mejorSecuencia)) {
            mejorSecuencia = cancion;
        }
    });
    console.log(`La canción con mejor puntaje en la secuencia numérica evaluada es "${mejorSecuencia.titulo}"`);
}