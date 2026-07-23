// Ejercicio 099 - Inventarios logicos (formulas quimicas)

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
  aprobado: 'no hay riesgos ni pendientes, se revisa lo ya finalizado.',
};

function resolverInventario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para evaluar.',
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  const estadoPrioritario = validos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { resolverInventario };