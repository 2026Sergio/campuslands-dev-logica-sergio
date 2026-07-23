/*
=========================================
Reto: Simulación de Estados
Temática: Películas de Miedo
Campuslands
=========================================
*/

const peliculas = [
    {
        titulo: "El Conjuro",
        estado: "Disponible",
        edadMinima: 16
    },
    {
        titulo: "La Monja",
        estado: "En reproducción",
        edadMinima: 18
    },
    {
        titulo: "IT",
        estado: "Disponible",
        edadMinima: 16
    },
    {
        titulo: "Scream",
        estado: "No disponible",
        edadMinima: 18
    },
    {
        titulo: "Hereditary",
        estado: "Disponible",
        edadMinima: 18
    }
];

// Edad del usuario
const edadUsuario = 17;

/*
=========================================
Función para simular estados
=========================================
*/

function simularEstados(lista, edad) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let pelicula = lista[i];
        let resultado = "";

        if (pelicula.estado === "Disponible") {

            if (edad >= pelicula.edadMinima) {
                resultado = "Puede reproducirse.";
            } else {
                resultado = "No cumple la edad mínima.";
            }

        } else if (pelicula.estado === "En reproducción") {

            resultado = "La película ya está siendo reproducida.";

        } else {

            resultado = "La película no está disponible.";

        }

        reporte.push({
            titulo: pelicula.titulo,
            estado: pelicula.estado,
            resultado: resultado
        });

    }

    return reporte;

}

/*
=========================================
Mostrar reporte
=========================================
*/

function mostrarReporte(datos) {

    console.log("==================================");
    console.log("SIMULACIÓN DE ESTADOS");
    console.log("PELÍCULAS DE MIEDO");
    console.log("==================================\n");

    datos.forEach((pelicula) => {

        console.log("Película: " + pelicula.titulo);
        console.log("Estado: " + pelicula.estado);
        console.log("Resultado: " + pelicula.resultado);
        console.log("------------------------------");

    });

}

const resultado = simularEstados(peliculas, edadUsuario);

mostrarReporte(resultado);