// Ejercicio 077 - tablas de decision

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'revisar aprobado',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'los pendientes requieren seguimiento antes de cerrar el ciclo.',
  aprobado: 'los aprobados no representan riesgo inmediato.',
};

function determinarEstadoPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDADES[actual];
    if (prioridadActual === undefined) return masUrgente;
    if (masUrgente === null) return actual;
    return prioridadActual < PRIORIDADES[masUrgente] ? actual : masUrgente;
  }, null);
}

function evaluarItems(items) {
  const estadoPrioritario = determinarEstadoPrioritario(items);

  if (estadoPrioritario === null) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items validos para evaluar.',
    };
  }

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

const casoNormal = evaluarItems(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarItems([]);
console.log('Caso borde (vacio):', casoBorde);

const casoBordeInvalido = evaluarItems(['desconocido', 'aprobado']);
console.log('Caso borde (valor no reconocido):', casoBordeInvalido);

module.exports = { evaluarItems, determinarEstadoPrioritario };