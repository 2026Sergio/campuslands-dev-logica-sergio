// Ejercicio 094 - Logica matematica - areas y perimetros

const CLASIFICACIONES = [
  { limite: 15, nombre: 'principiante' },
  { limite: 25, nombre: 'intermedio' },
  { limite: 35, nombre: 'competitivo' },
  { limite: Infinity, nombre: 'elite' },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function clasificarPuntaje(puntaje) {
  const clasificacion = CLASIFICACIONES.find((rango) => puntaje <= rango.limite);
  return clasificacion.nombre;
}

function calcularResultado({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
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
}

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

module.exports = { calcularResultado };