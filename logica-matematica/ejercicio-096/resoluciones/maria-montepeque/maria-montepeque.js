// Ejercicio 096 - Presupuestos y descuentos

const RANGOS_CLASIFICACION = [
  { limite: 10, clasificacion: "bajo" },
  { limite: 20, clasificacion: "regular" },
  { limite: 40, clasificacion: "competitivo" },
  { limite: Infinity, clasificacion: "elite" },
];

function calcularPromedio(participantes) {
  if (participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
}

function calcularPuntajeFinal(promedio, bono, penalizacion) {
  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntaje) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntaje < r.limite);
  return rango.clasificacion;
}

function evaluarPresupuesto({ participantes, bono, penalizacion }) {
  const promedio = calcularPromedio(participantes);
  const puntajeFinal = calcularPuntajeFinal(promedio, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion:
      "se sumo el bono y se resto la penalizacion segun las reglas.",
  };
}

module.exports = { evaluarPresupuesto };

const casoNormal = {
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
};
console.log("Caso normal:", evaluarPresupuesto(casoNormal));

const casoBorde = {
  participantes: [],
  bono: 5,
  penalizacion: 2,
};
console.log("Caso borde:", evaluarPresupuesto(casoBorde));