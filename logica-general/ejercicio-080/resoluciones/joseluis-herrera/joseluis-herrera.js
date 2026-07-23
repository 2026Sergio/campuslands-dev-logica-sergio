const PlatosUrbana = [
    { nombre: "Hamburguesa Artesanal", calificacion: 4.8, tiempoEspera: 15, popularidad: 90 },
    { nombre: "Perro Caliente Gigante", calificacion: 4.2, tiempoEspera: 10, popularidad: 75 },
    { nombre: "Salchipapa Callejera", calificacion: 4.9, tiempoEspera: 12, popularidad: 95 },
    { nombre: "Tacos Mexicanos", calificacion: 4.5, tiempoEspera: 20, popularidad: 80 },
    { nombre: "Desgranado de Pollo", calificacion: 4.7, tiempoEspera: 14, popularidad: 88 }
];

let seleccionado = PlatosUrbana[0];
let calcular_puntuaje_estrategia = (p) => (p.calificacion * 200) + (p.popularidad * 1.5) - (p.tiempoEspera * 10);

if (PlatosUrbana.length === 0) {
    console.log("No hay platos de comida urbana registrados para la selección.");
} else {
    PlatosUrbana.forEach((plato) => {
        if (calcular_puntuaje_estrategia(plato) > calcular_puntuaje_estrategia(seleccionado)) {
            seleccionado = plato;
        }
    });
    console.log(`El plato seleccionado bajo la estrategia óptima es ${seleccionado.nombre}`);
}