// Ejercicio 088 - Patrones de puntuacion

const RANGOS_CLASIFICACION = [
  { minimo: 25, etiqueta: 'competitivo' },
  { minimo: 15, etiqueta: 'intermedio' },
  { minimo: 5, etiqueta: 'principiante' },
  { minimo: -Infinity, etiqueta: 'sin clasificar' },
];

function calcularPromedio(participantes) {
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return null;
  }

  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntajeFinal) {
  if (puntajeFinal === null) {
    return 'sin datos';
  }

  const rango = RANGOS_CLASIFICACION.find(({ minimo }) => puntajeFinal >= minimo);
  return rango.etiqueta;
}

function evaluarParticipantes(participantes, bono, penalizacion) {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

const casoEjemplo = evaluarParticipantes([12, 18, 25, 30], 8, 3);
console.log('Caso ejemplo:', casoEjemplo);

const casoNormal = evaluarParticipantes([5, 10, 15], 4, 2);
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarParticipantes([], 5, 2);
console.log('Caso borde (sin participantes):', casoBorde);

module.exports = { calcularPuntajeFinal, clasificarPuntaje, evaluarParticipantes };