// Logica matematica 097 - estadisticas de ranking

const RANGOS_CLASIFICACION = [
  { min: -Infinity, max: 9, etiqueta: 'bajo' },
  { min: 10, max: 19, etiqueta: 'regular' },
  { min: 20, max: 29, etiqueta: 'competitivo' },
  { min: 30, max: Infinity, etiqueta: 'elite' },
];

function calcularMediana(numeros) {
  if (numeros.length === 0) return 0;
  const ordenado = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenado.length / 2);
  return ordenado.length % 2 === 0
    ? (ordenado[mitad - 1] + ordenado[mitad]) / 2
    : ordenado[mitad];
}

function clasificar(puntaje) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntaje >= r.min && puntaje <= r.max);
  return rango.etiqueta;
}

function calcularEstadisticasRanking({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: clasificar(0),
      explicacion: 'no hay participantes para calcular la mediana, se asume puntaje base 0.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.round(mediana + bono - penalizacion);
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo la mediana de los participantes, se sumo el bono, se resto la penalizacion y se redondeo al entero mas cercano.',
  };
}

module.exports = { calcularEstadisticasRanking, calcularMediana, clasificar };