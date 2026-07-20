//Logica General 001 - Clasificación por reglas (Optimizado)


function clasificarElemento(items, prioridad) {
    // 1. Guardrails / Casos Borde combinados
    if (!Array.isArray(items) || items.length === 0) {
        return { accion: "error", motivo: "No se proporcionó una lista de items válida." };
    }
    if (!prioridad) {
        return { accion: "error", motivo: "La prioridad no ha sido definida." };
    }

    // 2. Mapeo único O(N) a Set para búsquedas instantáneas O(1)
    const estados = new Set(items);
    const tieneBloqueado = estados.has("bloqueado");
    const tienePendiente = estados.has("pendiente");
    const esAlta = prioridad === "alta";

    // 3. Evaluación de Reglas de Negocio sin redundancias de búsqueda
    if (esAlta && tieneBloqueado) {
        return { accion: "revisar bloqueado", motivo: "La regla prioriza riesgos (bloqueados) antes de tareas normales cuando la prioridad es alta." };
    }

    if (tienePendiente) {
        return {
            accion: "revisar pendiente",
            motivo: esAlta 
                ? "Prioridad alta activa, se atienden los casos pendientes acumulados." 
                : "Flujo normal: se atienden los casos pendientes en espera."
        };
    }

    return { accion: "monitorear", motivo: "Todos los elementos están aprobados o no requieren acción inmediata." };
}

// === EJECUCIÓN Y PRUEBAS ===
console.log("--- EJECUTANDO PRUEBAS DE CLASIFICACIÓN --- \n");

const pruebas = [
    { name: "1. CASO EJEMPLO OFICIAL:", items: ["aprobado", "pendiente", "bloqueado"], prio: "alta" },
    { name: "2. CASO NORMAL PROPIO:", items: ["aprobado", "pendiente"], prio: "media" },
    { name: "3. CASO BORDE PROPIO:", items: [], prio: "alta" }
];

pruebas.forEach(p => {
    console.log(p.name);
    console.log(clasificarElemento(p.items, p.prio));
    console.log("\n-----------------------------------------\n");
});