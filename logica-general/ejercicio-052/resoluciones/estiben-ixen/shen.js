function compararJugadores(jugador1, jugador2) {
    if (!jugador1 || !jugador2) {
        return "Datos incompletos";
    }

    let resultado;

    if (jugador1.victorias > jugador2.victorias) {
        resultado = jugador1;
    } else if (jugador2.victorias > jugador1.victorias) {
        resultado = jugador2;
    } else {
        if (jugador1.puntos > jugador2.puntos) {
            resultado = jugador1;
        } else if (jugador2.puntos > jugador1.puntos) {
            resultado = jugador2;
        } else {
            resultado = "Empate";
        }
    }

    return resultado;
}

const jugadorA = {
    nombre: "Alex",
    victorias: 8,
    puntos: 120
};

const jugadorB = {
    nombre: "Bruno",
    victorias: 6,
    puntos: 140
};

const jugadorC = {
    nombre: "Carlos",
    victorias: 8,
    puntos: 120
};

console.log(compararJugadores(jugadorA, jugadorB));
console.log(compararJugadores(jugadorA, jugadorC));