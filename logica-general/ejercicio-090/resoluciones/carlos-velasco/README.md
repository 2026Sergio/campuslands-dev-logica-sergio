# Logica general 090 - lectura de instrucciones y validación de itinerarios de viaje

## Motor de Interpretación de Directrices y Auditoría de Actividades Turísticas

Este script procesa un arreglo de objetos que representa un itinerario de viaje junto con un objeto de restricciones normativas, evaluando paso a paso cada actividad para verificar el cumplimiento de los requisitos de visado y los límites máximos de presupuesto establecidos en las instrucciones.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el itinerario es nulo, no corresponde a una estructura de tipo arreglo o está vacío, y verifica la existencia del objeto de restricciones.
* **Iteración y Auditoría por Actividad (`for`)**: Recorre cada elemento del itinerario evaluando las normativas preestablecidas mediante estructuras condicionales:
* **Regla 1 (Validación de Visado)**: Comprueba si la actividad exige visado (`requiereVisado: true`) y el viajero no cuenta con él (`tieneVisa: false`). En caso de cumplirse, bloquea la actividad y marca el itinerario global como no cumplido.
* **Regla 2 (Validación de Presupuesto)**: Evalúa si el costo de la actividad supera el límite máximo permitido por instrucción (`presupuestoMaximoActividad`). Si es así, rechaza el paso por exceso de costo y desactiva el indicador de validez general.


* **Registro de Acciones**: Almacena en un arreglo de reporte los detalles de cada paso, indicando su índice, nombre de la actividad, estado de aprobación y motivo.
* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el estado general de validez del itinerario, el total de actividades procesadas, el reporte de instrucciones y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, desestructuración y validación de objetos, manipulación de arreglos, lógica condicional booleana).



---

### Explicación técnica

1. **Interpretación Secuencial de Directrices**: El algoritmo analiza cada regla de negocio de forma estrictamente ordenada por cada elemento del itinerario, permitiendo auditar de manera integral un plan de viaje completo sin interrumpir la ejecución ante el primer fallo (a diferencia de un flujo de cortocircuito).
2. **Evaluación de Restricciones Externas**: Utiliza un objeto de restricciones separado (`restricciones`) como marco de referencia normativo, lo que aporta flexibilidad para simular diferentes perfiles de usuario o políticas de viaje sin modificar la lógica interna de las actividades.

### Lógica del Código

```javascript
const procesarInstruccionesViaje = (itinerario, restricciones) => {
    // 1. Validar si el itinerario no es válido o está vacío
    if (!itinerario || !Array.isArray(itinerario) || itinerario.length === 0) {
        return { error: "El itinerario de viaje está vacío o no es válido." };
    }

    // 2. Validar que las restricciones de lectura existan
    if (!restricciones) {
        return { error: "No se proporcionaron las reglas o restricciones de lectura de instrucciones." };
    }

    let accionesEjecutadas = [];
    let itinerarioCumplido = true;

    // 3. Leer y procesar paso a paso según las instrucciones detalladas
    for (let i = 0; i < itinerario.length; i++) {
        const paso = itinerario[i];
        let estadoPaso = "Aprobado";
        let motivo = "La actividad cumple con las directrices del viaje.";

        // Regla 1: Validar si la actividad requiere visado o permiso especial
        if (paso.requiereVisado === true && restricciones.tieneVisa === false) {
            estadoPaso = "Bloqueado / Omitido";
            motivo = "Falta el visado obligatorio especificado en las instrucciones de viaje.";
            itinerarioCumplido = false;
        } 
        // Regla 2: Validar límite de presupuesto por actividad
        else if (paso.costo > restricciones.presupuestoMaximoActividad) {
            estadoPaso = "Rechazado por Costo";
            motivo = "El costo de la actividad supera el límite máximo permitido por instrucción.";
            itinerarioCumplido = false;
        }

        accionesEjecutadas.push({
            paso_index: i + 1,
            actividad: paso.nombre,
            estado: estadoPaso,
            detalle: motivo
        });
    }

    // 4. Retornar el reporte consolidado de la validación del itinerario
    return {
        itinerario_valido: itinerarioCumplido,
        total_actividades: itinerario.length,
        reporte_instrucciones: accionesEjecutadas,
        explicacion: "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto."
    };
};

```

### Salida Esperada

```json
{
  "itinerario_valido": true,
  "total_actividades": 2,
  "reporte_instrucciones": [
    {
      "paso_index": 1,
      "actividad": "Tour por el Centro Histórico",
      "estado": "Aprobado",
      "detalle": "La actividad cumple con las directrices del viaje."
    },
    {
      "paso_index": 2,
      "actividad": "Visita al Museo Internacional",
      "estado": "Aprobado",
      "detalle": "La actividad cumple con las directrices del viaje."
    }
  ],
  "explicacion": "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto."
}
{
  "itinerario_valido": false,
  "total_actividades": 2,
  "reporte_instrucciones": [
    {
      "paso_index": 1,
      "actividad": "Tour por el Centro Histórico",
      "estado": "Rechazado por Costo",
      "detalle": "El costo de la actividad supera el límite máximo permitido por instrucción."
    },
    {
      "paso_index": 2,
      "actividad": "Visita al Museo Internacional",
      "estado": "Bloqueado / Omitido",
      "detalle": "Falta el visado obligatorio especificado en las instrucciones de viaje."
    }
  ],
  "explicacion": "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-090/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco