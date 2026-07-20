// Ejercicio 099 - Logica matematica: validaciones numericas (formulas quimicas)

const RANGOS_CLASIFICACION = [
  { limite: 15, clasificacion: 'principiante' },
  { limite: 25, clasificacion: 'intermedio' },
  { limite: 35, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function clasificar(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find(({ limite }) => puntajeFinal <= limite);
  return rango.clasificacion;
}

function evaluarParticipantes({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

const casoNormal = evaluarParticipantes({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarParticipantes({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log('Caso borde:', casoBorde);

module.exports = { evaluarParticipantes, calcularPromedio, clasificar };