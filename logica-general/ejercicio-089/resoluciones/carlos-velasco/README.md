# Logica general 089 - simulación de estados de supervivencia en cine de terror

## Motor de Evaluación de Amenazas, Recursos y Transición de Estados

Este script simula la máquina de estados de un personaje en un escenario de una película de terror, evaluando variables críticas como el nivel de oscuridad, la presencia de amenazas, el porcentaje de batería de la linterna y la disponibilidad de escondites para determinar el desenlace de supervivencia.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el objeto del escenario es nulo o indefinido, retornando un objeto de error en caso de cumplirse.
* **Desestructuración de Parámetros**: Extrae de forma limpia las propiedades clave del escenario (`nivelOscuridad`, `presenciaMonstruo`, `bateriaLinterna`, `esconditeSeguro`).
* **Evaluación Condicional por Reglas de Supervivencia**:
* **Regla 1 (Peligro Inminente / Ataque)**: Si hay un monstruo presente y la batería de la linterna es crítica ($\le$ 15), evalúa secundariamente si existe un escondite seguro para determinar si el personaje sobrevive o es atrapado.
* **Regla 2 (Precaución con Recursos)**: Si el nivel de oscuridad es alto ($\ge$ 80) pero cuenta con batería suficiente en la linterna, el personaje avanza iluminando los pasillos.
* **Regla 3 (Zona Segura por Defecto)**: Si no se cumplen las condiciones anteriores, el entorno se mantiene temporalmente en calma.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el estado final de supervivencia, la bitácora de acciones y la explicación del proceso.


* **Tecnologías:**
* JavaScript (estructuras condicionales anidadas, desestructuración de objetos, manipulación de arreglos y estados lógicos).



---

### Explicación técnica

1. **Máquina de Estados Condicional Jerárquica**: El flujo utiliza condiciones principales y anidadas para priorizar las situaciones de máxima criticidad (amenaza con recursos agotados) antes de evaluar escenarios de exploración rutinaria.
2. **Trazabilidad de Decisiones**: A través de la bitácora de acciones, el sistema registra paso a paso el motivo de la transición de estado, aportando contexto detallado sobre el factor que determinó la supervivencia o captura del personaje.

### Lógica del Código

```javascript
const simularEstadoSupervivenciaTerror = (escenario) => {
    // 1. Validar si los datos del escenario existen
    if (!escenario) {
        return { error: "Los datos del escenario de la película de terror están vacíos o no son válidos." };
    }

    const { nivelOscuridad, presenciaMonstruo, bateriaLinterna, esconditeSeguro } = escenario;

    let estadoActual = "Explorando la Mansión";
    let bitacoraAcciones = [];

    // 2. Regla 1: Presencia de monstruo y batería crítica (Peligro inminente)
    if (presenciaMonstruo === true && bateriaLinterna <= 15) {
        estadoActual = "Ataque Inminente (Sin Batería)";
        bitacoraAcciones.push({ paso: 1, alerta: "Monstruo detectado con batería crítica en la linterna." });
        
        if (esconditeSeguro === true) {
            estadoActual = "Escondido a Salvo (Sobrevive)";
            bitacoraAcciones.push({ paso: 2, accion: "Se encontró un escondite seguro a tiempo." });
        } else {
            estadoActual = "Atrapado (Fin del Juego)";
            bitacoraAcciones.push({ paso: 2, accion: "No hay escondite seguro; el personaje fue capturado." });
        }
    } 
    // 3. Regla 2: Alta oscuridad pero monstruo ausente o linterna con buena carga
    else if (nivelOscuridad >= 80 && bateriaLinterna > 15) {
        estadoActual = "Avanzando con Precaución (Linterna Activa)";
        bitacoraAcciones.push({ paso: 1, accion: "Se utiliza la linterna para iluminar pasillos oscuros." });
    } 
    // 4. Regla 3: Zona segura o iluminada por defecto
    else {
        estadoActual = "Zona Segura / Calma Temporal";
        bitacoraAcciones.push({ paso: 1, accion: "El entorno se mantiene estable temporalmente." });
    }

    // 5. Retornar el reporte consolidado de supervivencia
    return {
        estado_final_supervivencia: estadoActual,
        bitacora: bitacoraAcciones,
        explicacion: "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites."
    };
};

```

### Salida Esperada

```json
{
  "estado_final_supervivencia": "Avanzando con Precaución (Linterna Activa)",
  "bitacora": [
    {
      "paso": 1,
      "accion": "Se utiliza la linterna para iluminar pasillos oscuros."
    }
  ],
  "explicacion": "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites."
}
{
  "estado_final_supervivencia": "Atrapado (Fin del Juego)",
  "bitacora": [
    {
      "paso": 1,
      "alerta": "Monstruo detectado con batería crítica en la linterna."
    },
    {
      "paso": 2,
      "accion": "No hay escondite seguro; el personaje fue capturado."
    }
  ],
  "explicacion": "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-089/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco