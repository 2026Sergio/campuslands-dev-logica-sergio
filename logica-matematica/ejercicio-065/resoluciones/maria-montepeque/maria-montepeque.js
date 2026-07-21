// Ejercicio 065 - Logica matematica: minimos y limites

const LIMITE_MINIMO = 0;
const LIMITE_MAXIMO = 100;

const RANGOS_CLASIFICACION = [
  { minimo: 35, etiqueta: "elite" },
  { minimo: 25, etiqueta: "competitivo" },
  { minimo: 15, etiqueta: "en desarrollo" },
  { minimo: 0, etiqueta: "principiante" },
];

function clasificar(puntaje) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntaje >= r.minimo);
  return rango.etiqueta;
}

function limitar(valor, minimo, maximo) {
  return Math.min(Math.max(valor, minimo), maximo);
}

function calcularPuntaje({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin datos",
      explicacion: "no hay participantes para calcular el puntaje.",
    };
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntajeCrudo = promedio + bono - penalizacion;
  const puntajeLimitado = limitar(puntajeCrudo, LIMITE_MINIMO, LIMITE_MAXIMO);
  const puntaje_final = Math.ceil(puntajeLimitado);
  const clasificacion = clasificar(puntaje_final);

  return {
    puntaje_final,
    clasificacion,
    explicacion: "se promedio a los participantes, se sumo el bono, se resto la penalizacion y se aplicaron los limites minimo y maximo.",
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

const casoLimiteSuperior = calcularPuntaje({
  participantes: [95, 98, 100],
  bono: 20,
  penalizacion: 0,
});
console.log("Caso limite superior:", casoLimiteSuperior);

const casoLimiteInferior = calcularPuntaje({
  participantes: [2, 1, 0],
  bono: 0,
  penalizacion: 10,
});
console.log("Caso limite inferior:", casoLimiteInferior);