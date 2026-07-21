// Ejercicio 083 - Logica general: toma de decisiones en torneo de esports

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
  pendiente: 'no hay bloqueados, se atiende lo pendiente antes de lo aprobado.',
  aprobado: 'no hay riesgos ni pendientes, se revisa por completitud.',
};

function obtenerEstadoMasUrgente(items) {
  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return null;
  }

  return itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );
}

function decidirAccion(items, prioridad) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.',
    };
  }

  const estadoUrgente = obtenerEstadoMasUrgente(items);

  if (estadoUrgente === null) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  return {
    accion: ACCIONES[estadoUrgente],
    motivo: MOTIVOS[estadoUrgente],
  };
}

const casoNormal = decidirAccion(['aprobado', 'pendiente', 'bloqueado'], 'alta');
console.log('Caso normal:', casoNormal);

const casoBorde = decidirAccion([], 'alta');
console.log('Caso borde (arreglo vacio):', casoBorde);

const casoEstadoInvalido = decidirAccion(['desconocido', 'invalido'], 'alta');
console.log('Caso borde (estados no reconocidos):', casoEstadoInvalido);

module.exports = { decidirAccion, obtenerEstadoMasUrgente };