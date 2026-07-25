const Hiperdeportivos = [
    { modelo: "Bugatti Chiron", velocidadMph: 261, pesoLibras: 4400, potenciaHp: 1500 },
    { modelo: "Koenigsegg Jesko", velocidadMph: 300, pesoLibras: 3100, potenciaHp: 1600 },
    { modelo: "Hennessey Venom F5", velocidadMph: 311, pesoLibras: 2998, potenciaHp: 1817 },
    { modelo: "Rimac Nevera", velocidadMph: 258, pesoLibras: 5150, potenciaHp: 1914 },
    { modelo: "SSC Tuatara", velocidadMph: 295, pesoLibras: 2750, potenciaHp: 1750 }
];

let mejorAuto = Hiperdeportivos[0];

let convertir_a_metrico = (auto) => {
    let velocidadKmh = auto.velocidadMph * 1.60934;
    let pesoKg = auto.pesoLibras * 0.453592;
    return (velocidadKmh * 10) - (pesoKg * 2) + (auto.potenciaHp * 5);
};

if (Hiperdeportivos.length === 0) {
    console.log("No hay autos hiperdeportivos registrados para la conversión de unidades.");
} else {
    Hiperdeportivos.forEach((auto) => {
        if (convertir_a_metrico(auto) > convertir_a_metrico(mejorAuto)) {
            mejorAuto = auto;
        }
    });
    console.log(`El auto hiperdeportivo con mejor rendimiento tras la conversión de unidades es el ${mejorAuto.modelo}`);
}