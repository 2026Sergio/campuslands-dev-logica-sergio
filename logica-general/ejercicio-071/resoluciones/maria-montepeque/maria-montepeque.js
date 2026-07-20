// Ejercicio 071 - Organizacion de listas

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
  aprobado: 'no hay riesgos ni pendientes, se revisa lo aprobado.',
};

function obtenerEstadoMasUrgente(items) {
  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return null;
  }

  return validos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );
}

function procesarLista(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'la lista de items esta vacia o no es valida.',
    };
  }

  const estado = obtenerEstadoMasUrgente(items);

  if (estado === null) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  return {
    accion: ACCIONES[estado],
    motivo: MOTIVOS[estado],
  };
}

module.exports = { procesarLista };

const casoNormal = {
  items: ['aprobado', 'pendiente', 'bloqueado'],
  prioridad: 'alta',
  regla: 'revisar bloqueados primero',
};

console.log('Caso normal:', procesarLista(casoNormal.items));

const casoBorde = {
  items: [],
  prioridad: 'alta',
  regla: 'revisar bloqueados primero',
};

console.log('Caso borde (lista vacia):', procesarLista(casoBorde.items));

const casoDesconocido = {
  items: ['cancelado', 'en-revision'],
  prioridad: 'media',
  regla: 'revisar bloqueados primero',
};

console.log('Caso borde (estados desconocidos):', procesarLista(casoDesconocido.items));