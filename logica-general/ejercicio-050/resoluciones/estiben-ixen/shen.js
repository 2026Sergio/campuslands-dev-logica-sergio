function ejecutarItinerario(instrucciones) {
    const accionesRealizadas = [];
    const instruccionesValidas = [
        "visitar",
        "descansar",
        "comer",
        "transportarse"
    ];

    for (const instruccion of instrucciones) {
        if (instruccionesValidas.includes(instruccion.accion)) {
            accionesRealizadas.push({
                paso: instruccion.paso,
                accion: instruccion.accion,
                destino: instruccion.destino
            });
        } else {
            accionesRealizadas.push({
                paso: instruccion.paso,
                accion: "error",
                motivo: "instruccion no reconocida"
            });
        }
    }

    return accionesRealizadas;
}

const viajeNormal = [
    {
        paso: 1,
        accion: "visitar",
        destino: "Museo Nacional"
    },
    {
        paso: 2,
        accion: "comer",
        destino: "Restaurante Local"
    }
];

const viajeBorde = [
    {
        paso: 1,
        accion: "volar",
        destino: "Ciudad desconocida"
    },
    {
        paso: 2,
        accion: "descansar",
        destino: "Hotel Central"
    }
];

console.log(ejecutarItinerario(viajeNormal));
console.log(ejecutarItinerario(viajeBorde));