function asignarTurno(turno, personas) {
  let resultado = turno % personas;
  if (resultado === 0) {
    resultado = personas;
  }
  return "le toca a la persona: " + resultado;
}