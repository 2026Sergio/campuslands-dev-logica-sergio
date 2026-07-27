const Motos = [
    { marca: "Yamaha", cilindraje: 150, precio: 9500000, kilometraje: 12000 },
    { marca: "Honda", cilindraje: 110, precio: 6200000, kilometraje: 25000 },
    { marca: "Suzuki", cilindraje: 250, precio: 14000000, kilometraje: 5000 },
    { marca: "Kawasaki", cilindraje: 300, precio: 18500000, kilometraje: 8000 },
    { marca: "Bajaj", cilindraje: 125, precio: 7500000, kilometraje: 15000 }
];

let mejorMoto = Motos[0];
let calcular_puntuaje_rango = (m) => (m.cilindrada * 50000) - (m.precio * 0.0001) - (m.kilometraje * 100);

if (Motos.length === 0) {
    console.log("No hay motos registradas en el inventario para calcular rangos y máximos.");
} else {
    Motos.forEach((moto) => {
        if (calcular_puntuaje_rango(moto) > calcular_puntuaje_rango(mejorMoto)) {
            mejorMoto = moto;
        }
    });
    console.log(`La moto que obtiene el máximo valor dentro del rango establecido es ${mejorMoto.marca}`);
}