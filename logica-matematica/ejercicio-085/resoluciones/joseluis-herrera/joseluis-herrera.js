const Vehiculos = [
    { placa: "ABC-123", desgasteFrenos: 15, nivelAceite: 80, temperaturaMotor: 90 },
    { placa: "XYZ-789", desgasteFrenos: 85, nivelAceite: 40, temperaturaMotor: 115 },
    { placa: "LMN-456", desgasteFrenos: 50, nivelAceite: 70, temperaturaMotor: 95 },
    { placa: "RST-321", desgasteFrenos: 92, nivelAceite: 20, temperaturaMotor: 120 },
    { placa: "JKL-654", desgasteFrenos: 30, nivelAceite: 90, temperaturaMotor: 88 }
];

let vehiculoCritico = Vehiculos[0];
let calcular_nivel_riesgo = (v) => v.desgasteFrenos + (100 - v.nivelAceite) + (v.temperaturaMotor > 100 ? 50 : 0);

if (Vehiculos.length === 0) {
    console.log("No hay vehículos registrados en el taller mecánico.");
} else {
    Vehiculos.forEach((vehiculo) => {
        if (calcular_nivel_riesgo(vehiculo) > calcular_nivel_riesgo(vehiculoCritico)) {
            vehiculoCritico = vehiculo;
        }
    });
    console.log(`El vehículo con mayor nivel de riesgo y límites superados es el de placa ${vehiculoCritico.placa}`);
}