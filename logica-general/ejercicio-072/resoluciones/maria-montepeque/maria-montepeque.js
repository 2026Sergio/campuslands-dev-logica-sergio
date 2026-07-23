// Ejercicio 072 - comparacion de opciones

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
  pendiente: "no hay bloqueados, se revisa lo que sigue en curso.",
  aprobado: "no hay pendientes ni bloqueados, se revisa lo ya finalizado.",
};

function compararOpciones(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin accion",
      motivo: "no hay items para evaluar.",
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: "sin accion",
      motivo: "ningun item tiene un estado reconocido.",
    };
  }

  const masUrgente = validos.reduce((actual, item) =>
    PRIORIDADES[item] < PRIORIDADES[actual] ? item : actual
  );

  return {
    accion: ACCIONES[masUrgente],
    motivo: MOTIVOS[masUrgente],
  };
}

module.exports = { compararOpciones };