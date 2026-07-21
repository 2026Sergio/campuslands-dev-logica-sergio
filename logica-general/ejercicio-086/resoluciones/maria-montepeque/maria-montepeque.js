// Ejercicio 086 - Busqueda de elementos

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay elementos bloqueados, se revisa lo pendiente.',
  aprobado: 'no hay riesgos ni pendientes, se revisa lo aprobado.',
};

function buscarElementoPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin elementos para revisar', motivo: 'la lista de items esta vacia o no es valida.' };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return { accion: 'sin elementos reconocidos', motivo: 'ningun item coincide con un estado valido.' };
  }

  const itemPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${itemPrioritario}`,
    motivo: MOTIVOS[itemPrioritario],
  };
}

const casoNormal = buscarElementoPrioritario(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = buscarElementoPrioritario([]);
console.log('Caso borde (vacio):', casoBorde);

const casoSinBloqueados = buscarElementoPrioritario(['aprobado', 'pendiente']);
console.log('Caso sin bloqueados:', casoSinBloqueados);

module.exports = { buscarElementoPrioritario, PRIORIDADES, MOTIVOS };