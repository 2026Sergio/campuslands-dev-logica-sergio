const Motos = [
    { marca: "Yamaha", cilindrada: 150, anio: 2023, disponible: true },
    { marca: "Honda", cilindrada: 110, anio: 2020, disponible: false },
    { marca: "Suzuki", cilindrada: 250, anio: 2024, disponible: true },
    { marca: "Kawasaki", cilindrada: 300, anio: 2022, disponible: true },
    { marca: "Bajaj", cilindrada: 125, anio: 2021, disponible: false }
];

let filtradas = [];
let filtrar_moto = (m) => m.disponible && (m.cilindrada >= 150) && (m.anio >= 2022);

if (Motos.length === 0) {
    console.log("No hay motos registradas en el inventario.");
} else {
    Motos.forEach((moto) => {
        if (filtrar_moto(moto)) {
            filtradas.push(moto);
        }
    });
    console.log(`Se encontraron ${filtradas.length} motos que cumplen con las condiciones de filtrado.`);
}