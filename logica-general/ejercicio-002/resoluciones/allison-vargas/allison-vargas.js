/**
 * Evalúa las acciones del ranking de fútbol sala según prioridades y reglas.
 * @param {Object} datos - Objeto con items, prioridad y regla.
 * @returns {Object} - Acción y motivo final.
 */
function evaluarPrioridadRanking(datos) {
  // 1. Validación de datos de entrada (Evita errores comunes)
  if (!datos || !datos.items || !Array.isArray(datos.items) || datos.items.length === 0) {
    return {
      accion: "detener proceso",
      motivo: "Los datos de entrada están vacíos o no tienen un formato válido."
    };
  }

  const { items, prioridad, regla } = datos;

  // 2. Aplicación de Reglas de Negocio
  if (prioridad === "alta" && items.includes("bloqueado")) {
    return {
      accion: "revisar bloqueado",
      motivo: "La regla prioriza riesgos (elementos bloqueados) antes de tareas normales cuando la prioridad es alta."
    };
  }

  // Comportamiento por defecto para otros casos
  return {
    accion: "procesar normalmente",
    motivo: "No se detectaron elementos bloqueados con prioridad alta en el ranking."
  };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal (Ejemplo de las instrucciones)
const casoNormal = {
  items: ["aprobado", "pendiente", "bloqueado"],
  prioridad: "alta",
  regla: "revisar bloqueados primero"
};
console.log("--- Caso Normal ---");
console.log(evaluarPrioridadRanking(casoNormal));


// 2. Caso Borde (Lista vacía / Datos ausentes)
const casoBorde = {
  items: [],
  prioridad: "baja",
  regla: "ninguna"
};
console.log("\n--- Caso Borde ---");
console.log(evaluarPrioridadRanking(casoBorde));