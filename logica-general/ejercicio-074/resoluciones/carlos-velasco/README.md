# Logica general 074 - sistema de diagnóstico de seguridad para sesiones de tatuaje

## Motor de Validación de Parámetros de Sesión

Este script automatiza la verificación de protocolos de seguridad, legales y técnicos antes de iniciar una sesión de tatuaje. El sistema recopila múltiples posibles anomalías para garantizar un control de calidad y cumplimiento normativo integral.

* **Descripción del proceso:**
* **Inicialización de Alertas**: Crea un arreglo vacío (`errores`) destinado a acumular las incidencias detectadas.
* **Evaluación de Protocolos**:
* **Esterilización**: Comprueba si el equipo cuenta con el estado de esterilización obligatorio.
* **Rango Técnico**: Verifica que el `voltajeMaquina` se encuentre dentro de los márgenes operativos seguros (entre 4V y 9V).
* **Validación Legal**: Confirma la existencia de la firma de consentimiento del cliente.


* **Generación de Dictamen**:
* Determina que el procedimiento es `aptoParaIniciar` únicamente si el arreglo de errores está vacío.
* Retorna un diagnóstico que incluye la lista detallada de fallas o un mensaje de aprobación si no se registraron anomalías.




* **Tecnologías:**
* JavaScript (manipulación de arreglos, operaciones condicionales independientes, objetos de configuración).



---

### Explicación técnica

1. **Acumulación de Errores**: A diferencia de las estructuras en cascada, este enfoque evalúa cada regla de manera independiente mediante `if` sucesivos. Esto permite detectar y reportar múltiples fallas simultáneamente en una sola ejecución.
2. **Determinación de Aptitud**: La validación booleana `errores.length === 0` ofrece una respuesta rápida y binaria sobre la viabilidad de la sesión.

### Lógica del Código

```javascript
const diagnosticarTatuaje = (parametrosSesion) => {
    let errores = [];

    // 1. Evaluación independiente de reglas de seguridad, operación y legales
    if (!parametrosSesion.esterilizado) {
        errores.push("Falla crítica: El equipo no ha pasado por el proceso de esterilización.");
    }
    if (parametrosSesion.voltajeMaquina < 4 || parametrosSesion.voltajeMaquina > 9) {
        errores.push("Advertencia: El voltaje de la máquina está fuera del rango seguro (4V - 9V).");
    }
    if (!parametrosSesion.consentimientoFirmado) {
        errores.push("Falla legal: Falta la firma de consentimiento del cliente.");
    }

    // 2. Retorno del dictamen global
    return {
        aptoParaIniciar: errores.length === 0,
        diagnostico: errores.length > 0 ? errores : ["Sesión lista para iniciar sin anomalías."]
    };
};

```

### Salida Esperada

```json
{
  "aptoParaIniciar": true,
  "diagnostico": [
    "Sesión lista para iniciar sin anomalías."
  ]
}
{
  "aptoParaIniciar": false,
  "diagnostico": [
    "Falla crítica: El equipo no ha pasado por el proceso de esterilización.",
    "Advertencia: El voltaje de la máquina está fuera del rango seguro (4V - 9V).",
    "Falla legal: Falta la firma de consentimiento del cliente."
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-074/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco