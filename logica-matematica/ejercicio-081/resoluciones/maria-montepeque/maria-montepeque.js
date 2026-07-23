// Ejercicio 081 - Operaciones aritmeticas controladas

const CLASIFICACIONES = [
  { limite: 15, nombre: 'principiante' },
  { limite: 25, nombre: 'intermedio' },
  { limite: 35, nombre: 'competitivo' },
  { limite: Infinity, nombre: 'elite' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const n = ordenados.length;
  const medio = Math.floor(n / 2);

  return n % 2 === 0
    ? (ordenados[medio - 1] + ordenados[medio]) / 2
    : ordenados[medio];
}

function clasificarPuntaje(puntaje) {
  const clasificacion = CLASIFICACIONES.find((rango) => puntaje <= rango.limite);
  return clasificacion.nombre;
}

function calcularPuntajeFinal({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular la mediana.',
    };
  }

  const mediana = calcularMediana(participantes);
  const medianaRedondeada = Math.round(mediana);
  const puntajeFinal = medianaRedondeada + bono - penalizacion;
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo la mediana de los participantes, se redondeo, se sumo el bono y se resto la penalizacion.',
  };
}

module.exports = { calcularPuntajeFinal };