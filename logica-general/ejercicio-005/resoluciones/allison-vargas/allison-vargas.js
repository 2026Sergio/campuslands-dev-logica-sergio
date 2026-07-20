/**
 * Ordena la cola de vehículos del taller mecánico según su nivel de prioridad.
 * @param {Array} vehiculos - Lista de objetos de vehículos en espera.
 * @returns {Array|Object} - Lista ordenada de mayor a menor prioridad o un objeto de estado.
 */
function ordenarPrioridadesTaller(vehiculos) {
    // 1. Validación preventiva (Evita errores si el arreglo está vacío o no es un arreglo)
    if (!vehiculos || !Array.isArray(vehiculos) || vehiculos.length === 0) {
        return {
            accion: "detener asignación",
            motivo: "No hay vehículos en la cola de espera para ordenar prioridades."
        };
    }

    // 2. Aplicación de la regla de negocio mediante un ordenamiento estable descendente (.sort)
    // Se asume que a mayor número en la propiedad 'prioridad', más urgente es la falla.
    const colaOrdenada = [...vehiculos].sort((vehiculoA, vehiculoB) => {
        return vehiculoB.prioridad - vehiculoA.prioridad;
    });

    return colaOrdenada;
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Cola con varios vehículos y diferentes niveles de urgencia
const colaTallerNormal = [
    { modelo: "Sedan Azul", tipoDeFalla: "Cambio de aceite", prioridad: 1 },
    { modelo: "Camioneta Gris", tipoDeFalla: "Frenos desgastados", prioridad: 3 },
    { modelo: "Compacto Rojo", tipoDeFalla: "Falla de motor", prioridad: 5 },
    { modelo: "Moto Negra", tipoDeFalla: "Alineación básica", prioridad: 2 }
];

console.log("--- Caso Normal ---");
console.log(ordenarPrioridadesTaller(colaTallerNormal));


// 2. Caso Borde: Cola de espera completamente vacía
const colaTallerVacia = [];

console.log("\n--- Caso Borde ---");
console.log(ordenarPrioridadesTaller(colaTallerVacia));