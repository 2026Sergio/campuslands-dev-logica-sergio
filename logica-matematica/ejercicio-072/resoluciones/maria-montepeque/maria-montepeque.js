// Logica matematica 072 - probabilidad basica

const TABLA_CLASIFICACION = [
  { minimo: 30, clasificacion: 'elite' },
  { minimo: 20, clasificacion: 'competitivo' },
  { minimo: 10, clasificacion: 'amateur' },
  { minimo: -Infinity, clasificacion: 'principiante' },
];

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

const clasificarPuntaje = (puntaje) =>
  TABLA_CLASIFICACION.find((rango) => puntaje >= rango.minimo).clasificacion;

const calcularResultado = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeBase = promedio + bono - penalizacion;
  const puntaje_final = Math.ceil(puntajeBase);
  const clasificacion = clasificarPuntaje(puntaje_final);

  return {
    puntaje_final,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
};

module.exports = { calcularResultado, calcularPromedio, clasificarPuntaje };

if (require.main === module) {
  const casoNormal = calcularResultado({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  });
  console.log('Caso normal:', casoNormal);

  const casoBorde = calcularResultado({
    participantes: [],
    bono: 5,
    penalizacion: 2,
  });
  console.log('Caso borde:', casoBorde);

  const casoAmateur = calcularResultado({
    participantes: [5, 8, 10],
    bono: 2,
    penalizacion: 1,
  });
  console.log('Caso amateur:', casoAmateur);
}