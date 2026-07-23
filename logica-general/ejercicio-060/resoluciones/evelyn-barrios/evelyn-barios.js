function seleccionarPuestoComida(puestos, estrategia) {
  const puestosFiltrados = puestos.filter(puesto => {
    const cumpleTipo = !estrategia.tipoComida || puesto.tipoComida === estrategia.tipoComida;
    const cumplePresupuesto = puesto.precioPromedio <= estrategia.presupuestoMax;
    const cumpleDistancia = puesto.distanciaMetros <= estrategia.distanciaMax;
    return cumpleTipo && cumplePresupuesto && cumpleDistancia;
  });

  if (puestosFiltrados.length === 0) {
    return {
      recomendacion: null,
      motivo: 'No se encontraron puestos que cumplan con todos los criterios de la estrategia.'
    };
  }

  puestosFiltrados.sort((a, b) => {
    if (b.calificacion !== a.calificacion) {
      return b.calificacion - a.calificacion;
    }
    return a.distanciaMetros - b.distanciaMetros;
  });

  const mejorOpcion = puestosFiltrados[0];

  return {
    recomendacion: mejorOpcion,
    motivo: `Se seleccionó '${mejorOpcion.nombre}' por tener la mejor combinación de calificación y cercanía dentro de los criterios.`
  };
}

const puestosDeComida = [
  { nombre: 'Tacos El Jefe', tipoComida: 'tacos', precioPromedio: 12000, distanciaMetros: 300, calificacion: 4.5 },
  { nombre: 'Burger Extrema', tipoComida: 'hamburguesas', precioPromedio: 25000, distanciaMetros: 800, calificacion: 4.8 },
  { nombre: 'Pizza Veloz', tipoComida: 'pizza', precioPromedio: 30000, distanciaMetros: 1200, calificacion: 4.2 },
  { nombre: 'Tacos El Vecino', tipoComida: 'tacos', precioPromedio: 15000, distanciaMetros: 150, calificacion: 4.9 },
  { nombre: 'Arepas de la Abuela', tipoComida: 'arepas', precioPromedio: 10000, distanciaMetros: 400, calificacion: 4.7 }
];

const estrategiaBusquedaTacos = {
  tipoComida: 'tacos',
  presupuestoMax: 16000,
  distanciaMax: 500
};

console.log("--- Caso Normal: Buscando los mejores tacos cercanos y económicos ---");
console.log(seleccionarPuestoComida(puestosDeComida, estrategiaBusquedaTacos));

const estrategiaSinResultados = {
  tipoComida: 'sushi',
  presupuestoMax: 50000,
  distanciaMax: 2000
};

console.log("\n--- Caso Borde: Búsqueda sin resultados ---");
console.log(seleccionarPuestoComida(puestosDeComida, estrategiaSinResultados));

const estrategiaPresupuestoBajo = {
  presupuestoMax: 10000,
  distanciaMax: 500
};

console.log("\n--- Otro Caso: Buscando cualquier comida muy barata y cercana ---");
console.log(seleccionarPuestoComida(puestosDeComida, estrategiaPresupuestoBajo));
