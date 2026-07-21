const organizarListaKickboxing = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender cartelera", motivo: "Error: Metadatos de organización o lista de estados del torneo incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "iniciar combate",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "los atletas cumplen con el pesaje y examen medico reglamentario."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(organizarListaKickboxing(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(organizarListaKickboxing(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Combate de Título Aprobado y Listo) ---");
console.log(organizarListaKickboxing(["aprobado", "aprobado"], "media", "verificar guantes reglamentarios"));