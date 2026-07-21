// Ejercicio 094 - Diagnostico de errores

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
  pendiente: 'no hay bloqueados, se revisa lo que sigue en curso.',
  aprobado: 'no hay bloqueados ni pendientes, se revisa lo ya finalizado.',
};

function diagnosticar(items) {
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

  const estadoPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] > PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

const casoNormal = ['aprobado', 'pendiente', 'bloqueado'];
console.log('Caso normal:', diagnosticar(casoNormal));

const casoBorde = [];
console.log('Caso borde (vacio):', diagnosticar(casoBorde));

const casoInvalido = ['desconocido', 'inexistente'];
console.log('Caso borde (estados invalidos):', diagnosticar(casoInvalido));

module.exports = { diagnosticar };