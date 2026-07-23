// Ejercicio 095 - Reglas de negocio: dibujo digital

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
  pendiente: 'no hay bloqueados, se revisa lo que sigue en curso.',
  aprobado: 'no hay pendientes ni bloqueados, se revisa lo ya finalizado.',
};

function resolverItemPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.',
    };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  const itemPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[itemPrioritario],
    motivo: MOTIVOS[itemPrioritario],
  };
}

const casoNormal = resolverItemPrioritario(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = resolverItemPrioritario([]);
console.log('Caso borde (arreglo vacio):', casoBorde);

const casoEstadoInvalido = resolverItemPrioritario(['desconocido', 'aprobado']);
console.log('Caso borde (estado no reconocido):', casoEstadoInvalido);

module.exports = { resolverItemPrioritario, PRIORIDADES };