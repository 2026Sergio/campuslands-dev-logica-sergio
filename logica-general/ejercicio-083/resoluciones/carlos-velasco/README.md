# Logica general 083 - sistema de toma de decisiones para eSports

## Motor de Análisis Táctico y Selección de Estrategias de Partida

Este script analiza el estado actual de una partida de eSports (considerando oro del equipo y del rival, torres derribadas, barones conseguidos y la vida de la base propia) aplicando un conjunto de reglas condicionales jerárquicas para determinar y recomendar la estrategia óptima a seguir.

* **Descripción del proceso:**
* **Validación de Existencia**: Comprueba si el objeto `estadoPartida` es nulo o indefinido, retornando un objeto de error en caso de estar vacío.
* **Desestructuración de Parámetros**: Extrae las métricas tácticas clave del objeto de estado para facilitar su evaluación lógica.
* **Definición de Comportamiento Base**: Establece por defecto una estrategia estándar ("Juego Estándar / Farmeo Seguro") con su respectivo motivo de control de recursos.
* **Evaluación de Reglas Tácticas Condicionales**:
* **Regla 1 (Emergencia Defensiva)**: Si la vida de la base propia es menor o igual a 20 y el oro rival supera al propio, prioriza la "Defensa Total en Base".
* **Regla 2 (Presión y Finalización)**: Si se han conseguido barones (`baronesConseguidos > 0`) y el oro del equipo es igual o mayor al rival, ordena "Iniciar Empuje Global (Push / Finalizar)".
* **Regla 3 (Control de Mapa)**: Si se cuenta con 5 o más torres derribadas y ventaja de oro, asigna el "Control de Objetivos Neutrales (Dragón / Visión)".


* **Retorno del Reporte**: Devuelve un objeto estructurado con la estrategia recomendada y la explicación o motivo técnico de la decisión.


* **Tecnologías:**
* JavaScript (desestructuración de objetos, estructuras de control condicionales anidadas en cascada, lógica relacional y de comparación).



---

### Explicación técnica

1. **Priorización de Riesgos Críticos**: Las reglas están diseñadas para evaluar primero las condiciones de supervivencia extrema (vida de la base baja con desventaja económica) antes de considerar estrategias ofensivas o de control de mapa.
2. **Evaluación Multivariable**: El uso de condiciones compuestas permite cruzar métricas financieras (oro), objetivos estructurales (torres), mejoras de mapa (barones) y estados de salud (base) para simular una toma de decisiones táctica realista.

### Lógica del Código

```javascript
const decidirEstrategiaEsports = (estadoPartida) => {
    // 1. Validar existencia del objeto de estado
    if (!estadoPartida) {
        return { error: "No se proporcionó el estado actual de la partida." };
    }

    const { oroEquipo, oroRival, torresDerribadas, baronesConseguidos, vidaBasePropia } = estadoPartida;

    let decision = "Juego Estándar / Farmeo Seguro";
    let motivo = "La partida se encuentra equilibrada, se recomienda mantener el control de líneas y recursos.";

    // 2. Regla 1: Emergencia defensiva si la base propia está en riesgo crítico
    if (vidaBasePropia <= 20 && oroRival > oroEquipo) {
        decision = "Defensa Total en Base";
        motivo = "La vida de la base es crítica y el rival tiene ventaja económica; priorizar despeje de súbditos.";
    } 
    // 3. Regla 2: Oportunidad de victoria o presión máxima si se tiene ventaja y objetivos
    else if (baronesConseguidos > 0 && oroEquipo >= oroRival) {
        decision = "Iniciar Empuje Global (Push / Finalizar)";
        motivo = "Se cuenta con el beneficio del Barón y ventaja o igualdad de oro para presionar la base enemiga.";
    } 
    // 4. Regla 3: Control de mapa si hay superioridad de torres
    else if (torresDerribadas >= 5 && oroEquipo > oroRival) {
        decision = "Control de Objetivos Neutrales (Dragón / Visión)";
        motivo = "La ventaja en torres permite dominar la visión de la jungla rival y asegurar objetivos.";
    }

    // 5. Retornar el reporte táctico
    return {
        estrategia_recomendada: decision,
        explicacion: motivo
    };
};

```

### Salida Esperada

```json
{
  "estrategia_recomendada": "Iniciar Empuje Global (Push / Finalizar)",
  "explicacion": "Se cuenta con el beneficio del Barón y ventaja o igualdad de oro para presionar la base enemiga."
}
{
  "estrategia_recomendada": "Defensa Total en Base",
  "explicacion": "La vida de la base es crítica y el rival tiene ventaja económica; priorizar despeje de súbditos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-083/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco