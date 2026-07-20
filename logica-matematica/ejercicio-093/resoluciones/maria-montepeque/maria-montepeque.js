// Ejercicio 093 - coordenadas y distancia

const RANGOS_CLASIFICACION = [
  { min: 30, etiqueta: "elite" },
  { min: 20, etiqueta: "competitivo" },
  { min: 10, etiqueta: "regular" },
  { min: -Infinity, etiqueta: "bajo" },
];

const clasificar = (puntaje) =>
  RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.min).etiqueta;

const calcularPuntajeFinal = ({ participantes, bono, penalizacion }) => {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    throw new Error("La lista de participantes no puede estar vacia.");
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);

  return {
    puntaje_final: puntajeFinal,
    clasificacion: clasificar(puntajeFinal),
    explicacion:
      "se sumo el bono y se resto la penalizacion segun las reglas.",
  };
};

const casoNormal = calcularPuntajeFinal({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log("Caso normal:", casoNormal);

const casoBorde = calcularPuntajeFinal({
  participantes: [5],
  bono: 0,
  penalizacion: 0,
});
console.log("Caso borde:", casoBorde);

module.exports = { calcularPuntajeFinal, clasificar };