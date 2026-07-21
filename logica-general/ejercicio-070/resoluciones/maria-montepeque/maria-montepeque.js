// Ejercicio 070 - Logica general: lectura de instrucciones

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
  pendiente: 'no hay bloqueados, se atiende lo pendiente antes de lo aprobado.',
  aprobado: 'no hay riesgos ni pendientes, se revisa lo aprobado por control.',
};

function determinarAccion(items) {
  const validos = items.filter((estado) => PRIORIDADES[estado] !== undefined);

  if (validos.length === 0) {
    return {
      accion: 'sin items validos para revisar',
      motivo: 'la lista esta vacia o no contiene estados reconocidos.',
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

function main() {
  const casoNormal = ['aprobado', 'pendiente', 'bloqueado'];
  console.log('Caso normal:', determinarAccion(casoNormal));

  const casoBorde = [];
  console.log('Caso borde:', determinarAccion(casoBorde));

  const casoValorInvalido = ['aprobado', 'desconocido', 'pendiente'];
  console.log('Caso valor invalido:', determinarAccion(casoValorInvalido));
}

main();

module.exports = { determinarAccion, PRIORIDADES, ACCIONES, MOTIVOS };