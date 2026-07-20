// Logica matematica 080 - simulaciones con formulas

const RANGOS_CLASIFICACION = [
  { minimo: 30, etiqueta: 'excelente' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo' },
];

const calcularPromedio = (participantes) => {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
};

const clasificarPuntaje = (puntajeFinal) =>
  RANGOS_CLASIFICACION.find((rango) => puntajeFinal >= rango.minimo).etiqueta;

const resolverReto = (participantes, bono, penalizacion) => {
  if (participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
};

module.exports = { resolverReto, calcularPromedio, clasificarPuntaje };