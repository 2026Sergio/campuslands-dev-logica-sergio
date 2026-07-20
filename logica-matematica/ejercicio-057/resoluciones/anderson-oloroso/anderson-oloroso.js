function generarRankingModelos(modelos) {
    const ranking = [...modelos];

    ranking.sort((a, b) => b.puntuacion - a.puntuacion);

    return ranking.map((modelo, index) => ({
        posicion: index + 1,
        nombre: modelo.nombre,
        puntuacion: modelo.puntuacion
    }));
}

// Ejemplo
const modelos3D = [
    { nombre: "Edificio moderno", puntuacion: 92 },
    { nombre: "Casa ecológica", puntuacion: 85 },
    { nombre: "Centro comercial", puntuacion: 98 },
    { nombre: "Museo futurista", puntuacion: 90 }
];

console.log(generarRankingModelos(modelos3D));