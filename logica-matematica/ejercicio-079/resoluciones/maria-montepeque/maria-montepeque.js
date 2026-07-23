// Ejercicio 079 - Inventarios logicos (logica general)

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
  pendiente: "no hay bloqueados, se revisan pendientes antes que aprobados.",
  aprobado: "no hay riesgos ni pendientes, se revisan los aprobados por control.",
};

function resolverInventario(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin accion",
      motivo: "no hay items para procesar en el inventario.",
    };
  }

  const validos = items.filter((item) => PRIORIDADES[item] !== undefined);

  if (validos.length === 0) {
    return {
      accion: "sin accion",
      motivo: "ningun item tiene un estado reconocido.",
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

module.exports = { resolverInventario };

const casoNormal = resolverInventario(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = resolverInventario([]);
console.log("Caso borde (array vacio):", casoBorde);

const casoNoReconocido = resolverInventario(["desconocido", "otro"]);
console.log("Caso borde (sin estados reconocidos):", casoNoReconocido);

const casoMixto = resolverInventario(["aprobado", "desconocido", "pendiente"]);
console.log("Caso mixto (uno invalido, uno pendiente):", casoMixto);