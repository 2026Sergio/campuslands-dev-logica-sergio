function verificarInventario(inventario, producto) {
  if (inventario[producto] === undefined) {
    return "no registrado";
  } else if (inventario[producto] > 0) {
    return "disponible";
  } else {
    return "sin stock";
  }
}