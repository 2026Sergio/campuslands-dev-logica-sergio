// Logica general 091 - organizacion de listas (kickboxing)

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
  pendiente: "no hay bloqueados, se atiende lo pendiente antes que lo aprobado.",
  aprobado: "no hay bloqueados ni pendientes, se revisa lo ya aprobado.",
};

function organizarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin items",
      motivo: "no se recibieron items para evaluar.",
    };
  }

  const itemMasUrgente = items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDADES[actual];

    if (prioridadActual === undefined) {
      return masUrgente;
    }

    if (masUrgente === null || prioridadActual < PRIORIDADES[masUrgente]) {
      return actual;
    }

    return masUrgente;
  }, null);

  if (itemMasUrgente === null) {
    return {
      accion: "sin items validos",
      motivo: "ningun item coincide con un estado reconocido.",
    };
  }

  return {
    accion: ACCIONES[itemMasUrgente],
    motivo: MOTIVOS[itemMasUrgente],
  };
}

const casoNormal = organizarItems(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = organizarItems([]);
console.log("Caso borde (arreglo vacio):", casoBorde);

const casoSinBloqueados = organizarItems(["aprobado", "pendiente"]);
console.log("Caso adicional (sin bloqueados):", casoSinBloqueados);

module.exports = { organizarItems };