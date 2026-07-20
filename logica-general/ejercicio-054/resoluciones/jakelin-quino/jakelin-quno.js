function diagnosticarError(codigo) {
  if (codigo === 1) {
    return "error de conexion";
  } else if (codigo === 2) {
    return "error de datos";
  } else if (codigo === 3) {
    return "error de sistema";
  } else {
    return "error desconocido";
  }
}