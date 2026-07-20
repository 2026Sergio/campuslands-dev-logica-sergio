function redondearDosDecimales(numero) {
  let redondeado = Math.round(numero * 100) / 100;
  return "redondeado: " + redondeado.toFixed(2);
}