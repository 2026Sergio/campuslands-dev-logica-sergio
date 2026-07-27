const SaltosParacaidismo = [
    { zona: "Zona A", latitudOrigen: 4.6097, longitudOrigen: -74.0817, latitudAterrizaje: 4.6500, longitudAterrizaje: -74.1000, vientoKmh: 15 },
    { zona: "Zona B", latitudOrigen: 6.2442, longitudOrigen: -75.5812, latitudAterrizaje: 6.2000, longitudAterrizaje: -75.5500, vientoKmh: 25 },
    { zona: "Zona C", latitudOrigen: 3.4516, longitudOrigen: -76.5320, latitudAterrizaje: 3.4000, longitudAterrizaje: -76.5000, vientoKmh: 10 },
    { zona: "Zona D", latitudOrigen: 10.3910, longitudOrigen: -75.4794, latitudAterrizaje: 10.4200, longitudAterrizaje: -75.5000, vientoKmh: 30 },
    { zona: "Zona E", latitudOrigen: 7.1193, longitudOrigen: -73.1227, latitudAterrizaje: 7.1500, longitudAterrizaje: -73.1000, vientoKmh: 18 }
];

let mejorSalto = SaltosParacaidismo[0];

let calcular_distancia_aproximada = (salto) => {
    let diferenciaLat = salto.latitudAterrizaje - salto.latitudOrigen;
    let diferenciaLon = salto.longitudAterrizaje - salto.longitudOrigen;
    return Math.sqrt((diferenciaLat * diferenciaLat) + (diferenciaLon * diferenciaLon)) * 111000;
};

let calcular_puntaje_coordenadas = (salto) => {
    let distanciaMetros = calcular_distancia_aproximada(salto);
    let factorViento = salto.vientoKmh * 50;
    return (1000000 / (distanciaMetros > 0 ? distanciaMetros : 1)) - factorViento;
};

if (SaltosParacaidismo.length === 0) {
    console.log("No hay zonas de paracaidismo registradas para calcular las coordenadas y la distancia.");
} else {
    SaltosParacaidismo.forEach((salto) => {
        if (calcular_puntaje_coordenadas(salto) > calcular_puntaje_coordenadas(mejorSalto)) {
            mejorSalto = salto;
        }
    });
    console.log(`La zona de paracaidismo con mejor puntaje en coordenadas y distancia es ${mejorSalto.zona}`);
}