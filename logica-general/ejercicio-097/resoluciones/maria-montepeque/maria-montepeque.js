// Ejercicio 097 - tablas de decision

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "no hay bloqueados, se atiende lo pendiente antes de lo aprobado.",
  aprobado: "no hay riesgos ni pendientes, se revisa lo aprobado.",
};

function revisarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin items para revisar", motivo: "la lista de items esta vacia." };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return { accion: "sin items validos para revisar", motivo: "ningun item coincide con un estado reconocido." };
  }

  const itemPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${itemPrioritario}`,
    motivo: MOTIVOS[itemPrioritario],
  };
}

module.exports = { revisarItems };