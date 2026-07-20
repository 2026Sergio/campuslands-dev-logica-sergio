// Logica matematica 090 - redondeo y precision

const CLASIFICACIONES = [
  { limite: 15, nombre: "principiante" },
  { limite: 25, nombre: "intermedio" },
  { limite: 35, nombre: "competitivo" },
  { limite: Infinity, nombre: "elite" },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  const promedio = calcularPromedio(participantes);
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntaje) {
  const clasificacion = CLASIFICACIONES.find((rango) => puntaje <= rango.limite);
  return clasificacion.nombre;
}

function generarExplicacion(puntaje, clasificacion) {
  return `se sumo el bono y se resto la penalizacion segun las reglas, dando un puntaje de ${puntaje} clasificado como ${clasificacion}.`;
}

function resolverReto({ participantes, bono, penalizacion }) {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  const explicacion = generarExplicacion(puntajeFinal, clasificacion);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion,
  };
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

console.log("Caso normal:", resolverReto(casoNormal));
console.log("Caso borde:", resolverReto(casoBorde));

module.exports = { resolverReto, calcularPuntajeFinal, clasificarPuntaje };