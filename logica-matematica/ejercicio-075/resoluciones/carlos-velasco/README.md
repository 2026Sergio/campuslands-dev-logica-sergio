# Logica matemática 075 - sistema de cálculo de rendimiento y estimación de renderizado

## Motor de Velocidad, Tiempo y Productividad Gráfica

Este script calcula la velocidad de trabajo (trazos por minuto) y estima el tiempo necesario para completar un proyecto digital complejo de gran envergadura basándose en el rendimiento previo del usuario.

* **Descripción del proceso:**
* **Validación de Datos**: Verifica que el tiempo ingresado en minutos sea estrictamente mayor a cero para evitar errores de división indefinida.
* **Cálculo de Velocidad**: Obtiene el ritmo de trazos por minuto mediante la división de los trazos realizados entre el tiempo transcurrido:

$$\text{Velocidad} = \frac{\text{Trazos Totales}}{\text{Tiempo Minutos}}$$


* **Estimación de Proyección**: Utiliza un objetivo estándar de 1000 trazos para calcular el tiempo restante necesario para finalizar la obra gráfica.
* **Normalización de Salida**: Formatea los resultados numéricos a dos decimales con `toFixed(2)` y los reconvierte a número mediante `parseFloat()`.


* **Tecnologías:**
* JavaScript (operaciones aritméticas de proporción, validación de condiciones de error, formato numérico).



---

### Explicación técnica

1. **Prevención de Indeterminación**: La validación inicial `tiempoMinutos <= 0` protege la integridad del algoritmo ante entradas inválidas, retornando un mensaje de error claro antes de ejecutar divisiones críticas.
2. **Proyección Dinámica**: Al relacionar la velocidad actual con una meta fija de 1000 trazos, el sistema ofrece una estimación de tiempo predictiva útil para la planificación de flujos de trabajo en diseño digital.

### Lógica del Código

```javascript
const calcularRendimientoRender = (trazosTotales, tiempoMinutos) => {
    // 1. Validar división por cero o tiempos negativos
    if (tiempoMinutos <= 0) {
        return { error: "El tiempo en minutos debe ser mayor a cero." };
    }

    // 2. Calcular velocidad de trazo por minuto
    const velocidadTrazo = trazosTotales / tiempoMinutos;
    
    // 3. Proyectar tiempo restante para un lienzo de 1000 trazos
    const trazosObjetivo = 1000;
    const tiempoRestanteMinutos = (trazosObjetivo - trazosTotales) / velocidadTrazo;

    // 4. Retornar métricas formateadas
    return {
        velocidad_por_minuto: parseFloat(velocidadTrazo.toFixed(2)),
        tiempo_estimado_restante: tiempoRestanteMinutos > 0 ? parseFloat(tiempoRestanteMinutos.toFixed(2)) : 0,
        explicacion: `Se calculó la velocidad basada en ${trazosTotales} trazos realizados en ${tiempoMinutos} minutos.`
    };
};

```

### Salida Esperada

```json
{
  "velocidad_por_minuto": 25,
  "tiempo_estimado_restante": 30,
  "explicacion": "Se calculó la velocidad basada en 250 trazos realizados en 10 minutos."
}
{
  "velocidad_por_minuto": 25,
  "tiempo_estimado_restante": 20,
  "explicacion": "Se calculó la velocidad basada en 500 trazos realizados en 20 minutos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-075/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco