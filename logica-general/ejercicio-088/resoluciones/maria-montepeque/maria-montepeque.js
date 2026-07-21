// Ejercicio 088 - Flujos paso a paso (peliculas de ciencia ficcion)

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
  pendiente: 'no hay bloqueados, se atiende lo pendiente antes de lo aprobado.',
  aprobado: 'no hay bloqueados ni pendientes, se revisa lo aprobado.',
};

function resolverFlujo(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin items', motivo: 'no hay elementos para evaluar.' };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return { accion: 'sin items validos', motivo: 'ningun item coincide con un estado reconocido.' };
  }

  const masUrgente = validos.reduce((actual, item) =>
    PRIORIDADES[item] > PRIORIDADES[actual] ? item : actual
  );

  return {
    accion: ACCIONES[masUrgente],
    motivo: MOTIVOS[masUrgente],
  };
}

module.exports = { resolverFlujo };

const casoNormal = resolverFlujo(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = resolverFlujo([]);
console.log('Caso borde (vacio):', casoBorde);

const casoInvalido = resolverFlujo(['desconocido', 'sin-estado']);
console.log('Caso borde (invalidos):', casoInvalido);