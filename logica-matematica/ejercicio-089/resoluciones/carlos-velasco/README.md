# Logica matematica 089 - módulos, divisibilidad y análisis de rituales de terror

## Motor de Análisis de Divisibilidad y Clasificación de Sesiones Sobrenaturales

Este script procesa un arreglo numérico que representa los tiempos de duración de diversos rituales junto con un valor numérico divisor clave, evaluando mediante operaciones de módulo (`%`) qué elementos cumplen con la condición exacta de purificación y clasificando el estado general de la sesión.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo `tiemposRituales` es nulo, no corresponde a una estructura de tipo arreglo o está vacío, y valida que el `divisorClave` sea un número válido estrictamente mayor a cero.
* **Control de Límites Base**: Itera sobre cada elemento del arreglo asegurando que ningún tiempo de ritual sea negativo (reemplazando valores menores a cero por el límite de control cero).
* **Evaluación de Divisibilidad (`for`)**:
* Aplica la operación de módulo (`tiempo % divisorClave === 0`) para verificar si el residuo de la división es exactamente igual a cero.
* Incrementa el contador de `ritualesExitosos` y registra un estado purificado si la condición se cumple.
* De lo contrario, incrementa el contador de `ritualesBloqueados` y cataloga el ritual como corrupto o inestable.


* **Clasificación General de la Sesión**: Categoriza el estado de la sesión basándose en la comparativa de contadores:
* **Protegido / Seguro**: Si los rituales exitosos superan a los bloqueados.
* **Equilibrio Precario**: Si la cantidad de rituales exitosos y bloqueados es exactamente igual.
* **Inestable**: Si los rituales bloqueados superan a los exitosos.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el total de rituales analizados, contadores parciales, clasificación general, reporte detallado por elemento y explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, operador aritmético de módulo `%`, validación de tipos, estructuras condicionales).



---

### Explicación técnica

1. **Uso Preciso del Operador Módulo (`%`)**: Permite determinar de forma exacta la divisibilidad matemática sin generar fracciones decimales, evaluando si un tiempo de ritual calza perfectamente dentro de los ciclos del divisor clave.
2. **Resiliencia ante Datos Anómalos**: Incorpora filtros defensivos tanto para colecciones vacías o nulas como para divisores no válidos o negativos, garantizando una ejecución estable bajo cualquier escenario de entrada.

### Lógica del Código

```javascript
const analizarRitualesTerror = (tiemposRituales, divisorClave) => {
    // 1. Validar si la lista de tiempos no es válida o está vacía
    if (!tiemposRituales || !Array.isArray(tiemposRituales) || tiemposRituales.length === 0) {
        return { error: "La lista de tiempos de los rituales está vacía o no es válida." };
    }

    // 2. Validar que el divisor clave sea un número válido mayor a cero
    if (typeof divisorClave !== 'number' || divisorClave <= 0) {
        return { error: "El divisor clave para los módulos no es válido." };
    }

    let ritualesExitosos = 0;
    let ritualesBloqueados = 0;
    let reporteRituales = [];

    // 3. Iterar sobre cada tiempo evaluando la divisibilidad
    for (let i = 0; i < tiemposRituales.length; i++) {
        let tiempo = tiemposRituales[i];

        if (tiempo < 0) {
            tiempo = 0; // Control de límites para valores negativos
        }

        const esDivisible = tiempo % divisorClave === 0;

        if (esDivisible) {
            ritualesExitosos++;
            reporteRituales.push({
                ritual_id: i + 1,
                tiempo_minutos: tiempo,
                estado: "Ritual Purificado (Divisible)"
            });
        } else {
            ritualesBloqueados++;
            reporteRituales.push({
                ritual_id: i + 1,
                tiempo_minutos: tiempo,
                estado: "Ritual Corrupto / Inestable (No Divisible)"
            });
        }
    }

    // 4. Clasificación general de la sesión basada en módulos
    let clasificacionSesion = "Inestable";
    if (ritualesExitosos > ritualesBloqueados) {
        clasificacionSesion = "Protegido / Seguro";
    } else if (ritualesExitosos === ritualesBloqueados) {
        clasificacionSesion = "Equilibrio Precario";
    }

    // 5. Retornar el reporte consolidado del análisis
    return {
        total_rituales: tiemposRituales.length,
        rituales_exitosos: ritualesExitosos,
        rituales_bloqueados: ritualesBloqueados,
        clasificacion_sesion: clasificacionSesion,
        reporte: reporteRituales,
        explicacion: "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror."
    };
};

```

### Salida Esperada

```json
{
  "total_rituales": 5,
  "rituales_exitosos": 3,
  "rituales_bloqueados": 2,
  "clasificacion_sesion": "Protegido / Seguro",
  "reporte": [
    {
      "ritual_id": 1,
      "tiempo_minutos": 15,
      "estado": "Ritual Purificado (Divisible)"
    },
    {
      "ritual_id": 2,
      "tiempo_minutos": 20,
      "estado": "Ritual Purificado (Divisible)"
    },
    {
      "ritual_id": 3,
      "tiempo_minutos": 30,
      "estado": "Ritual Purificado (Divisible)"
    },
    {
      "ritual_id": 4,
      "tiempo_minutos": 42,
      "estado": "Ritual Corrupto / Inestable (No Divisible)"
    },
    {
      "ritual_id": 5,
      "tiempo_minutos": 10,
      "estado": "Ritual Purificado (Divisible)"
    }
  ],
  "explicacion": "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror."
}
{
  "total_rituales": 3,
  "rituales_exitosos": 0,
  "rituales_bloqueados": 3,
  "clasificacion_sesion": "Inestable",
  "reporte": [
    {
      "ritual_id": 1,
      "tiempo_minutos": 7,
      "estado": "Ritual Corrupto / Inestable (No Divisible)"
    },
    {
      "ritual_id": 2,
      "tiempo_minutos": 13,
      "estado": "Ritual Corrupto / Inestable (No Divisible)"
    },
    {
      "ritual_id": 3,
      "tiempo_minutos": 19,
      "estado": "Ritual Corrupto / Inestable (No Divisible)"
    }
  ],
  "explicacion": "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-089/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco