// ejercicio logica - validacion de datos - Ejercicio 082

const validarRegistroJugadorSala = (jugador) => {
    let errores = [];

    // Validar existencia de datos obligatorios
    if (!jugador) {
        return { valido: false, errores: ["El objeto de datos del jugador está vacío."] };
    }

    if (typeof jugador.nombre !== 'string' || jugador.nombre.trim() === "") {
        errores.push("El nombre del jugador es obligatorio y debe ser un texto válido.");
    }

    if (typeof jugador.goles !== 'number' || jugador.goles < 0) {
        errores.push("Los goles deben ser un número entero mayor o igual a 0.");
    }

    if (typeof jugador.tarjetasAmarillas !== 'number' || jugador.tarjetasAmarillas < 0) {
        errores.push("Las tarjetas amarillas deben ser un valor numérico válido.");
    }

    if (errores.length > 0) {
        return {
            valido: false,
            errores_detectados: errores,
            explicacion: "Se rechazó el registro debido a que no cumple con las reglas de validación de datos del torneo."
        };
    }

    return {
        valido: true,
        mensaje: `El jugador ${jugador.nombre} ha sido validado correctamente para el ranking de fútbol sala.`
    };
};

const jugadorValido = { nombre: "Carlos Ruiz", goles: 12, tarjetasAmarillas: 1 };
const jugadorInvalido = { nombre: "", goles: -3, tarjetasAmarillas: "dos" };

console.log(validarRegistroJugadorSala(jugadorValido));
console.log(validarRegistroJugadorSala(jugadorInvalido));