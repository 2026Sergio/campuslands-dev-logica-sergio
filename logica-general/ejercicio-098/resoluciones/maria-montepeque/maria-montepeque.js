// Ejercicio 098 - Sistemas de turnos

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: "revisar bloqueado",
  pendiente: "revisar pendiente",
  aprobado: "revisar aprobado",
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "la regla atiende tareas en espera antes que las aprobadas.",
  aprobado: "no hay riesgos ni pendientes, se revisa lo aprobado.",
};

function resolverTurno(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin items", motivo: "no hay elementos para procesar." };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return { accion: "sin items validos", motivo: "ningun item coincide con un estado reconocido." };
  }

  const itemPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[itemPrioritario],
    motivo: MOTIVOS[itemPrioritario],
  };
}

module.exports = { resolverTurno };