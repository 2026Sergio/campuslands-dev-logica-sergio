// Ejercicio 093 - Resolucion de casos (paracaidismo)

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: "revisar bloqueado",
  pendiente: "revisar pendiente",
  aprobado: "revisar aprobado",
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "la tarea sigue en proceso y requiere seguimiento.",
  aprobado: "la tarea ya fue validada y solo requiere confirmacion.",
};

function resolverCaso(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin items para procesar",
      motivo: "no se recibieron items validos en la entrada.",
    };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return {
      accion: "sin items reconocidos",
      motivo: "ningun item coincide con los estados definidos.",
    };
  }

  const itemMasUrgente = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] > PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[itemMasUrgente],
    motivo: MOTIVOS[itemMasUrgente],
  };
}

module.exports = { resolverCaso, PRIORIDADES, ACCIONES, MOTIVOS };