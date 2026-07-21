// Logica matematica 086 - conversion de unidades

const RANGOS_CLASIFICACION = [
  { limite: 15, nombre: 'principiante' },
  { limite: 22, nombre: 'intermedio' },
  { limite: 30, nombre: 'competitivo' },
  { limite: Infinity, nombre: 'elite' },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find(({ limite }) => puntajeFinal <= limite);
  return rango.nombre;
}

function evaluarCarrera({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no se recibieron participantes para calcular el puntaje.',
    };
  }

  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo el promedio de los participantes, se sumo el bono y se resto la penalizacion, redondeando hacia arriba.',
  };
}

module.exports = { evaluarCarrera };

const casoEjemplo = evaluarCarrera({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso ejemplo:', casoEjemplo);

const casoBorde = evaluarCarrera({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log('Caso borde:', casoBorde);