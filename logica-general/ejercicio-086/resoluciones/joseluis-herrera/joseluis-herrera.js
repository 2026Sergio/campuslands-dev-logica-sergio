const Hiperdeportivos = [
    { modelo: "Bugatti Chiron", velocidadMax: 420, aceleracion: 2.4, aerodinamica: 90 },
    { modelo: "Koenigsegg Jesko", velocidadMax: 480, aceleracion: 2.5, aerodinamica: 95 },
    { modelo: "Hennessey Venom F5", velocidadMax: 500, aceleracion: 2.6, aerodinamica: 88 },
    { modelo: "Rimac Nevera", velocidadMax: 412, aceleracion: 1.85, aerodinamica: 92 },
    { modelo: "SSC Tuatara", velocidadMax: 475, aceleracion: 2.5, aerodinamica: 91 }
];

let mejorAuto = Hiperdeportivos[0];
let calcular_puntaje_busqueda = (a) => (a.velocidadMax * 2) - (a.aceleracion * 100) + (a.aerodinamica * 10);

if (Hiperdeportivos.length === 0) {
    console.log("No hay autos hiperdeportivos registrados para realizar la búsqueda.");
} else {
    Hiperdeportivos.forEach((auto) => {
        if (calcular_puntaje_busqueda(auto) > calcular_puntaje_busqueda(mejorAuto)) {
            mejorAuto = auto;
        }
    });
    console.log(`El auto hiperdeportivo encontrado con la mejor puntuación es el ${mejorAuto.modelo}`);
}