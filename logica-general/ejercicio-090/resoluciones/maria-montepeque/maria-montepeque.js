// Ejercicio 090 - Logica general: lectura de instrucciones (viajes y turismo)

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
  pendiente: 'no hay bloqueados, se revisan tareas en curso.',
  aprobado: 'no hay riesgos ni tareas pendientes por revisar.',
};

function resolverPrioridad(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin accion', motivo: 'no hay items para evaluar.' };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return { accion: 'sin accion', motivo: 'ningun item tiene un estado reconocido.' };
  }

  const masUrgente = validos.reduce((actual, item) =>
    PRIORIDADES[item] < PRIORIDADES[actual] ? item : actual
  );

  return {
    accion: ACCIONES[masUrgente],
    motivo: MOTIVOS[masUrgente],
  };
}

const casoNormal = ['aprobado', 'pendiente', 'bloqueado'];
console.log('Caso normal:', resolverPrioridad(casoNormal));

const casoBorde = [];
console.log('Caso borde (vacio):', resolverPrioridad(casoBorde));

const casoDesconocido = ['en-revision', 'archivado'];
console.log('Caso borde (estados no reconocidos):', resolverPrioridad(casoDesconocido));

module.exports = { resolverPrioridad };