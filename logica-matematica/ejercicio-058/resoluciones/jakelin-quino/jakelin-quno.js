function normalizarPuntajes(puntajes, maximo) {
  let normalizados = [];
  for (let i = 0; i < puntajes.length; i++) {
    let valor = (puntajes[i] / maximo) * 100;
    normalizados.push(parseFloat(valor.toFixed(2)));
  }
  return "normalizados: " + normalizados;
}