// Ejercicio 085 - Ordenamiento de prioridades (taller mecanico)

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'revisar aprobado',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'las tareas pendientes se atienden antes que las aprobadas.',
  aprobado: 'no hay riesgos ni pendientes por atender.',
};

function determinarItemPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return items.reduce((masUrgente, itemActual) => {
    const prioridadActual = PRIORIDADES[itemActual] ?? 0;
    const prioridadMasUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual > prioridadMasUrgente ? itemActual : masUrgente;
  });
}

function resolverPrioridad(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin items para revisar',
      motivo: 'la lista de items esta vacia.',
    };
  }

  const itemNoReconocido = items.find((item) => !(item in PRIORIDADES));
  if (itemNoReconocido !== undefined) {
    return {
      accion: 'estado no reconocido',
      motivo: `el estado "${itemNoReconocido}" no tiene una regla definida.`,
    };
  }

  const itemPrioritario = determinarItemPrioritario(items);

  return {
    accion: ACCIONES[itemPrioritario],
    motivo: MOTIVOS[itemPrioritario],
  };
}

module.exports = { resolverPrioridad, determinarItemPrioritario };