const ComidasUrbana = [
    { nombre: "Hamburguesa Doble", precioBase: 15000, ingredientes: 5, distancia: 3 },
    { nombre: "Perro Caliente Especial", precioBase: 10000, ingredientes: 4, distancia: 6 },
    { nombre: "Salchipapa Mixta", precioBase: 18000, ingredientes: 6, distancia: 2 },
    { nombre: "Tacos de Birria", precioBase: 14000, ingredientes: 3, distancia: 8 },
    { nombre: "Pizza Artesanal", precioBase: 22000, ingredientes: 7, distancia: 4 }
];

let masCostoso = ComidasUrbana[0];
let calcular_costo_total = (c) => c.precioBase + (c.ingredientes * 1200) + (c.distancia * 800);

if (ComidasUrbana.length === 0) {
    console.log("No hay platos de comida urbana registrados para simular.");
} else {
    ComidasUrbana.forEach((comida) => {
        if (calcular_costo_total(comida) > calcular_costo_total(masCostoso)) {
            masCostoso = comida;
        }
    });
    console.log(`El plato de comida urbana con mayor costo total simulado es ${masCostoso.nombre}`);
}