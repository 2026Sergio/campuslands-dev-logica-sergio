// Ejercicio 080 - Estrategias de seleccion

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'dar seguimiento a pendiente',
  aprobado: 'continuar proceso normal',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'las tareas pendientes requieren seguimiento antes de finalizar.',
  aprobado: 'los elementos aprobados no requieren accion inmediata.',
};

function seleccionarEstrategia(datos) {
  const { items } = datos;

  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay elementos para evaluar.',
    };
  }

  const estadoPrioritario = items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDADES[actual] ?? 0;
    const prioridadMasUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual > prioridadMasUrgente ? actual : masUrgente;
  }, null);

  if (!(estadoPrioritario in ACCIONES)) {
    return {
      accion: 'sin accion',
      motivo: 'ningun estado reconocido fue encontrado en los items.',
    };
  }

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { seleccionarEstrategia };