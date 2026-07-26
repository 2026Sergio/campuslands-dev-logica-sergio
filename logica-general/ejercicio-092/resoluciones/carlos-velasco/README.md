# Logica general 092 - comparación de opciones y selección óptima en torneos de ping pong

## Motor de Análisis Comparativo y Selección de Rendimiento Deportivo

Este script procesa un arreglo de objetos que representan a los participantes de un torneo de ping pong, evaluando de forma iterativa y comparativa sus estadísticas de rendimiento (partidos ganados y sets a favor) para determinar el perfil óptimo de la competencia.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si la lista de jugadores es nula, no corresponde a una estructura de tipo arreglo o se encuentra vacía, retornando un objeto de error en caso de cumplirse.
* **Inicialización de Referencia**: Toma al primer jugador del arreglo como el candidato inicial óptimo (`mejorJugador`) y define un arreglo de bitácora para almacenar el historial de comparaciones.
* **Evaluación Iterativa Multicriterio (`for`)**: Recorre la lista a partir del segundo elemento para comparar al contrincante en turno frente al mejor candidato actual bajo dos reglas principales:
* **Regla 1 (Comparación por Partidos Ganados)**: Si el oponente cuenta con un mayor número de partidos ganados, se actualiza inmediatamente el mejor jugador y se registra la superación.
* **Regla 2 (Desempate por Sets a Favor)**: Si existe un empate exacto en partidos ganados, evalúa si el oponente supera al líder actual en sets a favor para realizar la actualización del candidato óptimo; de lo contrario, el líder actual mantiene su posición de ventaja.


* **Registro de Historial**: Almacena en la bitácora el índice de cada comparación y el detalle textual del resultado obtenido.
* **Retorno del Reporte**: Devuelve un objeto estructurado con el jugador óptimo seleccionado, el total de opciones comparadas, el historial de comparaciones y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, desestructuración y manipulación de objetos, arreglos, lógica condicional anidada).



---

### Explicación técnica

1. **Algoritmo de Búsqueda y Actualización de Óptimos**: El patrón implementado recorre la colección una sola vez ($O(N)$), actualizando dinámicamente la referencia del mejor elemento cada vez que un competidor cumple con criterios de superioridad más estrictos.
2. **Desempate Jerárquico Condicional**: Las estructuras condicionales anidadas aseguran que la regla principal (partidos ganados) tenga absoluta prioridad frente al criterio secundario de desempate (sets a favor), garantizando un análisis deportivo coherente.

### Lógica del Código

```javascript
const compararOpcionesTorneoPingPong = (jugadores) => {
    // 1. Validar si la lista de jugadores no es válida o está vacía
    if (!jugadores || !Array.isArray(jugadores) || jugadores.length === 0) {
        return { error: "La lista de jugadores de ping pong está vacía o no es válida." };
    }

    let mejorJugador = jugadores[0];
    let comparacionesRealizadas = [];

    // 2. Comparar las opciones iterativamente según las reglas de rendimiento
    for (let i = 1; i < jugadores.length; i++) {
        const oponente = jugadores[i];
        let resultadoComparacion = "";

        // Regla 1: Comparar por partidos ganados
        if (oponente.partidosGanados > mejorJugador.partidosGanados) {
            resultadoComparacion = `${oponente.nombre} supera a ${mejorJugador.nombre} en partidos ganados.`;
            mejorJugador = oponente; // Actualiza el mejor
        } else if (oponente.partidosGanados === mejorJugador.partidosGanados) {
            // Regla 2: Desempate por sets a favor si hay empate en partidos
            if (oponente.setsFavor > mejorJugador.setsFavor) {
                resultadoComparacion = `${oponente.nombre} empata en partidos pero supera a ${mejorJugador.nombre} en sets a favor.`;
                mejorJugador = oponente;
            } else {
                resultadoComparacion = `${mejorJugador.nombre} mantiene la ventaja frente a ${oponente.nombre}.`;
            }
        } else {
            resultadoComparacion = `${mejorJugador.nombre} mantiene la ventaja frente a ${oponente.nombre}.`;
        }

        comparacionesRealizadas.push({
            comparacion_index: i,
            detalle: resultadoComparacion
        });
    }

    // 3. Retornar el reporte consolidado de la opción óptima
    return {
        ganador_opcion_optima: mejorJugador,
        total_opciones_comparadas: jugadores.length,
        historial_comparaciones: comparacionesRealizadas,
        explicacion: "Se compararon las opciones de los jugadores de ping pong mediante condicionales iterativos evaluando partidos ganados y desempates por sets a favor para encontrar el perfil óptimo del torneo."
    };
};

```

### Salida Esperada

```json
{
  "ganador_opcion_optima": {
    "nombre": "Sofía Vargas",
    "partidosGanados": 6,
    "setsFavor": 18
  },
  "total_opciones_comparadas": 3,
  "historial_comparaciones": [
    {
      "comparacion_index": 1,
      "detalle": "Sofía Vargas supera a Alejandro Meza en partidos ganados."
    },
    {
      "comparacion_index": 2,
      "detalle": "Sofía Vargas mantiene la ventaja frente a Mateo Rincón."
    }
  ],
  "explicacion": "Se compararon las opciones de los jugadores de ping pong mediante condicionales iterativos evaluando partidos ganados y desempates por sets a favor para encontrar el perfil óptimo del torneo."
}
{
  "ganador_opcion_optima": {
    "nombre": "Jugador Único",
    "partidosGanados": 3,
    "setsFavor": 9
  },
  "total_opciones_comparadas": 1,
  "historial_comparaciones": [],
  "explicacion": "Se compararon las opciones de los jugadores de ping pong mediante condicionales iterativos evaluando partidos ganados y desempates por sets a favor para encontrar el perfil óptimo del torneo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-092/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco