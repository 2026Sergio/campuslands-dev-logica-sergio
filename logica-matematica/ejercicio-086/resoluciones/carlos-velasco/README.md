# Logica matematica 086 - conversión de unidades de velocidad para hiperdeportivos

## Motor de Conversión de Unidades Métricas e Inglesas y Clasificación de Rendimiento

Este script procesa un valor numérico de velocidad y una unidad de origen (`kmh` o `mph`) para realizar una conversión matemática precisa basada en factores de equivalencia estándar, aplicando además un sistema de categorización del rendimiento comercial para vehículos hiperdeportivos.

* **Descripción del proceso:**
* **Validación Defensiva**: Comprueba que el `valorVelocidad` sea un número válido mayor o igual a cero y que la `unidadOrigen` sea una cadena de texto utilizable.
* **Normalización de Unidad**: Convierte la unidad de origen a minúsculas y elimina espacios sobrantes con `toLowerCase()` y `trim()`.
* **Conversión Matemática Condicional**:
* Si la unidad es **km/h** o **kmh**, asigna directamente los kilómetros por hora y divide entre el factor de conversión (`1.60934`) para obtener las millas por hora.
* Si la unidad es **mph**, asigna directamente las millas por hora y multiplica por el factor de conversión para calcular los kilómetros por hora.
* Retorna un error si se ingresa una unidad no reconocida.


* **Clasificación por Umbrales de Velocidad**: Categoriza el rendimiento del vehículo en función de su equivalente en km/h:
* **Hiperdeportivo Extremo (Récord)**: Velocidad $\ge$ 400 km/h.
* **Alta Velocidad**: Velocidad $\ge$ 300 km/h.
* **Velocidad Crucero**: Valores inferiores a 300 km/h.


* **Retorno del Reporte**: Devuelve un objeto estructurado con las velocidades redondeadas a dos decimales, la categoría de rendimiento y la explicación del proceso.


* **Tecnologías:**
* JavaScript (operaciones aritméticas de conversión, normalización de cadenas, formato numérico con `toFixed` y `parseFloat`, estructuras condicionales).



---

### Explicación técnica

1. **Factor de Conversión Estándar**: Utiliza la constante matemática precisa ($1 \text{ mph} = 1.60934 \text{ km/h}$) para alternar entre división (hacia mph) y multiplicación (hacia km/h), garantizando la consistencia bidireccional.
2. **Homogeneización para Clasificación**: Antes de evaluar las categorías comerciales, el algoritmo estandariza la velocidad en una única unidad métrica de referencia (`velocidadKmh`), permitiendo que las reglas de umbral actúen de manera uniforme sin importar el formato de entrada original.

### Lógica del Código

```javascript
const convertirUnidadesHiperdeportivo = (valorVelocidad, unidadOrigen) => {
    // 1. Validar que la velocidad sea un número válido mayor o igual a 0
    if (typeof valorVelocidad !== 'number' || valorVelocidad < 0) {
        return { error: "El valor de velocidad proporcionado no es válido." };
    }

    // 2. Validar que la unidad de origen sea un texto válido
    if (!unidadOrigen || typeof unidadOrigen !== 'string') {
        return { error: "La unidad de origen no está especificada correctamente." };
    }

    let velocidadKmh = 0;
    let velocidadMph = 0;
    const FACTOR_CONVERSION = 1.60934;

    const normalizada = unidadOrigen.toLowerCase().trim();

    // 3. Aplicar fórmulas de conversión según la unidad de origen
    if (normalizada === 'kmh' || normalizada === 'km/h') {
        velocidadKmh = valorVelocidad;
        velocidadMph = valorVelocidad / FACTOR_CONVERSION;
    } else if (normalizada === 'mph') {
        velocidadMph = valorVelocidad;
        velocidadKmh = valorVelocidad * FACTOR_CONVERSION;
    } else {
        return { error: "Unidad de origen desconocida. Use 'kmh' o 'mph'." };
    }

    // 4. Clasificación de velocidad para hiperdeportivos
    let categoria = "Velocidad Crucero";
    if (velocidadKmh >= 400) {
        categoria = "Hiperdeportivo Extremo (Récord)";
    } else if (velocidadKmh >= 300) {
        categoria = "Alta Velocidad";
    }

    // 5. Retornar el reporte consolidado con valores redondeados
    return {
        velocidad_kmh: parseFloat(velocidadKmh.toFixed(2)),
        velocidad_mph: parseFloat(velocidadMph.toFixed(2)),
        categoria_rendimiento: categoria,
        explicacion: "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo."
    };
};

```

### Salida Esperada

```json
{
  "velocidad_kmh": 420,
  "velocidad_mph": 261,
  "categoria_rendimiento": "Hiperdeportivo Extremo (Récord)",
  "explicacion": "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo."
}
{
  "velocidad_kmh": 402.34,
  "velocidad_mph": 250,
  "categoria_rendimiento": "Hiperdeportivo Extremo (Récord)",
  "explicacion": "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-086/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco