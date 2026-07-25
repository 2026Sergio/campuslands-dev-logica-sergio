const Playlist = [
    { titulo: "Bohemian Rhapsody", duracionSegundos: 354, reproducciones: 1500000, explicitas: false },
    { titulo: "Song With Negative Duration", duracionSegundos: -120, reproducciones: 50000, explicitas: false },
    { titulo: "Blinding Lights", duracionSegundos: 200, reproducciones: 3000000, explicitas: false },
    { titulo: "Ghost Track Zero Plays", duracionSegundos: 180, reproducciones: 0, explicitas: true },
    { titulo: "Shape of You", duracionSegundos: 233, reproducciones: 2500000, explicitas: false }
];

let inconsistentes = [];
let detectar_inconsistencia = (c) => (c.duracionSegundos <= 0) || (c.reproducciones < 0);

if (Playlist.length === 0) {
    console.log("No hay canciones registradas en la playlist para analizar.");
} else {
    Playlist.forEach((cancion) => {
        if (detectar_inconsistencia(cancion)) {
            inconsistentes.push(cancion);
        }
    });
    console.log(`Se detectaron ${inconsistentes.length} canciones con inconsistencias en sus datos.`);
}