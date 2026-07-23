function verificarDivisible(numero, divisor) {
  if (numero % divisor === 0) {
    return numero + " es divisible por " + divisor;
  } else {
    return numero + " no es divisible por " + divisor;
  }
}