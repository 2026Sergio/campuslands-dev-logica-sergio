// Ejercicio 067 - Deteccion de inconsistencias en playlist musical

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'sin accion requerida',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'hay elementos sin resolver que requieren seguimiento.',
  aprobado: 'todos los elementos de la playlist estan en orden.',
};

function detectarInconsistencia(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin elementos para revisar',
      motivo: 'la playlist no contiene items.',
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'estado no reconocido',
      motivo: 'ningun item coincide con un estado valido.',
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

module.exports = { detectarInconsistencia };