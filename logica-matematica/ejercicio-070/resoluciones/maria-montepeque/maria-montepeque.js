// Logica Matematica 070 - Redondeo y Precision

function calcularMediana(participantes) {
  if (participantes.length === 0) return 0;
  const ordenados = [...participantes].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

const RANGOS_CLASIFICACION = [
  { limite: 15, clasificacion: 'bajo' },
  { limite: 25, clasificacion: 'intermedio' },
  { limite: 35, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

function clasificarPuntaje(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje < rango.limite).clasificacion;
}

function calcularPuntajeFinal({ participantes, bono = 0, penalizacion = 0 }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: clasificarPuntaje(0),
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.round(mediana + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

module.exports = { calcularMediana, clasificarPuntaje, calcularPuntajeFinal };

const casoNormal = calcularPuntajeFinal({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 });
console.log('Caso normal:', casoNormal);

const casoBorde = calcularPuntajeFinal({ participantes: [], bono: 5, penalizacion: 2 });
console.log('Caso borde:', casoBorde);

const casoImpar = calcularPuntajeFinal({ participantes: [10, 20, 30], bono: 0, penalizacion: 0 });
console.log('Caso impar (control):', casoImpar);