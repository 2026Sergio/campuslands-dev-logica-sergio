# Logica general 073 - sistema de evaluación de seguridad para paracaidismo

## Motor de Validación de Condiciones de Salto

Este script automatiza la toma de decisiones para verificar si es seguro realizar un salto en paracaidismo, evaluando múltiples variables meteorológicas y de equipamiento en una jerarquía estricta de seguridad.

* **Descripción del proceso:**
* **Valores Predeterminados**: Inicializa el estado como apto con un mensaje favorable.
* **Evaluación Condicional en Cascada**: Analiza los riesgos de mayor a menor criticidad:
* **Viento excesivo** ($> 25$): Cancela el salto de inmediato por peligro extremo.
* **Visibilidad reducida** ($< 5$): Pone el salto en espera hasta mejorar las condiciones visuales.
* **Equipo sin revisar**: Exige una revisión técnica antes de proceder.


* **Generación de Reporte**: Retorna un objeto indicando el resultado final de la evaluación y el motivo correspondiente.


* **Tecnologías:**
* JavaScript (estructuras condicionales en cadena, manejo de objetos de configuración).



---

### Explicación técnica

1. **Jerarquía de Seguridad**: La estructura `if-else if` asegura que se evalúe primero el peligro más grave (viento). Esto evita que condiciones secundarias oculten una situación de riesgo crítico.
2. **Determinismo**: La función procesa un objeto de entrada y devuelve una respuesta estructurada de forma inmediata, facilitando la integración con tableros de control de operaciones de vuelo.

### Lógica del Código

```javascript
const evaluarSaltoParacaidas = (condiciones) => {
    let estado = "Apto para salto";
    let razon = "Todas las condiciones meteorológicas son favorables.";

    // 1. Evaluación jerárquica de factores de riesgo
    if (condiciones.viento > 25) {
        estado = "Cancelado";
        razon = "Velocidad del viento excede el límite seguro.";
    } else if (condiciones.visibilidad < 5) {
        estado = "Espera";
        razon = "Visibilidad reducida por debajo del mínimo requerido.";
    } else if (!condiciones.equipoRevisado) {
        estado = "Revisión requerida";
        razon = "El equipo principal no ha sido verificado.";
    }

    // 2. Retorno del dictamen de seguridad
    return {
        resultado: estado,
        motivo: razon
    };
};

```

### Salida Esperada

```json
{
  "resultado": "Apto para salto",
  "motivo": "Todas las condiciones meteorológicas son favorables."
}
{
  "resultado": "Cancelado",
  "motivo": "Velocidad del viento excede el límite seguro."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-073/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco