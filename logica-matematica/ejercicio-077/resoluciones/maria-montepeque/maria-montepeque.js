// Logica matematica 077 - estadisticas de ranking

const RANGOS_CLASIFICACION = [
  { min: 30, clasificacion: 'elite' },
  { min: 20, clasificacion: 'competitivo' },
  { min: 10, clasificacion: 'en desarrollo' },
  { min: -Infinity, clasificacion: 'inicial' },
];

const calcularPromedio = (participantes) =>
  participantes.reduce((suma, puntaje) => suma + puntaje, 0) / participantes.length;

const calcularPuntajeFinal = (promedio, bono, penalizacion) =>
  Math.ceil(promedio + bono - penalizacion);

const clasificarPuntaje = (puntajeFinal) =>
  RANGOS_CLASIFICACION.find(({ min }) => puntajeFinal >= min).clasificacion;

const generarExplicacion = (promedio, bono, penalizacion, puntajeFinal) =>
  `se calculo el promedio de los participantes (${promedio}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}), redondeando hacia arriba para obtener ${puntajeFinal}.`;

const evaluarRanking = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular estadisticas.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = calcularPuntajeFinal(promedio, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  const explicacion = generarExplicacion(promedio, bono, penalizacion, puntajeFinal);

  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
};

module.exports = { evaluarRanking, calcularPromedio, calcularPuntajeFinal, clasificarPuntaje };