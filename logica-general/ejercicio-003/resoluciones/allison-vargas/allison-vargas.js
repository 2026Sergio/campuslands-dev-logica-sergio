/**
 * Toma decisiones de clasificación para un torneo de Esports.
 * @param {Object} equipo - Datos del equipo (nombre, victorias, penalizaciones, estado)
 * @returns {Object} - Decisión final (acción y motivo)
 */
function tomarDecisionTorneo(equipo) {
  // 1. Validación de datos de entrada (Evitar datos vacíos o erróneos)
  if (!equipo || !equipo.nombre || equipo.victorias === undefined || equipo.penalizaciones === undefined) {
    return {
      accion: "rechazar registro",
      motivo: "Los datos del equipo están incompletos o faltan campos obligatorios."
    };
  }

  const { victorias, penalizaciones, estado } = equipo;

  // 2. Regla Crítica: Descalificación inmediata por comportamiento o estado
  if (estado === "descalificado" || penalizaciones > 3) {
    return {
      accion: "eliminar del torneo",
      motivo: "El equipo superó el límite de 3 penalizaciones permitidas o su estado es descalificado."
    };
  }

  // 3. Regla de Negocio: Toma de decisión para clasificar (ej.mínimo 5 victorias)
  if (victorias >= 5 && estado === "activo") {
    return {
      accion: "clasificar a playoffs",
      motivo: "El equipo cumple con el mínimo de 5 victorias y mantiene un historial limpio."
    };
  }

  // 4. Flujo por defecto
  return {
    accion: "mantener en fase de grupos",
    motivo: "El equipo está activo pero aún no alcanza las victorias necesarias para clasificar."
  };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Equipo con buen rendimiento que clasifica
const casoNormal = {
  nombre: "Alpha Squad",
  victorias: 6,
  penalizaciones: 1,
  estado: "activo"
};
console.log("--- Caso Normal ---");
console.log(tomarDecisionTorneo(casoNormal));


// 2. Caso Borde: Equipo con muchas victorias pero descalificado por penalizaciones
const casoBorde = {
  nombre: "Shadow Team",
  victorias: 8,
  penalizaciones: 4, // Supera el límite
  estado: "activo"
};
console.log("\n--- Caso Borde ---");
console.log(tomarDecisionTorneo(casoBorde));