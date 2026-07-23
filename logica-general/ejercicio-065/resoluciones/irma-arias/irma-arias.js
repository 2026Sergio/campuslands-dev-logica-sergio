
const tallerMecanicoOrdenes = [
    { id: 1, cliente: "Carlos Pérez", placa: "ABC-123", nivelPrioridad: "media", horasEstimadas: 4 },
    { id: 2, cliente: "Ana Gómez", placa: "XYZ-789", nivelPrioridad: "alta", horasEstimadas: 2 },   // Alta prioridad (Emergencia)
    { id: 3, cliente: "Luis Torres", placa: "MNO-456", nivelPrioridad: "baja", horasEstimadas: 6 },  // Baja prioridad (Mantenimiento general)
    { id: 4, cliente: "", placa: "DEF-321", nivelPrioridad: "alta", horasEstimadas: 3 },             // Inconsistencia: Cliente sin nombre
    { id: 5, cliente: "Sofia Ruiz", placa: "", nivelPrioridad: "media", horasEstimadas: 5 }         // Inconsistencia: Placa vacía
];

// Función para ordenar por prioridades y auditar las órdenes del taller mecánico
function ordenarPrioridadesTaller(lista) {
    // Paso 1: Validación general de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de órdenes del taller mecánico está vacía o no es válida." };
    }

    let ordenesValidas = [];
    let ordenesConErrores = [];

    // Paso 2: Ciclo para validar cada orden de servicio
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let errores = [];

        // Regla 1: Validar nombre del cliente
        if (!item.cliente || typeof item.cliente !== "string" || item.cliente.trim() === "") {
            errores.push("Nombre del cliente vacío o inválido.");
        }

        // Regla 2: Validar placa del vehículo
        if (!item.placa || typeof item.placa !== "string" || item.placa.trim() === "") {
            errores.push("Placa del vehículo vacía o inválida.");
        }

        // Regla 3: Validar que el nivel de prioridad sea reconocido
        let prioridadNormalizada = typeof item.nivelPrioridad === "string" ? item.nivelPrioridad.toLowerCase().trim() : "";
        if (!["alta", "media", "baja"].includes(prioridadNormalizada)) {
            errores.push("Nivel de prioridad desconocido (debe ser alta, media o baja).");
        }

        // Regla 4: Validar horas estimadas de trabajo
        if (typeof item.horasEstimadas !== "number" || isNaN(item.horasEstimadas) || item.horasEstimadas <= 0) {
            errores.push("Las horas estimadas de trabajo deben ser un número mayor a 0.");
        }

        // Paso 3: Clasificar según validez
        if (errores.length === 0) {
            ordenesValidas.push({
                cliente: item.cliente.trim(),
                placa: item.placa.trim(),
                nivelPrioridad: prioridadNormalizada,
                horasEstimadas: item.horasEstimadas,
                pesoPrioridad: prioridadNormalizada === "alta" ? 1 : (prioridadNormalizada === "media" ? 2 : 3)
            });
        } else {
            ordenesConErrores.push({
                registroOriginal: item,
                estado: "Rechazado por datos incompletos o erróneos",
                motivos: errores
            });
        }
    }

    // Paso 4: Ordenar las órdenes válidas por prioridad (Alta -> Media -> Baja) sin librerías externas
    for (let i = 0; i < ordenesValidas.length - 1; i++) {
        for (let j = 0; j < ordenesValidas.length - 1 - i; j++) {
            if (ordenesValidas[j].pesoPrioridad > ordenesValidas[j + 1].pesoPrioridad) {
                let temporal = ordenesValidas[j];
                ordenesValidas[j] = ordenesValidas[j + 1];
                ordenesValidas[j + 1] = temporal;
            }
        }
    }

    // Paso 5: Retornar resultado estructurado
    return {
        estadoSistema: "Ordenamiento de Prioridades en Taller Mecánico Completado",
        totalOrdenesEvaluadas: lista.length,
        totalOrdenesProgramadas: ordenesValidas.length,
        ordenesProgramadasPorPrioridad: ordenesValidas,
        ordenesRechazadasParaRevision: ordenesConErrores
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Ordenar las prioridades del taller mecánico
console.log("--- PRUEBA NORMAL (Ordenamiento de Prioridades - Taller Mecánico) ---");
console.log(JSON.stringify(ordenarPrioridadesTaller(tallerMecanicoOrdenes), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía para comprobar la protección del sistema
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(ordenarPrioridadesTaller([]));