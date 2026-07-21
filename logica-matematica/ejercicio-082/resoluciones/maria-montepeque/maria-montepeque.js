// Ejercicio 082 - Porcentajes y proporciones (ranking futbol sala)

const RANGOS_CLASIFICACION = [
  { minimo: 30, etiqueta: 'elite' },
  { minimo: 20, etiqueta: 'competitivo' },
  { minimo: 10, etiqueta: 'regular' },
  { minimo: -Infinity, etiqueta: 'principiante' },
];

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, puntaje) => acumulado + puntaje, 0) / participantes.length;

const calcularPuntajeFinal = (participantes, bono, penalizacion) => {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
};

const clasificarPuntaje = (puntajeFinal) => {
  const rango = RANGOS_CLASIFICACION.find(({ minimo }) => puntajeFinal >= minimo);
  return rango.etiqueta;
};

const generarExplicacion = (puntajeFinal, clasificacion) =>
  `se sumo el bono y se resto la penalizacion segun las reglas, obteniendo un puntaje de ${puntajeFinal} clasificado como ${clasificacion}.`;

const evaluarRanking = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: generarExplicacion(puntajeFinal, clasificacion),
  };
};

const casoNormal = evaluarRanking({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarRanking({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log('Caso borde:', casoBorde);

module.exports = { evaluarRanking, calcularPuntajeFinal, clasificarPuntaje };