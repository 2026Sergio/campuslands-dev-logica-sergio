function contarParImpar(puntuaciones) {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < puntuaciones.length; i++) {
    if (puntuaciones[i] % 2 === 0) {
      pares = pares + 1;
    } else {
      impares = impares + 1;
    }
  }
  return "pares: " + pares + ", impares: " + impares;
}