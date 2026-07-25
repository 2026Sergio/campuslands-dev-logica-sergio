# Logica general 085 - sistema de ordenamiento de prioridades para taller mecánico

## Motor de Gestión de Cola de Atención y Asignación de Urgencias

Este script procesa un arreglo de vehículos en espera dentro de un taller mecánico, aplicando un algoritmo de ordenamiento multicriterio que prioriza el nivel de urgencia de cada unidad y resuelve empates basándose estrictamente en el orden de llegada (antigüedad).

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `vehiculos` está vacío o es nulo, retornando un objeto de error en caso de cumplirse.
* **Diccionario de Pesos de Prioridad**: Asigna un valor numérico de peso a cada categoría de urgencia (a menor número, mayor prioridad en la cola):
* **Emergencia**: Peso 1.
* **Alta**: Peso 2.
* **Media**: Peso 3.
* **Baja**: Peso 4.


* **Ordenamiento Multicriterio (`sort`)**:
* Copia el arreglo para evitar mutaciones directas sobre el origen.
* Evalúa y compara los pesos de prioridad de dos vehículos. Si los niveles de urgencia son distintos, organiza la cola ascendente según el peso menor.
* **Criterio de Desempate**: Si ambos vehículos comparten la misma prioridad, utiliza la propiedad `ordenLlegada` para posicionar primero al que ingresó antes (menor número).


* **Retorno del Reporte**: Devuelve un objeto estructurado que contiene la cola de atención ordenada y la explicación del proceso.


* **Tecnologías:**
* JavaScript (método de ordenamiento de arreglos `sort`, operadores de propagación, mapeo de diccionarios de pesos, manipulación de objetos).



---

### Explicación técnica

1. **Ordenamiento Ponderado por Diccionario**: Permite transformar propiedades textuales cualitativas (como "emergencia" o "alta") en valores numéricos estables y comparables, facilitando la ejecución de funciones aritméticas de orden.
2. **Estabilidad por Desempate Secundario**: La estructura condicional del `sort` garantiza un comportamiento FIFO (*First In, First Out*) cuando las prioridades principales coinciden, evitando injusticias en el tiempo de espera de los clientes.

### Lógica del Código

```javascript
const ordenarColaTaller = (vehiculos) => {
    // 1. Validar si la lista de vehículos está vacía
    if (!vehiculos || vehiculos.length === 0) {
        return { error: "La lista de vehículos en el taller mecánico está vacía." };
    }

    // 2. Mapeo de valores de prioridad
    const pesosPrioridad = {
        "emergencia": 1,
        "alta": 2,
        "media": 3,
        "baja": 4
    };

    // 3. Ordenar aplicando reglas de prioridad y orden de llegada
    const colaOrdenada = [...vehiculos].sort((a, b) => {
        const prioridadA = pesosPrioridad[a.prioridad.toLowerCase()] || 5;
        const prioridadB = pesosPrioridad[b.prioridad.toLowerCase()] || 5;

        if (prioridadA !== prioridadB) {
            return prioridadA - prioridadB;
        }

        // Desempate por orden de llegada
        return a.ordenLlegada - b.ordenLlegada;
    });

    // 4. Retornar la cola de atención estructurada
    return {
        cola_atencion: colaOrdenada,
        explicacion: "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada."
    };
};

```

### Salida Esperada

```json
{
  "cola_atencion": [
    {
      "placa": "ABC-789",
      "prioridad": "emergencia",
      "ordenLlegada": 4
    },
    {
      "placa": "DEF-456",
      "prioridad": "alta",
      "ordenLlegada": 1
    },
    {
      "placa": "GHI-321",
      "prioridad": "alta",
      "ordenLlegada": 3
    },
    {
      "placa": "XYZ-123",
      "prioridad": "media",
      "ordenLlegada": 2
    }
  ],
  "explicacion": "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada."
}
{
  "cola_atencion": [
    {
      "placa": "SOLO-1",
      "prioridad": "baja",
      "ordenLlegada": 1
    }
  ],
  "explicacion": "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-085/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco