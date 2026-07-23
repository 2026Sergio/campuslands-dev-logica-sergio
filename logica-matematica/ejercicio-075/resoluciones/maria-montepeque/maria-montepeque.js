// Logica matematica 075 - puntaje final y clasificacion de participantes

const CLASIFICACIONES = [
  { minimo: 30, etiqueta: 'excelente' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'bajo' },
];

function calcularPromedio(participantes) {
  if (!Array.isArray(participantes) || participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function clasificarPuntaje(puntaje) {
  const nivel = CLASIFICACIONES.find(({ minimo }) => puntaje >= minimo);
  return nivel.etiqueta;
}

function calcularPuntajeFinal({ participantes, bono, penalizacion }) {
  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  const explicacion = 'se sumo el bono y se resto la penalizacion segun las reglas.';

  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
}

const casoNormal = {
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
};

const casoBorde = {
  participantes: [],
  bono: 5,
  penalizacion: 2,
};

console.log('Caso normal:', calcularPuntajeFinal(casoNormal));
console.log('Caso borde:', calcularPuntajeFinal(casoBorde));

module.exports = { calcularPuntajeFinal, calcularPromedio, clasificarPuntaje };