// Definición de entradas: items (estados) y prioridad
const items = ["aprobado", "pendiente", "bloqueado"];
const prioridad = "alta";

function procesarTareas(items, prioridad) {
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }
    return { accion: "revisar lista completa", motivo: "prioridad estándar" };
}

// Prueba 1: Ejemplo del ejercicio
console.log("Resultado Ejemplo:", procesarTareas(items, prioridad));

// Prueba 2: Caso borde (lista vacía)
console.log("Resultado Borde:", procesarTareas([], "alta"));