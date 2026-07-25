// ejercicio logica - ordenamiento de prioridades - Ejercicio 085

const ordenarColaTaller = (vehiculos) => {
    if (!vehiculos || vehiculos.length === 0) {
        return { error: "La lista de vehículos en el taller mecánico está vacía." };
    }

    // Mapeo de valores de prioridad (a menor número, mayor urgencia)
    const pesosPrioridad = {
        "emergencia": 1,
        "alta": 2,
        "media": 3,
        "baja": 4
    };

    // Ordenar los vehículos aplicando reglas de prioridad y antigüedad (orden de llegada)
    const colaOrdenada = [...vehiculos].sort((a, b) => {
        const prioridadA = pesosPrioridad[a.prioridad.toLowerCase()] || 5;
        const prioridadB = pesosPrioridad[b.prioridad.toLowerCase()] || 5;

        if (prioridadA !== prioridadB) {
            return prioridadA - prioridadB;
        }

        // En caso de empate en prioridad, se atiende primero al que llegó antes (menor número de ticket o ID)
        return a.ordenLlegada - b.ordenLlegada;
    });

    return {
        cola_atencion: colaOrdenada,
        explicacion: "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada."
    };
};

const vehiculosCola = [
    { placa: "XYZ-123", prioridad: "media", ordenLlegada: 2 },
    { placa: "ABC-789", prioridad: "emergencia", ordenLlegada: 4 },
    { placa: "DEF-456", prioridad: "alta", ordenLlegada: 1 },
    { placa: "GHI-321", prioridad: "alta", ordenLlegada: 3 }
];

const vehiculosBorde = [
    { placa: "SOLO-1", prioridad: "baja", ordenLlegada: 1 }
];

console.log(ordenarColaTaller(vehiculosCola));
console.log(ordenarColaTaller(vehiculosBorde));