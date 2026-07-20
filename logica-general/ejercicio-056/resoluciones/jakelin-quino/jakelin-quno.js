function sumarMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma = suma + matriz[i][j];
    }
  }
  return "suma: " + suma;
}