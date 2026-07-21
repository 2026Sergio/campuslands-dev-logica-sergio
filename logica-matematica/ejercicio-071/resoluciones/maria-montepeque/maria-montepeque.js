// Logica matematica 071 - conteo combinatorio simple

const RANGOS_CLASIFICACION = [
  { limite: 15, clasificacion: 'novato' },
  { limite: 25, clasificacion: 'intermedio' },
  { limite: 35, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

const clasificarPuntaje = (puntajeFinal) => {
  const rango = RANGOS_CLASIFICACION.find(({ limite }) => puntajeFinal < limite);
  return rango.clasificacion;
};

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

const calcularPuntajeFinal = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: null,
      clasificacion: 'sin_participantes',
      explicacion: 'no hay participantes para calcular el promedio.',
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

module.exports = { calcularPuntajeFinal };

const casoNormal = calcularPuntajeFinal({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntajeFinal({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log('Caso borde:', casoBorde);