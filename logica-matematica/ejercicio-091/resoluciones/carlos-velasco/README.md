# Logica matematica 091 - conteo combinatorio simple y producto cartesiano de peleas

## Motor de Generación y Conteo Combinatorio para Carteleras de Combate

Este script procesa tres arreglos independientes que representan a los peleadores de la esquina roja, los peleadores de la esquina azul y las categorías de peso disponibles, aplicando un algoritmo de conteo combinatorio basado en el producto cartesiano para estructurar todas las combinaciones posibles de enfrentamientos y clasificar la magnitud de la cartelera.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si alguna de las colecciones de entrada no existe, no corresponde a una estructura de tipo arreglo o si alguna de ellas se encuentra vacía, retornando en este último caso un reporte con cero combinaciones.
* **Generación por Producto Cartesiano (`for` anidados)**:
* Itera sobre cada categoría de peso disponible.
* Recorre de forma cruzada los peleadores de la esquina roja y de la esquina azul.
* Incrementa un contador global de combinaciones y construye un objeto detallado para cada combate potencial que incluye un identificador único, la categoría de peso y los contendientes de ambas esquinas.


* **Clasificación de la Cartelera**: Categoriza la velada deportiva según el volumen total de enfrentamientos generados:
* **Super Evento / Gran Torneo**: $\ge$ 20 combinaciones.
* **Velada Competitiva**: $\ge$ 10 y < 20 combinaciones.
* **Cartelera Estándar**: Menor a 10 combinaciones.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el total de combinaciones posibles, el tipo de cartelera, el detalle de los enfrentamientos y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos anidados `for`, validación de arreglos, construcción dinámica de objetos, manipulación de contadores y lógica condicional).



---

### Explicación técnica

1. **Implementación de Producto Cartesiano Multidimensional**: El algoritmo anida tres ciclos iterativos para combinar de manera exhaustiva cada elemento de las categorías de peso con cada posible par de contrincantes (esquina roja vs. esquina azul), modelando de forma exacta el principio multiplicativo de la combinatoria.
2. **Defensa ante Estructuras Vacías**: Incorpora validaciones estrictas al inicio de la ejecución para garantizar que cualquier arreglo vacío devuelva un resultado controlado de cero combinaciones sin generar interrupciones por errores de ejecución.

### Lógica del Código

```javascript
const calcularCombinacionesPeleas = (peleadoresRojo, peleadoresAzul, categoriasPeso) => {
    // 1. Validar que los datos de entrada existan
    if (!peleadoresRojo || !peleadoresAzul || !categoriasPeso) {
        return { error: "Los datos de entrada para el conteo combinatorio están incompletos o no son válidos." };
    }

    // 2. Validar que todas las entradas sean arreglos
    if (!Array.isArray(peleadoresRojo) || !Array.isArray(peleadoresAzul) || !Array.isArray(categoriasPeso)) {
        return { error: "Las entradas deben ser arreglos válidos." };
    }

    // 3. Validar si alguno de los arreglos está vacío
    if (peleadoresRojo.length === 0 || peleadoresAzul.length === 0 || categoriasPeso.length === 0) {
        return {
            total_combinaciones: 0,
            detalle: [],
            explicacion: "No se pueden generar combinaciones porque al menos uno de los grupos (esquina roja, esquina azul o categorías) está vacío."
        };
    }

    let totalCombinaciones = 0;
    let combinacionesDetalladas = [];

    // 4. Aplicar producto cartesiano entre categorías y esquinas de combate
    for (let i = 0; i < categoriasPeso.length; i++) {
        const categoria = categoriasPeso[i];
        
        for (let r = 0, emp = peleadoresRojo.length; r < emp; r++) {
            const peleadorR = peleadoresRojo[r];

            for (let a = 0, empA = peleadoresAzul.length; a < empA; a++) {
                const peleadorA = peleadoresAzul[a];

                totalCombinaciones++;
                combinacionesDetalladas.push({
                    combate_id: totalCombinaciones,
                    categoria_peso: categoria,
                    esquina_roja: peleadorR,
                    esquina_azul: peleadorA
                });
            }
        }
    }

    // 5. Clasificación de la cartelera de kickboxing según volumen
    let tipoCartelera = "Cartelera Estándar";
    if (totalCombinaciones >= 20) {
        tipoCartelera = "Super Evento / Gran Torneo";
    } else if (totalCombinaciones >= 10) {
        tipoCartelera = "Velada Competitiva";
    }

    // 6. Retornar el reporte consolidado de combinaciones
    return {
        total_combinaciones_posibles: totalCombinaciones,
        tipo_cartelera: tipoCartelera,
        detalle_enfrentamientos: combinacionesDetalladas,
        explicacion: "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing."
    };
};

```

### Salida Esperada

```json
{
  "total_combinaciones_posibles": 12,
  "tipo_cartelera": "Velada Competitiva",
  "detalle_enfrentamientos": [
    {
      "combate_id": 1,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "Julián Gómez"
    },
    {
      "combate_id": 2,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "Mateo Ruiz"
    },
    {
      "combate_id": 3,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "David Torres"
    },
    {
      "combate_id": 4,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "Julián Gómez"
    },
    {
      "combate_id": 5,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "Mateo Ruiz"
    },
    {
      "combate_id": 6,
      "categoria_peso": "Peso Ligero",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "David Torres"
    },
    {
      "combate_id": 7,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "Julián Gómez"
    },
    {
      "combate_id": 8,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "Mateo Ruiz"
    },
    {
      "combate_id": 9,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Carlos Pérez",
      "esquina_azul": "David Torres"
    },
    {
      "combate_id": 10,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "Julián Gómez"
    },
    {
      "combate_id": 11,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "Mateo Ruiz"
    },
    {
      "combate_id": 12,
      "categoria_peso": "Peso Welter",
      "esquina_roja": "Andrés Silva",
      "esquina_azul": "David Torres"
    }
  ],
  "explicacion": "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing."
}
{
  "total_combinaciones_posibles": 1,
  "tipo_cartelera": "Cartelera Estándar",
  "detalle_enfrentamientos": [
    {
      "combate_id": 1,
      "categoria_peso": "Peso Completo",
      "esquina_roja": "Esteban Solo",
      "esquina_azul": "Lucas Único"
    }
  ],
  "explicacion": "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-091/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco