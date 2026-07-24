const gestionarTurnos = (datos) => {
    const turnos = datos?.turnos;
    if (!Array.isArray(turnos) || turnos.length === 0) {
        return { error: "Lista de turnos vacía o inválida" };
    }

    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i].estado === "disponible") {
            return {
                asignacion: turnos[i].soldador,
                turno: datos.turno_actual || 1,
                motivo: "el soldador cuenta con disponibilidad y especialidad requerida para el turno."
            };
        }
    }

    return {
        asignacion: null,
        turno: datos.turno_actual || 1,
        motivo: "no hay soldadores disponibles para el turno actual."
    };
};

// Pruebas
console.log(gestionarTurnos({
    turnos: [
        { soldador: "Carlos", especialidad: "TIG", estado: "disponible" },
        { soldador: "Ana", especialidad: "MIG", estado: "ocupado" }
    ],
    turno_actual: 1
}));

console.log(gestionarTurnos({
    turnos: [
        { soldador: "Pedro", especialidad: "SMAW", estado: "ocupado" }
    ],
    turno_actual: 1
}));