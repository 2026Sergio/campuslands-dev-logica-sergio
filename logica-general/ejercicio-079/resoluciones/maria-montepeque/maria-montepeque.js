// Logica matematica 079 - validaciones numericas

const CLASIFICACIONES = [
  { minimo: 30, etiqueta: 'excelente' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo' },
];

function calcularPromedio(participantes) {
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(promedio, bono, penalizacion) {
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntajeFinal) {
  const clasificacion = CLASIFICACIONES.find((rango) => puntajeFinal >= rango.minimo);
  return clasificacion.etiqueta;
}

function evaluarParticipantes(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: null,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular un puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = calcularPuntajeFinal(promedio, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se promedio a los participantes, se sumo el bono y se resto la penalizacion, redondeando hacia arriba.',
  };
}

const casoNormal = evaluarParticipantes([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarParticipantes([], 5, 2);
console.log('Caso borde (sin participantes):', casoBorde);

module.exports = { evaluarParticipantes, calcularPromedio, calcularPuntajeFinal, clasificarPuntaje };