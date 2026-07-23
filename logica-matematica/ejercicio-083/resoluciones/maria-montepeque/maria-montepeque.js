// Logica matematica 083 - promedios y medianas

const RANGOS_CLASIFICACION = [
  { min: 30, etiqueta: "elite" },
  { min: 20, etiqueta: "competitivo" },
  { min: 10, etiqueta: "regular" },
  { min: -Infinity, etiqueta: "principiante" },
];

function calcularMediana(participantes) {
  const ordenados = [...participantes].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }

  return ordenados[mitad];
}

function calcularPuntajeFinal(mediana, bono, penalizacion) {
  return Math.round(mediana + bono - penalizacion);
}

function clasificarPuntaje(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntajeFinal >= r.min);
  return rango.etiqueta;
}

function evaluarTorneo({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin_datos",
      explicacion: "no hay participantes para calcular la mediana.",
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = calcularPuntajeFinal(mediana, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se calculo la mediana de los participantes, se sumo el bono y se resto la penalizacion, redondeando al entero mas cercano.",
  };
}

const casoNormal = {
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
};
console.log("Caso normal:", evaluarTorneo(casoNormal));

const casoBorde = {
  participantes: [],
  bono: 5,
  penalizacion: 2,
};
console.log("Caso borde:", evaluarTorneo(casoBorde));

const casoImpar = {
  participantes: [10, 15, 40],
  bono: 2,
  penalizacion: 1,
};
console.log("Caso numero impar de participantes:", evaluarTorneo(casoImpar));

module.exports = { evaluarTorneo, calcularMediana, calcularPuntajeFinal, clasificarPuntaje };