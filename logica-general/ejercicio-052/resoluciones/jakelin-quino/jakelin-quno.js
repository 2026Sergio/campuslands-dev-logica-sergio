function compararOpciones(opcion1, opcion2) {
  if (opcion1 > opcion2) {
    return "opcion1 es mejor";
  } else if (opcion2 > opcion1) {
    return "opcion2 es mejor";
  } else {
    return "ambas son iguales";
  }
}