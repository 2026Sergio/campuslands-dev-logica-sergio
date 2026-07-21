// Ejercicio 076 - Logica matematica - presupuestos y descuentos

const CLASIFICACIONES = [
  { minimo: 30, etiqueta: 'elite' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }

  return ordenados[mitad];
}

function obtenerClasificacion(puntaje) {
  return CLASIFICACIONES.find((rango) => puntaje >= rango.minimo).etiqueta;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.round(mediana + bono - penalizacion);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `se calculo la mediana de los participantes (${mediana}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}) segun las reglas.`,
  };
}

module.exports = { calcularPuntajeFinal, calcularMediana, obtenerClasificacion };

const casoNormal = calcularPuntajeFinal([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntajeFinal([], 8, 3);
console.log('Caso borde (sin participantes):', casoBorde);

const casoImpar = calcularPuntajeFinal([10, 20, 40], 5, 2);
console.log('Caso adicional (cantidad impar):', casoImpar);