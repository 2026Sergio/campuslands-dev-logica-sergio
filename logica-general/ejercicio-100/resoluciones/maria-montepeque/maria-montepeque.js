// Ejercicio 100 - Estrategias de seleccion

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
  pendiente: 'la regla prioriza tareas en curso antes que las finalizadas.',
  aprobado: 'no hay riesgos ni tareas pendientes por resolver.',
};

function seleccionarEstrategia(items) {
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
      motivo: 'ningun item corresponde a un estado reconocido.',
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

module.exports = { seleccionarEstrategia };

const casoNormal = seleccionarEstrategia(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = seleccionarEstrategia([]);
console.log('Caso borde (vacio):', casoBorde);

const casoInvalido = seleccionarEstrategia(['desconocido', 'otro']);
console.log('Caso borde (estados invalidos):', casoInvalido);