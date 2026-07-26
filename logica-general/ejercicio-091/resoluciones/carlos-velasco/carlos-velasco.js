const organizarPeleadoresKickboxing = (peleadores) => {
    if (!peleadores || !Array.isArray(peleadores) || peleadores.length === 0) {
        return { error: "La lista de peleadores de kickboxing está vacía o no es válida." };
    }

    const pesosCategoria = {
        "profesional": 1,
        "semiprofesional": 2,
        "amateur": 3
    };

    const listaOrganizada = [...peleadores].sort((a, b) => {
        const catA = pesosCategoria[a.categoria.toLowerCase()] || 4;
        const catB = pesosCategoria[b.categoria.toLowerCase()] || 4;

        if (catA !== catB) {
            return catA - catB;
        }

        if (b.victorias !== a.victorias) {
            return b.victorias - a.victorias;
        }

        return a.pesoKg - b.pesoKg;
    });

    return {
        total_peleadores: listaOrganizada.length,
        peleadores_organizados: listaOrganizada,
        explicacion: "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador."
    };
};

const peleadoresNormales = [
    { nombre: "Carlos 'The Lion' Pérez", categoria: "Amateur", victorias: 5, pesoKg: 70 },
    { nombre: "Julián Gómez", categoria: "Profesional", victorias: 12, pesoKg: 75 },
    { nombre: "Andrés Silva", categoria: "Profesional", victorias: 15, pesoKg: 72 },
    { nombre: "Mateo Ruiz", categoria: "SemiProfesional", victorias: 8, pesoKg: 68 }
];

const peleadoresBorde = [
    { nombre: "Esteban Solitario", categoria: "Amateur", victorias: 0, pesoKg: 65 }
];

console.log(organizarPeleadoresKickboxing(peleadoresNormales));
console.log(organizarPeleadoresKickboxing(peleadoresBorde));