// Ejercicio 096 - Logica general: priorizacion de items por estado

const PRIORIDADES = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const ACCIONES = {
  bloqueado: "revisar bloqueado",
  pendiente: "revisar pendiente",
  aprobado: "revisar aprobado",
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "el item aun no ha sido resuelto y requiere seguimiento.",
  aprobado: "el item ya cumplio su proceso, se revisa por control.",
};

function resolverPrioridad(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin items",
      motivo: "no hay elementos para evaluar.",
    };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return {
      accion: "sin items validos",
      motivo: "ningun item coincide con un estado reconocido.",
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

const casoNormal = ["aprobado", "pendiente", "bloqueado"];
console.log(resolverPrioridad(casoNormal));

const casoBorde = [];
console.log(resolverPrioridad(casoBorde));

module.exports = { resolverPrioridad, PRIORIDADES, ACCIONES, MOTIVOS };