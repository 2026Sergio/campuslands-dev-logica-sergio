function resolverCaso(valor) {
  if (valor > 10) {
    return "accion A";
  } else if (valor >= 5 && valor <= 10) {
    return "accion B";
  } else {
    return "accion C";
  }
}