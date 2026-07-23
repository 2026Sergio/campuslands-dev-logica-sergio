// Ejercicio 078 - Normalizacion de puntajes

const RANGOS_CLASIFICACION = [
  { limite: 14, clasificacion: 'bajo' },
  { limite: 24, clasificacion: 'regular' },
  { limite: 34, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

const calcularPromedio = (participantes) => {
  if (!Array.isArray(participantes) || participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
};

const calcularPuntajeFinal = ({ participantes, bono = 0, penalizacion = 0 }) => {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio) + bono - penalizacion;
};

const clasificarPuntaje = (puntaje) => {
  const rango = RANGOS_CLASIFICACION.find(({ limite }) => puntaje <= limite);
  return rango.clasificacion;
};

const normalizarPuntaje = (datos) => {
  const puntajeFinal = calcularPuntajeFinal(datos);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  const explicacion = `se sumo el bono (${datos.bono ?? 0}) y se resto la penalizacion (${datos.penalizacion ?? 0}) segun las reglas.`;

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion,
  };
};

const casoNormal = {
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
};

console.log('Caso normal:', normalizarPuntaje(casoNormal));

const casoBorde = {
  participantes: [],
  bono: 5,
  penalizacion: 2,
};

console.log('Caso borde:', normalizarPuntaje(casoBorde));

const casoNegativo = {
  participantes: [4, 6],
  bono: 1,
  penalizacion: 20,
};

console.log('Caso penalizacion alta:', normalizarPuntaje(casoNegativo));

module.exports = { normalizarPuntaje, calcularPromedio, calcularPuntajeFinal, clasificarPuntaje };