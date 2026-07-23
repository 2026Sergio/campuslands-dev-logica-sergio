function estadisticasRanking(puntuaciones) {
  if (puntuaciones.length === 0) return "max: 0, min: 0, promedio: 0";
  let maximo = puntuaciones[0];
  let minimo = puntuaciones[0];
  let suma = 0;
  for (let i = 0; i < puntuaciones.length; i++) {
    if (puntuaciones[i] > maximo) maximo = puntuaciones[i];
    if (puntuaciones[i] < minimo) minimo = puntuaciones[i];
    suma = suma + puntuaciones[i];
  }
  let promedio = suma / puntuaciones.length;
  return "max: " + maximo + ", min: " + minimo + ", promedio: " + promedio;
}