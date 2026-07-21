function calcularCombinaciones(total, elegir) {
  function factorial(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado = resultado * i;
    }
    return resultado;
  }
  let combinaciones = factorial(total) / (factorial(elegir) * factorial(total - elegir));
  return "combinaciones: " + combinaciones;
}