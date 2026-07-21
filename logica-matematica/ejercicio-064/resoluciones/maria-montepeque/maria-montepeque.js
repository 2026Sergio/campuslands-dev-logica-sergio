// Ejercicio 064 - Logica matematica: rangos y maximos

const CLASIFICACIONES = [
  { min: 30, max: Infinity, label: 'elite' },
  { min: 20, max: 29, label: 'competitivo' },
  { min: 10, max: 19, label: 'regular' },
  { min: -Infinity, max: 9, label: 'bajo' },
];

function obtenerClasificacion(puntaje) {
  return CLASIFICACIONES.find(({ min, max }) => puntaje >= min && puntaje <= max).label;
}

function calcularPuntaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular un promedio.',
    };
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntaje_final = Math.ceil(promedio + bono - penalizacion);

  return {
    puntaje_final,
    clasificacion: obtenerClasificacion(puntaje_final),
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

const casoNormal = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntaje([], 8, 3);
console.log('Caso borde:', casoBorde);

module.exports = { calcularPuntaje };