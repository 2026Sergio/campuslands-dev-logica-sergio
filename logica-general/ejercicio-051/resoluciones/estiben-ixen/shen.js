function organizarCompetidores(competidores) {
    if (!Array.isArray(competidores) || competidores.length === 0) {
        return [];
    }

    return competidores.sort((a, b) => {
        if (a.categoria !== b.categoria) {
            return a.categoria.localeCompare(b.categoria);
        }

        return b.puntaje - a.puntaje;
    });
}

const competidores = [
    {
        nombre: "Carlos Ruiz",
        categoria: "pesado",
        puntaje: 85
    },
    {
        nombre: "Luis Perez",
        categoria: "ligero",
        puntaje: 92
    },
    {
        nombre: "Ana Torres",
        categoria: "ligero",
        puntaje: 88
    },
    {
        nombre: "Mario Diaz",
        categoria: "pesado",
        puntaje: 95
    }
];

const listaOrganizada = organizarCompetidores(competidores);

console.log(listaOrganizada);

const casoBorde = organizarCompetidores([]);

console.log(casoBorde);