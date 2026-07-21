// Logica matematica 084 - rangos y maximos

const RANGOS_CLASIFICACION = [
  { limite: 15, clasificacion: 'bajo' },
  { limite: 25, clasificacion: 'regular' },
  { limite: 35, clasificacion: 'competitivo' },
  { limite: Infinity, clasificacion: 'elite' },
];

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    throw new Error('El arreglo de participantes no puede estar vacio.');
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;

  return Math.ceil(promedio + bono - penalizacion);
}

function clasificarPuntaje(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntajeFinal <= r.limite);
  return rango.clasificacion;
}

function obtenerMaximo(participantes) {
  return Math.max(...participantes);
}

function evaluarInventario(participantes, bono, penalizacion) {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificarPuntaje(puntajeFinal);
  const maximo = obtenerMaximo(participantes);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    maximo_participante: maximo,
    explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

const ejemplo = evaluarInventario([12, 18, 25, 30], 8, 3);
console.log(ejemplo);

module.exports = { calcularPuntajeFinal, clasificarPuntaje, obtenerMaximo, evaluarInventario };