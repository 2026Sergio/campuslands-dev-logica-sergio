function tablaDecision(condicion, valor) {
  if (condicion === true && valor > 10) {
    return "A";
  } else if (condicion === true && valor <= 10) {
    return "B";
  } else if (condicion === false && valor > 10) {
    return "C";
  } else {
    return "D";
  }
}