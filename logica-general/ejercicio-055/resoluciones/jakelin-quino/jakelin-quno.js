function aplicarReglasNegocio(monto, tipo) {
  if (tipo === "VIP") {
    return monto * 0.8;
  } else if (tipo === "regular") {
    return monto * 0.9;
  } else {
    return monto;
  }
}