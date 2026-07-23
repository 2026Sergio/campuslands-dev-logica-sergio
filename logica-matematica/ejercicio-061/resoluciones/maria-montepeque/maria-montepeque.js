// Logica matematica 061 - operaciones aritmeticas controladas

const RANGOS_CLASIFICACION = [
  { minimo: 30, clasificacion: 'elite' },
  { minimo: 20, clasificacion: 'competitivo' },
  { minimo: 10, clasificacion: 'intermedio' },
  { minimo: -Infinity, clasificacion: 'principiante' },
];

const calcularPromedio = (participantes) => {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
};

const calcularPuntajeFinal = (participantes, bono, penalizacion) => {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio) + bono - penalizacion;
};

const clasificarPuntaje = (puntaje) => {
  const rango = RANGOS_CLASIFICACION.find((r) => puntaje >= r.minimo);
  return rango.clasificacion;
};

const procesarReto = ({ participantes, bono, penalizacion }) => {
  if (participantes.length === 0) {
    return {
      puntaje_final: bono - penalizacion,
      clasificacion: clasificarPuntaje(bono - penalizacion),
      explicacion: 'no hay participantes, el puntaje final solo considera el bono y la penalizacion.',
    };
  }

  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);

  return {
    puntaje_final: puntajeFinal,
    clasificacion: clasificarPuntaje(puntajeFinal),
    explicacion: 'se calculo el promedio de participantes redondeado hacia arriba, se sumo el bono y se resto la penalizacion.',
  };
};

module.exports = { procesarReto, calcularPromedio, calcularPuntajeFinal, clasificarPuntaje };