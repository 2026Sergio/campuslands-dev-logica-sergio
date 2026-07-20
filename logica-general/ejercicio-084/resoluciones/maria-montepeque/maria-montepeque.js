// Ejercicio 084 - Filtros por condiciones (inventario de motos)

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
  pendiente: 'no hay bloqueos, se atiende lo pendiente antes de lo aprobado.',
  aprobado: 'no hay riesgos ni pendientes, se revisa lo aprobado por control.',
};

function obtenerEstadoPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return null;
  }

  return itemsValidos.reduce((masPrioritario, actual) =>
    PRIORIDADES[actual] > PRIORIDADES[masPrioritario] ? actual : masPrioritario
  );
}

function resolverInventario(items) {
  const estado = obtenerEstadoPrioritario(items);

  if (!estado) {
    return {
      accion: 'sin accion',
      motivo: 'no se encontraron items validos para evaluar.',
    };
  }

  return {
    accion: ACCIONES[estado],
    motivo: MOTIVOS[estado],
  };
}

module.exports = { resolverInventario, obtenerEstadoPrioritario, PRIORIDADES };

const casoNormal = ['aprobado', 'pendiente', 'bloqueado'];
console.log('Caso normal:', resolverInventario(casoNormal));

const casoBorde = [];
console.log('Caso borde (vacio):', resolverInventario(casoBorde));

const casoSinBloqueados = ['aprobado', 'pendiente', 'aprobado'];
console.log('Caso sin bloqueados:', resolverInventario(casoSinBloqueados));

const casoInvalidos = ['desconocido', 'otro'];
console.log('Caso valores invalidos:', resolverInventario(casoInvalidos));