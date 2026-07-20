function generarSecuencia(inicial, pasos) {
  let resultado = inicial;
  for (let i = 0; i < pasos; i++) {
    resultado = resultado + 2;
  }
  return "ultimo_numero: " + resultado;
}