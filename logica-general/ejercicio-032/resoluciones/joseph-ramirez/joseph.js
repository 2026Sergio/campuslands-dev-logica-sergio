const compararOpcionesPingPong = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender asignacion", motivo: "Error: Metadatos de comparación o lista de estados del club de pingpong incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "asignar mesa",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "las opciones evaluadas cumplen con las politicas de equipamiento reglamentario."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(compararOpcionesPingPong(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(compararOpcionesPingPong(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Mesa de Torneo Oficial Aprobada y Disponible) ---");
console.log(compararOpcionesPingPong(["aprobado", "aprobado"], "media", "verificar tension de la red"));