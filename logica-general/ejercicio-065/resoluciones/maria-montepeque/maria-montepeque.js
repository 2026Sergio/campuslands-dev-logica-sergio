// Ejercicio 065 - ordenamiento de prioridades

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueos, se atiende lo pendiente antes que lo aprobado.',
  aprobado: 'todos los elementos estan aprobados, no se requiere accion urgente.'
};

function determinarAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin_datos', motivo: 'no hay elementos para evaluar.' };
  }

  const prioritario = items.reduce((actual, siguiente) => {
    const prioridadActual = PRIORIDADES[actual] ?? 0;
    const prioridadSiguiente = PRIORIDADES[siguiente] ?? 0;
    return prioridadSiguiente > prioridadActual ? siguiente : actual;
  });

  return {
    accion: `revisar ${prioritario}`,
    motivo: MOTIVOS[prioritario] ?? 'estado no reconocido, se aplica prioridad minima.'
  };
}

module.exports = { determinarAccion };