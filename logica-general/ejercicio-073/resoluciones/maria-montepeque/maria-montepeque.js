// Ejercicio 073 - Logica general: resolucion de casos (paracaidismo)

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
  pendiente: 'la regla prioriza tareas en proceso antes que las aprobadas.',
  aprobado: 'no hay riesgos ni tareas pendientes, se revisa lo aprobado.',
};

function determinarAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin acciones',
      motivo: 'no hay elementos para evaluar.',
    };
  }

  const estadoPrioritario = items.reduce((masUrgente, estadoActual) => {
    const prioridadActual = PRIORIDADES[estadoActual] ?? 0;
    const prioridadUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual > prioridadUrgente ? estadoActual : masUrgente;
  });

  const accion = ACCIONES[estadoPrioritario] ?? `revisar ${estadoPrioritario}`;
  const motivo = MOTIVOS[estadoPrioritario] ?? 'no se encontro una regla especifica para este estado.';

  return { accion, motivo };
}

module.exports = { determinarAccion, PRIORIDADES, ACCIONES, MOTIVOS };