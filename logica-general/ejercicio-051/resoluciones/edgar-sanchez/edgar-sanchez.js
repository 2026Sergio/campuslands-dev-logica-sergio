function organizarPeleadores(peleadores) {
    return peleadores.sort((a, b) => b.victorias - a.victorias);
}

const listaPeleadores = [
    { nombre: "Juan", victorias: 5 },
    { nombre: "Pedro", victorias: 12 },
    { nombre: "Luis", victorias: 8 }
];

console.log(organizarPeleadores(listaPeleadores));