# Logica general 091 - organización y ordenamiento avanzado de listas de kickboxing

## Motor de Jerarquización Multicriterio para Atletas de Combate

Este script procesa un arreglo de objetos que representan a distintos peleadores de kickboxing, organizándolos de manera jerárquica mediante un algoritmo de ordenamiento multicriterio que evalúa la categoría de experiencia, el récord de victorias y el peso corporal.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el arreglo de peleadores es nulo, no corresponde a una estructura de tipo arreglo o está vacío, retornando un objeto de error en caso de cumplirse.
* **Definición de Pesos de Categoría**: Establece un diccionario de prioridades numéricas para jerarquizar los rangos de combate (Profesional = 1, Semiprofesional = 2, Amateur = 3, y valores predeterminados de menor prioridad para categorías desconocidas).
* **Ordenamiento Multicriterio (`sort`)**: Crea una copia superficial del arreglo original para evitar mutaciones indeseadas y aplica tres reglas de orden jerárquico consecutivas:
* **Regla 1 (Jerarquía de Categoría)**: Compara los pesos asignados a cada categoría para ordenar de mayor a menor experiencia (profesionales primero).
* **Regla 2 (Desempate por Victorias)**: Si los peleadores comparten la misma categoría, los ordena de forma descendente basándose en su cantidad de victorias (`b.victorias - a.victorias`).
* **Regla 3 (Desempate por Peso)**: Si persiste la igualdad en categoría y victorias, ordena de manera ascendente por el peso corporal en kilogramos (`a.pesoKg - b.pesoKg`).


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el total de peleadores, la lista organizada bajo los criterios aplicados y la explicación del proceso.


* **Tecnologías:**
* JavaScript (método de ordenamiento `sort`, propagación de arreglos con spread operator, diccionarios de mapeo, estructuras condicionales).



---

### Explicación técnica

1. **Ordenamiento Encadenado Predictivo**: La función de comparación del método `sort` evalúa las condiciones de forma secuencial. Si el primer criterio arroja diferencia distinta de cero, define inmediatamente el orden; de lo contrario, desciende al siguiente nivel de desempate, garantizando un ordenamiento determinista y robusto.
2. **Inmutabilidad Segura de Datos**: El uso del operador de propagación (`[...peleadores]`) asegura que el arreglo original de entrada no sufra mutaciones directas en memoria durante el proceso de reordenamiento.

### Lógica del Código

```javascript
const organizarPeleadoresKickboxing = (peleadores) => {
    // 1. Validar si la lista de peleadores no es válida o está vacía
    if (!peleadores || !Array.isArray(peleadores) || peleadores.length === 0) {
        return { error: "La lista de peleadores de kickboxing está vacía o no es válida." };
    }

    // 2. Mapeo de categorías por nivel de experiencia o rango
    const pesosCategoria = {
        "profesional": 1,
        "semiprofesional": 2,
        "amateur": 3
    };

    // 3. Organizar y ordenar la lista aplicando múltiples criterios de reglas
    const listaOrganizada = [...peleadores].sort((a, b) => {
        const catA = pesosCategoria[a.categoria.toLowerCase()] || 4;
        const catB = pesosCategoria[b.categoria.toLowerCase()] || 4;

        // Regla 1: Ordenar por categoría (primero profesionales, luego semiprofesionales, etc.)
        if (catA !== catB) {
            return catA - catB;
        }

        // Regla 2: En caso de empate en categoría, ordenar por récord de victorias (descendente)
        if (b.victorias !== a.victorias) {
            return b.victorias - a.victorias;
        }

        // Regla 3: Si persisten empates, ordenar por peso (ascendente)
        return a.pesoKg - b.pesoKg;
    });

    // 4. Retornar el reporte consolidado de la organización
    return {
        total_peleadores: listaOrganizada.length,
        peleadores_organizados: listaOrganizada,
        explicacion: "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador."
    };
};

```

### Salida Esperada

```json
{
  "total_peleadores": 4,
  "peleadores_organizados": [
    {
      "nombre": "Andrés Silva",
      "categoria": "Profesional",
      "victorias": 15,
      "pesoKg": 72
    },
    {
      "nombre": "Julián Gómez",
      "categoria": "Profesional",
      "victorias": 12,
      "pesoKg": 75
    },
    {
      "nombre": "Mateo Ruiz",
      "categoria": "SemiProfesional",
      "victorias": 8,
      "pesoKg": 68
    },
    {
      "nombre": "Carlos 'The Lion' Pérez",
      "categoria": "Amateur",
      "victorias": 5,
      "pesoKg": 70
    }
  ],
  "explicacion": "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador."
}
{
  "total_peleadores": 1,
  "peleadores_organizados": [
    {
      "nombre": "Esteban Solitario",
      "categoria": "Amateur",
      "victorias": 0,
      "pesoKg": 65
    }
  ],
  "explicacion": "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-091/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco