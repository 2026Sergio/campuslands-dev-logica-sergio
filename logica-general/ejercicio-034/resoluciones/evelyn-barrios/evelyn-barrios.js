/**
 * @file resolucion/evelyn-barrios/evelyn-barrios.js
 * @description Solución al problema de decisión de salto en paracaidismo.
 */

/**
 * Decide la acción a tomar en un salto de paracaidismo según el estado del equipo y la experiencia del saltador.
 *
 * @param {string} estadoEquipo - El estado actual del equipo ('aprobado', 'pendiente', 'bloqueado').
 * @param {string} experienciaSaltador - La experiencia del saltador ('novato', 'intermedio', 'experto').
 * @returns {{accion: string, motivo: string}} Un objeto con la acción recomendada y el motivo.
 */
function decidirAccionSalto(estadoEquipo, experienciaSaltador) {
  if (!estadoEquipo || !experienciaSaltador) {
    return {
      accion: "inválida",
      motivo: "Faltan datos de entrada para tomar una decisión.",
    };
  }

  switch (estadoEquipo.toLowerCase()) {
    case "bloqueado":
      return {
        accion: "no saltar",
        motivo: "La seguridad es prioritaria. El equipo está bloqueado y no es seguro para su uso.",
      };
    case "pendiente":
      if (experienciaSaltador.toLowerCase() === "experto") {
        return {
          accion: "proceder con precaución",
          motivo: "El saltador es experto y puede decidir usar el equipo bajo su propio riesgo.",
        };
      }
      return {
        accion: "revisar equipo",
        motivo: "El equipo está pendiente de revisión y el saltador no es experto.",
      };
    case "aprobado":
      return {
        accion: "proceder con el salto",
        motivo: "El equipo está aprobado y listo para un salto seguro.",
      };
    default:
      return {
        accion: "inválida",
        motivo: `El estado del equipo '${estadoEquipo}' no es reconocido.`,
      };
  }
}

// --- Pruebas ---
console.log("Caso 1: Equipo aprobado, saltador novato");
console.log(decidirAccionSalto("aprobado", "novato"));

console.log("\nCaso 2 (Borde): Equipo pendiente, saltador experto");
console.log(decidirAccionSalto("pendiente", "experto"));

console.log("\nCaso 3 (Borde): Equipo bloqueado, saltador experto");
console.log(decidirAccionSalto("bloqueado", "experto"));