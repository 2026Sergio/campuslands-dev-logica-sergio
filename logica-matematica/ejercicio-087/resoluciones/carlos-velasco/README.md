# Logica matematica 087 - secuencias numéricas y simulación de playlist

## Motor de Progresión Numérica, Acumulación de Tiempos y Clasificación Comercial

Este script procesa un arreglo de duraciones base de canciones junto con un valor numérico de incremento, generando una secuencia matemática progresiva basada en la posición de cada elemento, calculando el tiempo total acumulado y clasificando la playlist según su duración global.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo `duracionesCanciones` es nulo, no corresponde a una estructura de tipo arreglo o está vacío, y valida que el `incrementoTransicion` sea un número válido.
* **Control de Límites Base**: Itera sobre cada elemento del arreglo asegurando que ninguna duración base sea negativa (reemplazando valores menores a cero por el límite de control cero).
* **Generación de Progresión Numérica (`for`)**:
* Calcula el valor de la secuencia sumando la duración base más el producto del índice actual por el incremento de transición (`duracionBase + (i * incrementoTransicion)`).
* Acumula de manera sucesiva el tiempo total de la playlist.
* Registra un objeto detallado con el índice de la canción, su duración original y el valor resultante en la secuencia.


* **Clasificación por Umbrales de Acumulación**: Categoriza el formato de la playlist basándose en el tiempo total acumulado:
* **Playlist Extensa / Maratón**: Acumulado $\ge$ 30 unidades de tiempo.
* **Playlist Dinámica**: Acumulado $\ge$ 15 unidades de tiempo.
* **Playlist Estándar**: Acumulado menor a 15 unidades de tiempo.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye la duración total redondeada a dos decimales, la secuencia calculada, la clasificación y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, operaciones aritméticas de progresión, redondeo numérico con `toFixed` y `parseFloat`, estructuras condicionales).



---

### Explicación técnica

1. **Progresión Aritmética Indexada**: El uso del índice de iteración `i` multiplicado por el incremento de transición permite modular matemáticamente el tiempo de cada canción de forma lineal en función de su orden en la cola.
2. **Resiliencia ante Valores Negativos**: Previene distorsiones aritméticas aplicando un límite defensivo que neutraliza duraciones base negativas antes de realizar las operaciones de acumulación.

### Lógica del Código

```javascript
const simularSecuenciaPlaylist = (duracionesCanciones, incrementoTransicion) => {
    // 1. Validar si el arreglo de duraciones no es válido o está vacío
    if (!duracionesCanciones || !Array.isArray(duracionesCanciones) || duracionesCanciones.length === 0) {
        return { error: "La lista de duraciones de la playlist está vacía o no es válida." };
    }

    // 2. Validar que el incremento de transición sea un número válido
    if (typeof incrementoTransicion !== 'number') {
        return { error: "El incremento de transición numérico no es válido." };
    }

    let secuenciaCalculada = [];
    let acumuladoTiempo = 0;

    // 3. Generar la secuencia numérica aplicando reglas matemáticas de progresión
    for (let i = 0; i < duracionesCanciones.length; i++) {
        let duracionBase = duracionesCanciones[i];
        
        if (duracionBase < 0) {
            duracionBase = 0; // Control de límites para valores negativos
        }

        const valorSecuencia = duracionBase + (i * incrementoTransicion);
        acumuladoTiempo += valorSecuencia;

        secuenciaCalculada.push({
            cancion_indice: i + 1,
            duracion_original: duracionBase,
            duracion_con_secuencia: valorSecuencia
        });
    }

    // 4. Clasificar la playlist según la duración total acumulada
    let clasificacion = "Playlist Estándar";
    if (acumuladoTiempo >= 30) {
        clasificacion = "Playlist Extensa / Maratón";
    } else if (acumuladoTiempo >= 15) {
        clasificacion = "Playlist Dinámica";
    }

    // 5. Retornar el reporte consolidado de la secuencia
    return {
        duracion_total_acumulada: parseFloat(acumuladoTiempo.toFixed(2)),
        secuencia: secuenciaCalculada,
        clasificacion_playlist: clasificacion,
        explicacion: "Se generó una secuencia numérica sumando un incremento progresivo por posición de canción a las duraciones base, calculando el tiempo total acumulado."
    };
};

```

### Salida Esperada

```json
{
  "duracion_total_acumulada": 16.9,
  "secuencia": [
    {
      "cancion_indice": 1,
      "duracion_original": 3.5,
      "duracion_con_secuencia": 3.5
    },
    {
      "cancion_indice": 2,
      "duracion_original": 4,
      "duracion_con_secuencia": 4.5
    },
    {
      "cancion_indice": 3,
      "duracion_original": 2.8,
      "duracion_con_secuencia": 3.8
    },
    {
      "cancion_indice": 4,
      "duracion_original": 5.1,
      "duracion_con_secuencia": 5.1
    }
  ],
  "clasificacion_playlist": "Playlist Dinámica",
  "explicacion": "Se generó una secuencia numérica sumando un incremento progresivo por posición de canción a las duraciones base, calculando el tiempo total acumulado."
}
{
  "duracion_total_acumulada": 2,
  "secuencia": [
    {
      "cancion_indice": 1,
      "duracion_original": 2,
      "duracion_con_secuencia": 2
    }
  ],
  "clasificacion_playlist": "Playlist Estándar",
  "explicacion": "Se generó una secuencia numérica sumando un incremento progresivo por posición de canción a las duraciones base, calculando el tiempo total acumulado."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-087/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco