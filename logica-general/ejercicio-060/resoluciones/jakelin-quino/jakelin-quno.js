function seleccionarOpcion(opciones, criterio) {
  if (opciones.length === 0) return "sin opciones";
  let seleccionada = opciones[0];
  for (let i = 1; i < opciones.length; i++) {
    if (criterio === "mayor" && opciones[i] > seleccionada) {
      seleccionada = opciones[i];
    } else if (criterio === "menor" && opciones[i] < seleccionada) {
      seleccionada = opciones[i];
    }
  }
  return "seleccionada: " + seleccionada;
}