# Logica matematica 082 - sistema de porcentajes y proporciones para rendimiento deportivo

## Motor de Cálculo de Efectividad, Diferencia de Goles y Clasificación de Equipos

Este script analiza las estadísticas de un equipo de fútbol sala (partidos jugados, ganados, goles anotados y recibidos) aplicando fórmulas matemáticas de proporciones, porcentajes de rendimiento y operaciones de diferencia, para entregar una categorización precisa del desempeño.

* **Descripción del proceso:**
* **Validación de Parámetros**: Comprueba que el número de `partidosJugados` sea estrictamente mayor a cero, retornando un error en caso de división por cero o datos inválidos.
* **Cálculo de Porcentaje de Efectividad**: Obtiene la proporción de victorias dividiendo los partidos ganados entre los partidos jugados y multiplicando el resultado por 100.
* **Cálculo de Diferencia de Goles**: Resta los goles recibidos a los goles anotados para determinar el balance defensivo y ofensivo.
* **Clasificación por Umbrales**: Asigna una categoría al equipo en función de su porcentaje de efectividad:
* **Líder de Torneo**: Efectividad $\ge$ 80%.
* **Competitivo**: Efectividad $\ge$ 50%.
* **Regular**: Efectividad por debajo del 50%.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el porcentaje de efectividad formateado a dos decimales, la diferencia de goles, la categoría asignada y la explicación del proceso.


* **Tecnologías:**
* JavaScript (operaciones aritméticas básicas, fórmulas de porcentajes, formato de cadenas numéricas con `toFixed`, lógica condicional).



---

### Explicación técnica

1. **Modelado Proporcional y Estadístico**: Permite transformar datos discretos (partidos y goles) en métricas comparables y normalizadas (porcentajes de éxito y balances de goles).
2. **Protección contra Errores Matemáticos**: La validación inicial del denominador (`partidosJugados > 0`) previene fallas de ejecución críticas por división entre cero.

### Lógica del Código

```javascript
const calcularRendimientoFutbolSala = (partidosJugados, partidosGanados, golesAnotados, golesRecibidos) => {
    // 1. Validar que el número de partidos jugados sea mayor a cero
    if (partidosJugados <= 0) {
        return { error: "El número de partidos jugados debe ser mayor a cero." };
    }

    // 2. Calcular porcentaje de efectividad y diferencia de goles
    const porcentajeEfectividad = (partidosGanados / partidosJugados) * 100;
    const diferenciaGoles = golesAnotados - golesRecibidos;

    // 3. Clasificar según los umbrales de efectividad
    let categoria = "Regular";
    if (porcentajeEfectividad >= 80) {
        categoria = "Líder de Torneo";
    } else if (porcentajeEfectividad >= 50) {
        categoria = "Competitivo";
    }

    // 4. Retornar el reporte consolidado
    return {
        porcentaje_efectividad: `${porcentajeEfectividad.toFixed(2)}%`,
        diferencia_de_goles: diferenciaGoles,
        categoria_equipo: categoria,
        explicacion: "Se calculó el porcentaje de efectividad en base a los partidos ganados y la proporción de goles anotados frente a recibidos."
    };
};

```

### Salida Esperada

```json
{
  "porcentaje_efectividad": "80.00%",
  "diferencia_de_goles": 20,
  "categoria_equipo": "Líder de Torneo",
  "explicacion": "Se calculó el porcentaje de efectividad en base a los partidos ganados y la proporción de goles anotados frente a recibidos."
}
{
  "porcentaje_efectividad": "0.00%",
  "diferencia_de_goles": -16,
  "categoria_equipo": "Regular",
  "explicacion": "Se calculó el porcentaje de efectividad en base a los partidos jugados y la proporción de goles anotados frente a recibidos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-082/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco