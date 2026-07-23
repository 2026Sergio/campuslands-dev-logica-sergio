function calcularRanking(participantes, bono = 0, penalizacion = 0) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin datos",
      explicacion: "no hay participantes para evaluar."
    };
  }

  const sumaPuntajes = participantes.reduce((acc, p) => acc + p, 0);
  const promedioBase = sumaPuntajes / participantes.length;
  const puntajeFinal = Math.round(promedioBase + bono - penalizacion);

  let clasificacion = "inicial";
  if (puntajeFinal >= 30) {
    clasificacion = "elite";
  } else if (puntajeFinal >= 20) {
    clasificacion = "competitivo";
  }

  return {
    puntaje_final: puntajeFinal,
    clasificacion: clasificacion,
    explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
  };
}

console.log(calcularRanking([12, 18, 25, 30], 8, 3));
console.log(calcularRanking([], 8, 3));
console.log(calcularRanking([5, 10], 0, 15));