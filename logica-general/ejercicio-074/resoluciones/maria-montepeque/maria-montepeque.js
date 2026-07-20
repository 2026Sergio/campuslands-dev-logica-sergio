// Logica general 074 - diagnostico de errores

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
  pendiente: 'las tareas pendientes requieren seguimiento antes de cerrar el ciclo.',
  aprobado: 'las tareas aprobadas se revisan al final para confirmar el cierre.',
};

function diagnosticarErrores(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay items para diagnosticar.',
    };
  }

  const validos = items.filter((estado) => PRIORIDADES[estado] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'ningun item tiene un estado reconocido.',
    };
  }

  const estadoMasUrgente = validos.reduce((masUrgente, estadoActual) =>
    PRIORIDADES[estadoActual] < PRIORIDADES[masUrgente] ? estadoActual : masUrgente
  );

  return {
    accion: ACCIONES[estadoMasUrgente],
    motivo: MOTIVOS[estadoMasUrgente],
  };
}

module.exports = { diagnosticarErrores };