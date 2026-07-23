function convertirVelocidad(kmh) {
  let ms = (kmh * 1000) / 3600;
  return "velocidad: " + ms.toFixed(2) + " m/s";
}