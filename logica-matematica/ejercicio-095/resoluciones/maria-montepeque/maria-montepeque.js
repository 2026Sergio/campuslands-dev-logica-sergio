// Ejercicio 095 - velocidad tiempo distancia

const RANGOS_CLASIFICACION = [
  { minimo: 30, etiqueta: "elite" },
  { minimo: 20, etiqueta: "competitivo" },
  { minimo: 10, etiqueta: "regular" },
  { minimo: -Infinity, etiqueta: "bajo" },
];

function clasificar(puntaje) {
  const rango = RANGOS_CLASIFICACION.find(({ minimo }) => puntaje >= minimo);
  return rango.etiqueta;
}

function calcularPuntaje({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: clasificar(0),
      explicacion: "no hay participantes para calcular un promedio, se asigna puntaje base 0.",
    };
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se calculo el promedio de participantes, se sumo el bono y se resto la penalizacion, redondeando hacia arriba.",
  };
}

const casoNormal = calcularPuntaje({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log("Caso normal:", casoNormal);

const casoBorde = calcularPuntaje({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log("Caso borde:", casoBorde);

module.exports = { calcularPuntaje, clasificar };