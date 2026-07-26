# Logica matematica 092 - probabilidad básica y cálculo de porcentajes de éxito en ping pong

## Motor Matemático de Probabilidad y Clasificación de Rendimiento Deportivo

Este script procesa datos numéricos correspondientes a los partidos ganados y el total de partidos jugados por un atleta, aplicando fórmulas de probabilidad básica para determinar el porcentaje de éxito, la representación decimal y el nivel de rendimiento competitivo.

* **Descripción del proceso:**
* **Validación de Tipos y Límites**: Comprueba que los parámetros de entrada sean estrictamente numéricos, valida que el total de partidos jugados sea mayor a cero (evitando divisiones por cero) y asegura que los partidos ganados se encuentren dentro del rango lógico permitido (entre cero y el total de partidos).
* **Cálculo de Probabilidad Básica**:
* Divide los casos favorables (partidos ganados) entre los casos totales (partidos jugados) para obtener la proporción decimal.
* Multiplica el resultado por 100 para proyectarlo en formato de porcentaje.


* **Precisión y Estandarización**: Aplica métodos de redondeo con `toFixed` y parseo numérico (`parseFloat`) para mantener una representación limpia de los valores decimales y porcentuales.
* **Clasificación por Umbrales de Rendimiento**: Categoriza el nivel de probabilidad del jugador según su porcentaje de éxito:
* **Alto / Favorito**: $\ge$ 75%.
* **Moderado**: $\ge$ 40% y menor a 75%.
* **Bajo / En Riesgo**: Menor a 40%.


* **Retorno del Reporte**: Devuelve un objeto estructurado que detalla los partidos ganados, el total de partidos, la probabilidad decimal, el porcentaje de éxito, el nivel de rendimiento y la explicación del proceso.


* **Tecnologías:**
* JavaScript (operaciones aritméticas de división y porcentaje, validación de tipos, control de límites y estructuras condicionales).



---

### Explicación técnica

1. **Aplicación del Principio de Probabilidad Clásica**: El algoritmo implementa la fórmula estándar de probabilidad teórica o empírica ($P(A) = \frac{\text{Casos Favorables}}{\text{Casos Totales}}$), traduciendo de forma directa los resultados deportivos en métricas estadísticas precisas.
2. **Defensa Rigurosa de Datos Anómalos**: Incorpora múltiples validaciones iniciales para prevenir errores matemáticos críticos como divisiones por cero o entradas con rangos negativos e incoherentes.

### Lógica del Código

```javascript
const calcularProbabilidadVictoriaPingPong = (partidosGanadosJugador, totalPartidosJugados) => {
    // 1. Validar que los datos de entrada sean numéricos
    if (typeof partidosGanadosJugador !== 'number' || typeof totalPartidosJugados !== 'number') {
        return { error: "Los datos de entrada deben ser valores numéricos válidos." };
    }

    // 2. Validar que el total de partidos sea mayor a cero
    if (totalPartidosJugados <= 0) {
        return { error: "El total de partidos jugados debe ser mayor a cero." };
    }

    // 3. Validar límites lógicos de los partidos ganados
    if (partidosGanadosJugador < 0 || partidosGanadosJugador > totalPartidosJugados) {
        return { error: "El número de partidos ganados no puede ser negativo ni mayor al total de partidos." };
    }

    // 4. Aplicar regla matemática de probabilidad básica
    const probabilidadPorcentaje = (partidosGanadosJugador / totalPartidosJugados) * 100;
    const probabilidadDecimal = partidosGanadosJugador / totalPartidosJugados;

    // 5. Clasificar el nivel de probabilidad del jugador
    let nivelProbabilidad = "Moderado";
    if (probabilidadPorcentaje >= 75) {
        nivelProbabilidad = "Alto / Favorito";
    } else if (probabilidadPorcentaje < 40) {
        nivelProbabilidad = "Bajo / En Riesgo";
    }

    // 6. Retornar el reporte consolidado de probabilidad
    return {
        partidos_ganados: partidosGanadosJugador,
        total_partidos: totalPartidosJugados,
        probabilidad_decimal: parseFloat(probabilidadDecimal.toFixed(4)),
        probabilidad_porcentaje: parseFloat(probabilidadPorcentaje.toFixed(2)) + "%",
        nivel_rendimiento: nivelProbabilidad,
        explicacion: "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong."
    };
};

```

### Salida Esperada

```json
{
  "partidos_ganados": 14,
  "total_partidos": 20,
  "probabilidad_decimal": 0.7,
  "probabilidad_porcentaje": "70%",
  "nivel_rendimiento": "Moderado",
  "explicacion": "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong."
}
{
  "partidos_ganados": 0,
  "total_partidos": 5,
  "probabilidad_decimal": 0,
  "probabilidad_porcentaje": "0%",
  "nivel_rendimiento": "Bajo / En Riesgo",
  "explicacion": "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-092/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco