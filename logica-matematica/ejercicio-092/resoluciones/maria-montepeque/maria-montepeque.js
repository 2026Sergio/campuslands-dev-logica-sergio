// Ejercicio 092 - Logica matematica: probabilidad basica

const RANGOS_CLASIFICACION = [
  { minimo: 25, etiqueta: "competitivo" },
  { minimo: 15, etiqueta: "estandar" },
  { minimo: 0, etiqueta: "en desarrollo" },
];

const calcularPromedio = (participantes) =>
  participantes.reduce((acumulado, valor) => acumulado + valor, 0) / participantes.length;

const clasificar = (puntaje) =>
  RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.minimo).etiqueta;

const calcularPuntajeFinal = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "en desarrollo",
      explicacion: "no hay participantes para calcular el puntaje.",
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se sumo el bono y se resto la penalizacion segun las reglas.",
  };
};

module.exports = { calcularPuntajeFinal };

if (require.main === module) {
  const casoNormal = calcularPuntajeFinal({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  });
  console.log("Caso normal:", casoNormal);

  const casoBorde = calcularPuntajeFinal({
    participantes: [],
    bono: 5,
    penalizacion: 2,
  });
  console.log("Caso borde:", casoBorde);
}