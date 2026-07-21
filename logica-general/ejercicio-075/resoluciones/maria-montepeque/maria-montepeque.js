// Ejercicio 075 - reglas de negocio: revision prioritaria de items

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
  pendiente: 'no hay riesgos activos, se revisa lo que sigue en cola.',
  aprobado: 'no hay riesgos ni pendientes, se revisa lo ya aprobado.',
};

function revisarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin items',
      motivo: 'no hay elementos para revisar.',
    };
  }

  const reconocidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (reconocidos.length === 0) {
    return {
      accion: 'sin items reconocidos',
      motivo: 'ningun estado recibido coincide con los estados validos.',
    };
  }

  const estadoPrioritario = reconocidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { revisarItems, PRIORIDADES, ACCIONES, MOTIVOS };

if (require.main === module) {
  console.log('Caso normal:', revisarItems(['aprobado', 'pendiente', 'bloqueado']));
  console.log('Caso borde - array vacio:', revisarItems([]));
  console.log('Caso borde - estados no reconocidos:', revisarItems(['en-revision', 'archivado']));
}