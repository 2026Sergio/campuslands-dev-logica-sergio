// Logica matematica 066 - conversion de unidades

const CLASIFICACIONES = [
  { limite: 35, nombre: 'elite' },
  { limite: 25, nombre: 'competitivo' },
  { limite: 15, nombre: 'regular' },
  { limite: -Infinity, nombre: 'bajo' },
];

const clasificar = (puntaje) =>
  CLASIFICACIONES.find(({ limite }) => puntaje >= limite).nombre;

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

const calcularPuntaje = (participantes, bono, penalizacion) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo el promedio de los participantes, se sumo el bono y se resto la penalizacion segun las reglas.',
  };
};

const casoNormal = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntaje([], 8, 3);
console.log('Caso borde:', casoBorde);

module.exports = { calcularPuntaje, clasificar, calcularPromedio };