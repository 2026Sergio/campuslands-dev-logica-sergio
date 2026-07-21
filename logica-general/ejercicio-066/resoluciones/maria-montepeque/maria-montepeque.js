// Ejercicio 066 - Busqueda de elementos: autos hiperdeportivos

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
  pendiente: 'la regla prioriza pendientes antes de tareas aprobadas.',
  aprobado: 'la regla revisa aprobados solo cuando no hay riesgos ni pendientes.',
};

function buscarElementoPrioritario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin items para revisar',
      motivo: 'la lista de items esta vacia.',
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin items validos para revisar',
      motivo: 'ningun item coincide con un estado reconocido.',
    };
  }

  const estadoPrioritario = validos.reduce((masPrioritario, actual) =>
    PRIORIDADES[actual] > PRIORIDADES[masPrioritario] ? actual : masPrioritario
  );

  return {
    accion: ACCIONES[estadoPrioritario],
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { buscarElementoPrioritario, PRIORIDADES };

const casoEjemplo = buscarElementoPrioritario(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso ejemplo:', casoEjemplo);

const casoNormal = buscarElementoPrioritario(['pendiente', 'aprobado']);
console.log('Caso normal:', casoNormal);

const casoBorde = buscarElementoPrioritario([]);
console.log('Caso borde (vacio):', casoBorde);

const casoInvalido = buscarElementoPrioritario(['descartado', 'sin-registro']);
console.log('Caso borde (estados invalidos):', casoInvalido);