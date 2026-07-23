// Ejercicio 074 - Calculo de puntaje final y clasificacion de participantes

const CLASIFICACIONES = [
  { minimo: 30, etiqueta: 'elite' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'intermedio' },
  { minimo: -Infinity, etiqueta: 'principiante' },
];

function calcularPromedio(participantes) {
  if (!Array.isArray(participantes) || participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificar(puntajeFinal) {
  const rango = CLASIFICACIONES.find((item) => puntajeFinal >= item.minimo);
  return rango.etiqueta;
}

function evaluarParticipantes(participantes, bono, penalizacion) {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificar(puntajeFinal);
  const explicacion = 'se sumo el bono y se resto la penalizacion segun las reglas.';

  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
}

module.exports = {
  calcularPromedio,
  calcularPuntajeFinal,
  clasificar,
  evaluarParticipantes,
};