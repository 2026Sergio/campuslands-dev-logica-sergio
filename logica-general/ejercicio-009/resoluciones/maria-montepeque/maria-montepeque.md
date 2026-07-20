# Ejercicio 009: Simulador Biométrico y Máquina de Estados (Espectador de Terror)

## Análisis del Problema

El objetivo es desarrollar un motor de simulación basado en una Máquina de Estados Finitos (FSM) que procese el impacto de estímulos cinematográficos de terror sobre las métricas fisiológicas y psicológicas de un espectador, controlando umbrales críticos de salud.

* **Entrada:** Un objeto contenedor `simulacionEspectador` estructurado de la siguiente forma:
    * `estadoInicial`: Objeto que contiene:
        * `ritmoCardiaco`: Number (Pulsaciones por minuto iniciales, BPM).
        * `ansiedad`: String (Estado psicológico inicial: `"bajo"`, `"medio"`, `"alto"`).
    * `eventosPelicula`: Array de Strings (Secuencia de estímulos a procesar, ej: `["jumpscare", "silencio"]`).
* **Proceso:** 1. Aislar y cargar el estado fisiológico inicial en variables mutables de control.
    2. Iterar secuencialmente la colección de estímulos de la película.
    3. Normalizar cada cadena de texto para evitar fallas por espacios o mayúsculas.
    4. Aplicar mutaciones aritméticas al ritmo cardíaco y transiciones de estado a la ansiedad según el tipo de estímulo.
    5. Evaluar en cada iteración un interruptor de emergencia por taquicardia para aplicar salida temprana (*break*) si es necesario.
* **Salida:** Un objeto con la estructura: `{ estadoFinal: Object, ritmoCardiacoFinal: number, resultado: string, bitacora: Array }`.

---

## Reglas de Negocio

1. **Impacto de Estímulos Dinámicos:** Cada evento altera las métricas del espectador de la siguiente manera:
    * `"jumpscare"`: Incrementa instantáneamente $+35$ BPM y fuerza el estado de ansiedad directamente a `"alto"`.
    * `"persecucion"`: Incrementa $+15$ BPM y escala la ansiedad al siguiente nivel superior (`"bajo"` $\rightarrow$ `"medio"` $\rightarrow$ `"alto"`).
    * `"silencio"`: Disminuye $-10$ BPM (con un tope mínimo biológico de $60$ BPM) y desescala la ansiedad al nivel inferior (`"alto"` $\rightarrow$ `"medio"` $\rightarrow$ `"bajo"`).
2. **Cláusula de Emergencia por Taquicardia:** Si en cualquier punto del ciclo el ritmo cardíaco alcanza o supera los $140$ BPM, la simulación se aborta inmediatamente. Se detiene el procesamiento de los eventos restantes, el resultado se fija como `"en shock"` y se congela el estado.
3. **Estandarización de Datos:** Todos los estímulos se procesan aplicando `.trim().toLowerCase()` para garantizar la tolerancia a fallos de digitación.

---

## Casos de Prueba

### 1. Flujo de Simulación Estable (Caso Normal)
* **Entrada:**
    ```json
    {
      "simulacionEspectador": {
        "estadoInicial": { "ritmoCardiaco": 75, "ansiedad": "bajo" },
        "eventosPelicula": ["persecucion", "silencio", "jumpscare"]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "estadoFinal": { "ritmoCardiaco": 80, "ansiedad": "alto" },
      "ritmoCardiacoFinal": 80,
      "resultado": "finalizado",
      "bitacora": [
        "Evento 'persecucion': Ritmo subió a 90 BPM, Ansiedad: medio",
        "Evento 'silencio': Ritmo bajó a 80 BPM, Ansiedad: bajo",
        "Evento 'jumpscare': Ritmo subió a 115 BPM, Ansiedad: alto"
      ]
    }
    ```

### 2. Aborto por Taquicardia (Caso de Emergencia / Salida Temprana)
* **Entrada:**
    ```json
    {
      "simulacionEspectador": {
        "estadoInicial": { "ritmoCardiaco": 120, "ansiedad": "medio" },
        "eventosPelicula": ["persecucion", "jumpscare"]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "estadoFinal": { "ritmoCardiaco": 135, "ansiedad": "alto" },
      "ritmoCardiacoFinal": 135,
      "resultado": "en shock",
      "bitacora": [
        "Evento 'persecucion': Ritmo subió a 135 BPM, Ansiedad: alto",
        "Simulación abortada: Se alcanzó el umbral crítico de riesgo cardíaco (>= 140 BPM) al intentar procesar el siguiente estímulo."
      ]
    }
    ```

---

## Arquitectura de la Solución

El motor utiliza el patrón de diseño de Máquina de Estados Finitos para controlar las transiciones cualitativas de la ansiedad, mapeando los estados en una estructura lineal indexada. Al evaluar de forma lineal el arreglo de estímulos, el peor de los casos se mantiene en una complejidad de tiempo lineal $O(n)$, mientras que el mejor escenario aprovecha el cortocircuito (*short-circuit*) reduciéndose a $O(1)$ gracias a la compuerta de control de riesgo cardíaco.

---

## Ejecución del Módulo

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) en su versión LTS actual.
2. Abre tu terminal de comandos y desplázate hasta la raíz de este directorio.
3. Inicia la ejecución de la simulación mediante el comando:
    ```bash
    node maria-montepeque.js
    ```