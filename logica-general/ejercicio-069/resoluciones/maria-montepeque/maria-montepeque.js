// Ejercicio 069 - Logica general: simulacion de estados

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'revisar aprobado'
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'la regla prioriza tareas en proceso antes de las finalizadas.',
  aprobado: 'no hay riesgos ni tareas pendientes por revisar.'
};

function determinarAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.'
    };
  }

  const validos = items.filter(estado => PRIORIDADES[estado] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'ningun estado reconocido en la lista.'
    };
  }

  const estadoPrioritario = validos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario]
  };
}

const casoNormal = determinarAccion(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = determinarAccion([]);
console.log('Caso borde (vacio):', casoBorde);

const casoNoReconocido = determinarAccion(['desconocido', 'invalido']);
console.log('Caso borde (no reconocido):', casoNoReconocido);

module.exports = { determinarAccion };