// Ejercicio 081 - Clasificacion por reglas (videojuegos competitivos)

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
  pendiente: "no hay bloqueados, se atiende lo pendiente antes de lo aprobado.",
  aprobado: "no hay riesgos ni pendientes, se revisa lo ya aprobado.",
};

function clasificarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin items para revisar", motivo: "la lista de items esta vacia o no es valida." };
  }

  const itemInvalido = items.find((item) => !(item in PRIORIDADES));
  if (itemInvalido !== undefined) {
    return { accion: "estado no reconocido", motivo: `el valor "${itemInvalido}" no coincide con ningun estado valido.` };
  }

  const itemPrioritario = items.reduce((masUrgente, itemActual) =>
    PRIORIDADES[itemActual] > PRIORIDADES[masUrgente] ? itemActual : masUrgente
  );

  return {
    accion: ACCIONES[itemPrioritario],
    motivo: MOTIVOS[itemPrioritario],
  };
}

const casoNormal = ["aprobado", "pendiente", "bloqueado"];
console.log("Caso normal:", clasificarItems(casoNormal));

const casoBorde = [];
console.log("Caso borde (vacio):", clasificarItems(casoBorde));

const casoEstadoInvalido = ["aprobado", "desconocido"];
console.log("Caso estado no reconocido:", clasificarItems(casoEstadoInvalido));

module.exports = { clasificarItems };