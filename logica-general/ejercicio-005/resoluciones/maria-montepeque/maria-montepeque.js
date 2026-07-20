//Reto 005: Ordenamiento de Prioridades - Taller Mecánico

function ordenarPrioridadesTaller(entradaTaller) {
    // 1. Guardrail / Caso Borde Estructural
    if (!entradaTaller || !Array.isArray(entradaTaller.vehiculos) || entradaTaller.vehiculos.length === 0) {
        return { colaAtencion: [], resultado: "taller vacio", motivo: "No hay vehículos registrados en la cola de espera para ordenar." };
    }

    const PESOS = { emergencia: 3, mantenimiento: 2, revision: 1 };
    const ETIQUETAS = { emergencia: 'CRÍTICA', mantenimiento: 'MEDIA', revision: 'BAJA' };

    // 2. Pipeline de un solo paso: Mapeamos los datos base y ordenamos el resultado directamente
    const colaAtencion = entradaTaller.vehiculos
        .map((v, i) => ({
            turno: 0, 
            placa: v.placa,
            tipoServicio: v.tipoServicio,
            prioridadAsignada: ETIQUETAS[v.tipoServicio] || 'BAJA',
            _peso: PESOS[v.tipoServicio] || 0,
            _horas: v.antiguedadHoras || 0
        }))

        .sort((a, b) => (b._peso - a._peso) || (b._horas - a._horas))

        .map((v, idx) => {
            delete v._peso; 
            delete v._horas;
            v.turno = idx + 1;
            return v;
        });

    return {
        colaAtencion,
        resultado: "ordenamiento exitoso",
        motivo: `Se ha generado el orden de asignación óptimo para los ${colaAtencion.length} vehículos en espera.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 005 ---");

const pruebas = [
    {
        tipo: "Caso Normal - Clasificación por Tipo y Desempate",
        datos: {
            vehiculos: [
                { placa: "ABC-123", tipoServicio: "mantenimiento", antiguedadHoras: 2 },
                { placa: "EMG-911", tipoServicio: "emergencia", antiguedadHoras: 1 },
                { placa: "XYZ-789", tipoServicio: "revision", antiguedadHoras: 5 },
                { placa: "MNO-456", tipoServicio: "mantenimiento", antiguedadHoras: 4 }
            ]
        }
    },
    {
        tipo: "Caso de Negocio - Desempate por Horas de Espera",
        datos: {
            vehiculos: [
                { placa: "AAA-111", tipoServicio: "revision", antiguedadHoras: 1 },
                { placa: "BBB-222", tipoServicio: "revision", antiguedadHoras: 3 }
            ]
        }
    },
    {
        tipo: "Caso Borde - Cola Vacía",
        datos: { vehiculos: [] }
    }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(ordenarPrioridadesTaller(datos), null, 2));
});