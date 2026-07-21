// Logica general 092 - comparacion de opciones

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueados, se revisan tareas en curso.',
  aprobado: 'no hay bloqueados ni pendientes, se revisan tareas cerradas.',
};

function resolverComparacion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.',
    };
  }

  const estadoValido = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (estadoValido.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  const estadoPrioritario = estadoValido.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] > PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { resolverComparacion };

const casoNormal = resolverComparacion(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = resolverComparacion([]);
console.log('Caso borde:', casoBorde);