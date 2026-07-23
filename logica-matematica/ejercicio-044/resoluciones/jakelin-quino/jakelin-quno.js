function verificarRango(participantes, limite) {
  if (participantes.length === 0) return "maximo: 0, estado: fuera del rango";
  let maximo = participantes[0];
  for (let i = 1; i < participantes.length; i++) {
    if (participantes[i] > maximo) maximo = participantes[i];
  }
  let estado = maximo >= limite ? "dentro del rango" : "fuera del rango";
  return "maximo: " + maximo + ", estado: " + estado;
}