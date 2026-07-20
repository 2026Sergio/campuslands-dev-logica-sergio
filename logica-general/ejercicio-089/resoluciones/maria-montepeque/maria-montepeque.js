// Logica general 089 - simulacion de estados

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: "revisar bloqueado",
  pendiente: "revisar pendiente",
  aprobado: "revisar aprobado",
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "las tareas pendientes se atienden despues de los riesgos.",
  aprobado: "los items aprobados no requieren atencion inmediata.",
};

function obtenerEstadoMasUrgente(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDADES[actual] ?? Infinity;
    const prioridadUrgente = PRIORIDADES[masUrgente] ?? Infinity;
    return prioridadActual < prioridadUrgente ? actual : masUrgente;
  });
}

function simularEstados(items) {
  const estado = obtenerEstadoMasUrgente(items);

  if (estado === null) {
    return {
      accion: "sin datos",
      motivo: "no se recibieron items para evaluar.",
    };
  }

  if (!(estado in PRIORIDADES)) {
    return {
      accion: "estado no reconocido",
      motivo: `el valor "${estado}" no pertenece a los estados validos.`,
    };
  }

  return {
    accion: ACCIONES[estado],
    motivo: MOTIVOS[estado],
  };
}

const casoNormal = ["aprobado", "pendiente", "bloqueado"];
console.log("Caso normal:", simularEstados(casoNormal));

const casoBorde = [];
console.log("Caso borde (arreglo vacio):", simularEstados(casoBorde));

const casoNoReconocido = ["aprobado", "cancelado"];
console.log("Caso borde (estado no reconocido):", simularEstados(casoNoReconocido));

module.exports = { simularEstados, obtenerEstadoMasUrgente };