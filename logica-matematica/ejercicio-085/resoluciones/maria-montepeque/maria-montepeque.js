// Logica matematica 085 - minimos y limites

const CLASIFICACIONES = [
  { limite: 15, nombre: "bajo" },
  { limite: 25, nombre: "regular" },
  { limite: 35, nombre: "competitivo" },
  { limite: Infinity, nombre: "elite" },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acc, valor) => acc + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntaje) {
  const encontrada = CLASIFICACIONES.find((rango) => puntaje < rango.limite);
  return encontrada.nombre;
}

function evaluarTaller({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin_datos",
      explicacion: "no hay participantes para calcular el puntaje.",
    };
  }

  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se sumo el bono y se resto la penalizacion segun las reglas.",
  };
}

const casoNormal = evaluarTaller({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log("Caso normal:", casoNormal);

const casoBorde = evaluarTaller({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log("Caso borde:", casoBorde);

module.exports = { evaluarTaller, calcularPromedio, calcularPuntajeFinal, clasificarPuntaje };