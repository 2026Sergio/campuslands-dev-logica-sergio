/*
===========================================
Reto: Flujos Paso a Paso
Temática: Películas de Ciencia Ficción
Campuslands
===========================================
*/

const peliculas = [
    {
        titulo: "Interstellar",
        anio: 2014,
        duracion: 169,
        calificacion: 8.7,
        disponible: true
    },
    {
        titulo: "Avatar",
        anio: 2009,
        duracion: 162,
        calificacion: 7.9,
        disponible: false
    },
    {
        titulo: "The Matrix",
        anio: 1999,
        duracion: 136,
        calificacion: 8.7,
        disponible: true
    },
    {
        titulo: "Dune",
        anio: 2021,
        duracion: 155,
        calificacion: 8.1,
        disponible: true
    },
    {
        titulo: "Gravity",
        anio: 2013,
        duracion: 91,
        calificacion: 7.7,
        disponible: true
    }
];

/*
===========================================
Función principal
===========================================
*/

function analizarPeliculas(lista) {

    let disponibles = [];
    let recomendadas = [];
    let tiempoTotal = 0;

    for (let i = 0; i < lista.length; i++) {

        let pelicula = lista[i];

        // Paso 1: Verificar disponibilidad
        if (pelicula.disponible) {

            disponibles.push(pelicula);

            // Paso 2: Acumular duración
            tiempoTotal += pelicula.duracion;

            // Paso 3: Verificar si es recomendada
            if (pelicula.calificacion >= 8) {
                recomendadas.push(pelicula.titulo);
            }

        }

    }

    return {
        disponibles,
        recomendadas,
        tiempoTotal
    };

}

/*
===========================================
Mostrar resultados
===========================================
*/

function mostrarReporte(resultado) {

    console.log("====================================");
    console.log("PELÍCULAS DE CIENCIA FICCIÓN");
    console.log("====================================\n");

    console.log("Películas disponibles:\n");

    resultado.disponibles.forEach((pelicula) => {

        console.log(
            `${pelicula.titulo} (${pelicula.anio}) - ${pelicula.duracion} minutos`
        );

    });

    console.log("\nPelículas recomendadas:");

    resultado.recomendadas.forEach((titulo) => {
        console.log("- " + titulo);
    });

    console.log("\nTiempo total para maratón:");

    console.log(resultado.tiempoTotal + " minutos");

}

const resultado = analizarPeliculas(peliculas);

mostrarReporte(resultado);