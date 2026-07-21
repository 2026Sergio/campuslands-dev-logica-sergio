// Ejercicio 076 - Logica general: matrices simples

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'mantener aprobado',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'la regla atiende tareas en curso antes de las finalizadas.',
  aprobado: 'la regla no requiere accion sobre tareas ya aprobadas.',
};

function evaluarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin datos',
      motivo: 'no hay items para evaluar.',
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin datos',
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

module.exports = { evaluarItems, PRIORIDADES, ACCIONES, MOTIVOS };