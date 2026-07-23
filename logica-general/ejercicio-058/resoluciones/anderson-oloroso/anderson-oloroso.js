function asignarTurnosSoldadura(trabajadores) {
    const turnos = {
        "Mañana": [],
        "Tarde": [],
        "Noche": []
    };

    for (let i = 0; i < trabajadores.length; i++) {
        const trabajador = trabajadores[i];

        if (trabajador.experiencia >= 5) {
            turnos["Mañana"].push(trabajador.nombre);
        } else if (trabajador.experiencia >= 2) {
            turnos["Tarde"].push(trabajador.nombre);
        } else {
            turnos["Noche"].push(trabajador.nombre);
        }
    }

    return turnos;
}

// Ejemplo
const trabajadores = [
    { nombre: "Carlos", experiencia: 6 },
    { nombre: "Ana", experiencia: 3 },
    { nombre: "Luis", experiencia: 1 },
    { nombre: "Sofía", experiencia: 5 }
];

console.log(asignarTurnosSoldadura(trabajadores));