function aplicarDescuento(precio, descuento) {
  let valorDescuento = precio * (descuento / 100);
  let precioFinal = precio - valorDescuento;
  return "precio_final: " + precioFinal;
}