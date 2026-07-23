function calcularProbabilidad(favorables, totales) {
  let probabilidad = (favorables / totales) * 100;
  return "probabilidad: " + probabilidad + "%";
}