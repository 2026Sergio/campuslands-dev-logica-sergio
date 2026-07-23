// Ejercicio 098 - Normalizacion de puntajes

const RANGOS_CLASIFICACION = [
  { min: 30, etiqueta: 'elite' },
  { min: 20, etiqueta: 'competitivo' },
  { min: 10, etiqueta: 'regular' },
  { min: -Infinity, etiqueta: 'bajo' },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function clasificarPuntaje(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.min).etiqueta;
}

function normalizarPuntaje({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntajeFinal: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular un puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio) + bono - penalizacion;
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntajeFinal,
    clasificacion,
    explicacion: 'se redondeo el promedio hacia arriba, se sumo el bono y se resto la penalizacion.',
  };
}

module.exports = { normalizarPuntaje, calcularPromedio, clasificarPuntaje };

const casoNormal = normalizarPuntaje({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso normal:', casoNormal);

const casoBorde = normalizarPuntaje({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log('Caso borde (sin participantes):', casoBorde);

const casoBordeNegativo = normalizarPuntaje({
  participantes: [4, 5],
  bono: 1,
  penalizacion: 10,
});
console.log('Caso borde (puntaje bajo):', casoBordeNegativo);