/*
=========================================
Reto: Comparación de Opciones
Temática: Ping Pong
Campuslands
=========================================

Objetivo:
Comparar el rendimiento de varios jugadores de
ping pong y determinar cuál tiene el mejor desempeño.
*/

// Lista de jugadores
const jugadores = [
    {
        nombre: "Juan Pérez",
        victorias: 18,
        derrotas: 4,
        puntos: 540
    },
    {
        nombre: "María López",
        victorias: 22,
        derrotas: 3,
        puntos: 620
    },
    {
        nombre: "Carlos Gómez",
        victorias: 16,
        derrotas: 6,
        puntos: 500
    },
    {
        nombre: "Ana Martínez",
        victorias: 20,
        derrotas: 2,
        puntos: 610
    }
];

/*
=========================================
Función para comparar jugadores
=========================================
*/

function compararJugadores(lista) {

    let mejorJugador = lista[0];

    for (let i = 1; i < lista.length; i++) {

        let jugador = lista[i];

        // Comparar por cantidad de victorias
        if (jugador.victorias > mejorJugador.victorias) {

            mejorJugador = jugador;

        }

        // Si tienen las mismas victorias,
        // comparar por puntos.
        else if (
            jugador.victorias === mejorJugador.victorias &&
            jugador.puntos > mejorJugador.puntos
        ) {

            mejorJugador = jugador;

        }

    }

    return mejorJugador;

}

/*
=========================================
Mostrar resultados
=========================================
*/

function mostrarResultado(jugador) {

    console.log("===================================");
    console.log("COMPARACIÓN DE JUGADORES");
    console.log("PING PONG");
    console.log("===================================\n");

    console.log("Mejor jugador encontrado:\n");

    console.log("Nombre: " + jugador.nombre);
    console.log("Victorias: " + jugador.victorias);
    console.log("Derrotas: " + jugador.derrotas);
    console.log("Puntos: " + jugador.puntos);

}

const mejor = compararJugadores(jugadores);

mostrarResultado(mejor);