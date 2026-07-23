// Ejercicio 091 - Logica matematica - Conteo combinatorio simple (kickboxing)

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

function clasificar(puntajeFinal) {
  const encontrada = CLASIFICACIONES.find((rango) => puntajeFinal < rango.limite);
  return encontrada.nombre;
}

function evaluarParticipantes({ participantes, bono, penalizacion }) {
  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio) + bono - penalizacion;
  const clasificacion = clasificar(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion:
      "se calculo el promedio de los participantes, se redondeo hacia arriba, se sumo el bono y se resto la penalizacion.",
  };
}

module.exports = { evaluarParticipantes };

if (require.main === module) {
  const casoNormal = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  };
  console.log("Caso normal:", evaluarParticipantes(casoNormal));

  const casoBorde = {
    participantes: [],
    bono: 5,
    penalizacion: 2,
  };
  console.log("Caso borde:", evaluarParticipantes(casoBorde));
}