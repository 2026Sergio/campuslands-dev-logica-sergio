# Ejercicio 003: Sistema de Clasificación y Disciplina Competitiva

## Análisis del Problema

El objetivo es evaluar el rendimiento deportivo y el comportamiento disciplinario de un club para determinar su destino en la fase final del torneo.

* **Entrada:** Un objeto con los indicadores del club:
    * `nombre`: String (Nombre de la escuadra).
    * `victorias`: Number (Cantidad de partidos ganados, $\ge 0$).
    * `penalizaciones`: Number (Cantidad de faltas técnicas acumuladas, $\ge 0$).
    * `fairPlay`: Boolean (Estatus de juego limpio).
* **Proceso:** 1. Intercepta fallos estructurales o datos ausentes.
    2. Aplica el filtro de veto disciplinario (evaluación de conducta).
    3. Evalúa el rendimiento deportivo por rangos cuantitativos si el club aprueba el filtro de conducta.
* **Salida:** Un objeto con la estructura: `{ decision: string, argumento: string }`.

---

## Reglas de Negocio

1. **Veto Ético Disciplinario:** El juego limpio es mandatorio. Si el club tiene `fairPlay: false` **O** acumula $\ge 3$ penalizaciones, queda descalificado inmediatamente, anulando cualquier récord de victorias.
2. **Clasificación Directa (Playoffs):** Todo equipo con estatus disciplinario aprobado y un récord de $\ge 4$ victorias avanza directamente al bracket principal.
3. **Fase de Repechaje (Play-ins):** Los equipos con estatus disciplinario aprobado y un rendimiento de entre 1 y 3 victorias (inclusive) clasifican al bracket de repechaje.
4. **Eliminación Directa:** Los equipos con 0 victorias que no hayan sido descalificados por la regla 1 quedan eliminados por rendimiento.

---

## Casos de Prueba

### 1. Clasificación Directa (Caso Normal)
* **Entrada:**
    ```json
    {
      "nombre": "Campuslands Predators",
      "victorias": 5,
      "penalizaciones": 1,
      "fairPlay": true
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "decision": "playoffs",
      "argumento": "Clasificación directa aprobada por rendimiento óptimo y conducta regular."
    }
    ```

### 2. Veto Disciplinario (Acumulación de Faltas)
* **Entrada:**
    ```json
    {
      "nombre": "Cyber Warriors",
      "victorias": 6,
      "penalizaciones": 3,
      "fairPlay": true
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "decision": "descalificado",
      "argumento": "El equipo superó el límite permitido de penalizaciones técnicas."
    }
    ```

### 3. Fase de Oportunidad (Play-ins)
* **Entrada:**
    ```json
    {
      "nombre": "Alpha Team",
      "victorias": 2,
      "penalizaciones": 0,
      "fairPlay": true
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "decision": "play-ins",
      "argumento": "Rendimiento medio con historial limpio. Pasa a ronda de repechaje."
    }
    ```

---

## Arquitectura de la Solución

El flujo del algoritmo se comporta como una estructura de cortocircuito (*short-circuit*). La ejecución evalúa primero las condiciones de expulsión (reglas disciplinarias). Al ser el comportamiento un factor excluyente, si el equipo no cumple con los mínimos éticos, el algoritmo retorna la descalificación de inmediato sin gastar recursos en procesar o calcular rangos de victorias.

---

## Ejecución del Script

1. Instala las dependencias necesarias y asegúrate de tener [Node.js](https://nodejs.org/) activo.
2. Abre la terminal en el directorio correspondiente a este ejercicio.
3. Ejecuta el archivo de la solución mediante:
    ```bash
    node maria-montepeque.js
    ```