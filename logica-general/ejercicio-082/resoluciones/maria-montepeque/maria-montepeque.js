// Ejercicio 082 - Validacion de datos (ranking de futbol sala)

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "no hay bloqueados, se revisan tareas pendientes.",
  aprobado: "no hay bloqueados ni pendientes, todo esta al dia.",
};

function validarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin datos", motivo: "no se recibieron items para revisar." };
  }

  const itemsValidos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (itemsValidos.length === 0) {
    return { accion: "sin datos validos", motivo: "ningun item coincide con un estado reconocido." };
  }

  const estadoPrioritario = itemsValidos.reduce((masUrgente, actual) =>
    PRIORIDADES[actual] < PRIORIDADES[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

const casoNormal = validarItems(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = validarItems([]);
console.log("Caso borde (vacio):", casoBorde);

module.exports = { validarItems };