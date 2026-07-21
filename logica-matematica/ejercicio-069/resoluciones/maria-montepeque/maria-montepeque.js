// Ejercicio 069 - Modulos y divisibilidad (logica-matematica)

const RANGOS_CLASIFICACION = [
  { minimo: 35, etiqueta: 'elite' },
  { minimo: 25, etiqueta: 'competitivo' },
  { minimo: 15, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo-rendimiento' },
];

const calcularMediana = (numeros) => {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
};

const clasificarPuntaje = (puntaje) =>
  RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.minimo).etiqueta;

const calcularPuntajeFinal = (participantes, bono, penalizacion) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin-datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.ceil(mediana + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `se calculo la mediana de los participantes (${mediana}), se sumo el bono y se resto la penalizacion, redondeando hacia arriba.`,
  };
};

const casoNormal = calcularPuntajeFinal([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntajeFinal([], 8, 3);
console.log('Caso borde (sin participantes):', casoBorde);

const casoImpar = calcularPuntajeFinal([10, 22, 40], 5, 2);
console.log('Caso con cantidad impar de participantes:', casoImpar);

module.exports = { calcularPuntajeFinal };