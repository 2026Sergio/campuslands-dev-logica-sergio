# Logica general 078 - sistema de gestión de turnos y prioridades para soldadura

## Motor de Asignación por Prioridad de Certificación

Este script gestiona una cola de espera para la asignación de turnos en estaciones de soldadura, implementando un algoritmo que prioriza automáticamente al personal basándose en su nivel de certificación técnica (nivel más alto) en lugar de un estricto orden de llegada.

* **Descripción del proceso:**
* **Validación de Cola Vacía**: Verifica si el arreglo de entrada es nulo o carece de elementos, retornando un mensaje de estado predeterminado si no hay personal disponible.
* **Búsqueda por Prioridad**: Itera a través de la cola de objetos para identificar al soldador con el mayor `nivelCertificacion`, guardando tanto el valor máximo como su posición exacta (`indexSeleccionado`).
* **Extracción de la Cola**: Utiliza el método `splice` para remover al soldador seleccionado directamente del arreglo original, simulando su salida de la cola de espera hacia la estación de trabajo.
* **Retorno del Reporte**: Devuelve un objeto detallando el nombre del soldador seleccionado, su nivel, la cantidad de elementos restantes en la cola y una explicación del proceso.


* **Tecnologías:**
* JavaScript (manipulación de arreglos con `splice`, bucles de búsqueda iterativa, control condicional y manejo de objetos).



---

### Explicación técnica

1. **Gestión de Colas con Prioridad**: A diferencia de una cola tradicional FIFO (First In, First Out), este sistema actúa como una cola con prioridad dinámica, asegurando que perfiles altamente calificados (como nivel 3) sean atendidos primero.
2. **Mutación Controlada**: El uso de `splice` no solo extrae el elemento seleccionado para retornarlo, sino que actualiza de manera concurrente la longitud del arreglo original, facilitando el seguimiento de los soldadores que aún esperan turno.

### Lógica del Código

```javascript
const asignarTurnoSoldadura = (colaTurnos) => {
    // 1. Validar si la cola está vacía
    if (!colaTurnos || colaTurnos.length === 0) {
        return {
            turno_asignado: null,
            mensaje: "No hay soldadores en la cola de espera."
        };
    }

    // 2. Buscar al soldador con el nivel de certificación más alto
    let indexSeleccionado = 0;
    let maxNivel = colaTurnos[0].nivelCertificacion;

    for (let i = 1; i < colaTurnos.length; i++) {
        if (colaTurnos[i].nivelCertificacion > maxNivel) {
            maxNivel = colaTurnos[i].nivelCertificacion;
            indexSeleccionado = i;
        }
    }

    // 3. Extraer al soldador seleccionado de la cola
    const soldadorAsignado = colaTurnos.splice(indexSeleccionado, 1)[0];

    // 4. Retornar el reporte de asignación
    return {
        soldador_seleccionado: soldadorAsignado.nombre,
        nivel: soldadorAsignado.nivelCertificacion,
        restantes_en_cola: colaTurnos.length,
        explicacion: `Se asignó el turno al soldador ${soldadorAsignado.nombre} priorizando su nivel de certificación.`
    };
};

```

### Salida Esperada

```json
{
  "soldador_seleccionado": "Lucía",
  "nivel": 3,
  "restantes_en_cola": 2,
  "explicacion": "Se asignó el turno al soldador Lucía priorizando su nivel de certificación."
}
{
  "turno_asignado": null,
  "mensaje": "No hay soldadores en la cola de espera."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-078/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco