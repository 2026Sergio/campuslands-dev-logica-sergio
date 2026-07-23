// Logica matematica 073 - coordenadas y distancia

const NIVELES_CLASIFICACION = [
  { limite: 30, clasificacion: 'elite' },
  { limite: 20, clasificacion: 'competitivo' },
  { limite: 10, clasificacion: 'regular' },
  { limite: -Infinity, clasificacion: 'principiante' },
];

const calcularPromedio = (participantes) => {
  if (!Array.isArray(participantes) || participantes.length === 0) return 0;
  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / participantes.length;
};

const calcularPuntajeFinal = (participantes, bono = 0, penalizacion = 0) => {
  const promedio = calcularPromedio(participantes);
  const base = Math.ceil(promedio);
  return base + bono - penalizacion;
};

const clasificar = (puntajeFinal) => {
  const nivel = NIVELES_CLASIFICACION.find((n) => puntajeFinal >= n.limite);
  return nivel.clasificacion;
};

const generarExplicacion = (bono, penalizacion) => {
  const partes = [];
  if (bono > 0) partes.push('se sumo el bono');
  if (penalizacion > 0) partes.push('se resto la penalizacion');
  if (partes.length === 0) return 'no se aplicaron ajustes adicionales al promedio.';
  return `${partes.join(' y ')} segun las reglas.`;
};

const evaluarParticipantes = ({ participantes, bono = 0, penalizacion = 0 } = {}) => {
  const puntajeFinal = calcularPuntajeFinal(participantes, bono, penalizacion);
  const clasificacion = clasificar(puntajeFinal);
  const explicacion = generarExplicacion(bono, penalizacion);
  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
};

const casoNormal = evaluarParticipantes({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarParticipantes({
  participantes: [],
  bono: 0,
  penalizacion: 0,
});
console.log('Caso borde:', casoBorde);

module.exports = {
  calcularPromedio,
  calcularPuntajeFinal,
  clasificar,
  generarExplicacion,
  evaluarParticipantes,
};