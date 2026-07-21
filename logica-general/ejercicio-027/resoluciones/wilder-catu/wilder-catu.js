/*
=====================================================
Reto: Detección de Inconsistencias
Temática: Playlist Musical
Campuslands
=====================================================

Objetivo:
Detectar canciones con información inconsistente.
*/

const playlist = [
    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        duracion: 200,
        reproducciones: 5000,
        disponible: true
    },
    {
        titulo: "",
        artista: "Imagine Dragons",
        duracion: 210,
        reproducciones: 1200,
        disponible: true
    },
    {
        titulo: "Believer",
        artista: "",
        duracion: 204,
        reproducciones: 3000,
        disponible: true
    },
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        duracion: -15,
        reproducciones: 4500,
        disponible: true
    },
    {
        titulo: "Levitating",
        artista: "Dua Lipa",
        duracion: 203,
        reproducciones: -50,
        disponible: true
    },
    {
        titulo: "Perfect",
        artista: "Ed Sheeran",
        duracion: 250,
        reproducciones: 3500,
        disponible: false
    },
    {
        titulo: "Perfect",
        artista: "Ed Sheeran",
        duracion: 250,
        reproducciones: 3500,
        disponible: false
    }
];

/*====================================
    Función para detectar errores
====================================*/

function detectarInconsistencias(lista) {

    let errores = [];
    let cancionesDuplicadas = [];
    let revisadas = [];

    for (let i = 0; i < lista.length; i++) {

        const cancion = lista[i];

        if (cancion.titulo.trim() === "") {
            errores.push(`Canción ${i + 1}: No tiene título.`);
        }

        if (cancion.artista.trim() === "") {
            errores.push(`Canción ${i + 1}: No tiene artista.`);
        }

        if (cancion.duracion <= 0) {
            errores.push(`Canción ${i + 1}: Duración inválida.`);
        }

        if (cancion.reproducciones < 0) {
            errores.push(`Canción ${i + 1}: Reproducciones negativas.`);
        }

        const identificador = `${cancion.titulo}-${cancion.artista}`;

        if (revisadas.includes(identificador)) {
            cancionesDuplicadas.push(identificador);
        } else {
            revisadas.push(identificador);
        }
    }

    return {
        errores,
        cancionesDuplicadas
    };
}

/*====================================
            Reporte
====================================*/

function generarReporte(resultado) {

    console.log("================================");
    console.log("REPORTE DE INCONSISTENCIAS");
    console.log("================================\n");

    if (resultado.errores.length === 0) {
        console.log("No se encontraron errores.");
    } else {

        console.log("Errores encontrados:\n");

        resultado.errores.forEach(error => {
            console.log("- " + error);
        });
    }

    console.log("\nCanciones duplicadas:");

    if (resultado.cancionesDuplicadas.length === 0) {
        console.log("No existen duplicados.");
    } else {

        resultado.cancionesDuplicadas.forEach(cancion => {
            console.log("- " + cancion);
        });

    }

}

const resultado = detectarInconsistencias(playlist);

generarReporte(resultado);