// Ejercicio 089 - Logica matematica: modulos y divisibilidad

const RANGOS_CLASIFICACION = [
  { minimo: 30, etiqueta: 'elite' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo' },
];

function calcularPromedio(participantes) {
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (participantes.length === 0) return bono - penalizacion;
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio) + bono - penalizacion;
}

function clasificarPuntaje(puntaje) {
  const rango = RANGOS_CLASIFICACION.find(({ minimo }) => puntaje >= minimo);
  return rango.etiqueta;
}

function evaluarParticipantes({ participantes, bono, penalizacion }) {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

module.exports = { evaluarParticipantes, calcularPuntajeFinal, clasificarPuntaje };