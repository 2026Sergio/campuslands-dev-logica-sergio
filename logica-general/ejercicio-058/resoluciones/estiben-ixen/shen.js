function gestionarTurnos(trabajos) {
    if (!Array.isArray(trabajos) || trabajos.length === 0) {
        return {
            estado: "sin turnos",
            mensaje: "no existen trabajos pendientes"
        };
    }

    const turnos = [];

    for (let i = 0; i < trabajos.length; i++) {
        const trabajo = trabajos[i];

        turnos.push({
            turno: i + 1,
            cliente: trabajo.cliente,
            trabajo: trabajo.tipo,
            estado: i === 0 ? "en proceso" : "pendiente"
        });
    }

    return turnos;
}

const trabajosNormal = [
    {
        cliente: "Carlos",
        tipo: "soldadura de estructura"
    },
    {
        cliente: "Maria",
        tipo: "reparacion metalica"
    },
    {
        cliente: "Pedro",
        tipo: "fabricacion de pieza"
    }
];

const trabajosBorde = [];

console.log(gestionarTurnos(trabajosNormal));
console.log(gestionarTurnos(trabajosBorde));