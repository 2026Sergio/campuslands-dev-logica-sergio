function simularCrecimiento(inicial, incremento, pasos) {
  let valor = inicial;
  for (let i = 0; i < pasos; i++) {
    valor = valor + incremento;
  }
  return "valor_final: " + valor;
}