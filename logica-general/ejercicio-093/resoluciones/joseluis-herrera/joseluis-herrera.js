const Paracaidistas = [
    { nombre: "Felix Baumgartner", alturaSaltoMetros: 39000, velocidadTerminalKmH: 1357, experienciaSaltos: 2500 },
    { nombre: "Joe Kittinger", alturaSaltoMetros: 31333, velocidadMonitoreadaKmH: 988, experienciaSaltos: 455 },
    { nombre: "Alan Eustace", alturaSaltoMetros: 41419, velocidadTerminalKmH: 1323, experienceSaltos: 120 },
    { nombre: "Luke Aikins", alturaSaltoMetros: 7620, velocidadTerminalKmH: 240, experienciaSaltos: 18000 },
    { nombre: "Babs Olisanec", alturaSaltoMetros: 10000, velocidadTerminalKmH: 300, experienciaSaltos: 3200 }
];

let mejorParacaidista = Paracaidistas[0];

let resolver_caso_paracaidismo = (paracaidista) => {
    let factorAltura = (paracaidista.alturaSaltoMetros || 0) * 0.1;
    let velocidad = paracaidista.velocidadTerminalKmH || paracaidista.velocidadMonitoreadaKmH || 200;
    let factorVelocidad = velocidad * 1.5;
    let saltos = paracaidista.experienciaSaltos || paracaidista.experienceSaltos || 100;
    let factorExperiencia = saltos * 2;
    return factorAltura + factorVelocidad + factorExperiencia;
};

if (Paracaidistas.length === 0) {
    console.log("No hay paracaidistas registrados para resolver el caso.");
} else {
    Paracaidistas.forEach((paracaidista) => {
        if (resolver_caso_paracaidismo(paracaidista) > resolver_caso_paracaidismo(mejorParacaidista)) {
            mejorParacaidista = paracaidista;
        }
    });
    console.log(`El paracaidista con mejor desempeño y resolución en el caso es ${mejorParacaidista.nombre}`);
}