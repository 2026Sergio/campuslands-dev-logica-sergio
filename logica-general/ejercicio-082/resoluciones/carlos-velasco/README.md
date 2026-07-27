# Logica general 082 - sistema de validación de datos para registro de jugadores

## Motor de Auditoría y Verificación de Integridad para Fútbol Sala

Este script analiza un objeto de datos que representa a un jugador de fútbol sala, aplicando estrictas validaciones de tipo, existencia y rangos numéricos sobre sus propiedades principales (nombre, goles y tarjetas amarillas) antes de autorizar su registro en el torneo.

* **Descripción del proceso:**
* **Validación de Existencia Inicial**: Comprueba si el objeto `jugador` es nulo o indefinido, retornando un rechazo inmediato en caso de estar vacío.
* **Inicialización de Errores**: Define un arreglo (`errores`) para recolectar todas las incidencias de validación encontradas durante la revisión.
* **Validación de Atributos**:
* **Nombre**: Verifica que sea estrictamente de tipo `string` y que no contenga espacios vacíos tras usar `trim()`.
* **Goles**: Comprueba que sea un número válido y mayor o igual a `0`.
* **Tarjetas Amarillas**: Evalúa que corresponda a un valor numérico válido mayor o igual a `0`.


* **Dictamen Final**: Si el acumulador de errores contiene elementos, retorna un objeto con el estatus de validez en falso y la lista de anomalías; de lo contrario, confirma la aprobación exitosa del perfil.


* **Tecnologías:**
* JavaScript (verificación de tipos de datos con `typeof`, métodos de manipulación de cadenas con `trim`, manejo de arreglos para acumulación de errores, lógica condicional).



---

### Explicación técnica

1. **Acumulación de Errores Múltiples**: A diferencia de las validaciones que se detienen en el primer fallo, esta estructura revisa todas las propiedades del objeto de forma íntegra, permitiendo entregar un reporte completo de correcciones al usuario.
2. **Defensividad Tipada**: El uso de restricciones de tipo (`typeof`) previene fallas críticas derivadas de inyección de datos con tipados erróneos (como strings en campos numéricos).

### Lógica del Código

```javascript
const validarRegistroJugadorSala = (jugador) => {
    let errores = [];

    // 1. Validar existencia básica del objeto
    if (!jugador) {
        return { valido: false, errores: ["El objeto de datos del jugador está vacío."] };
    }

    // 2. Validar que el nombre sea un texto válido no vacío
    if (typeof jugador.nombre !== 'string' || jugador.nombre.trim() === "") {
        errores.push("El nombre del jugador es obligatorio y debe ser un texto válido.");
    }

    // 3. Validar que los goles sean un número mayor o igual a 0
    if (typeof jugador.goles !== 'number' || jugador.goles < 0) {
        errores.push("Los goles deben ser un número entero mayor o igual a 0.");
    }

    // 4. Validar que las tarjetas amarillas sean un número mayor o igual a 0
    if (typeof jugador.tarjetasAmarillas !== 'number' || jugador.tarjetasAmarillas < 0) {
        errores.push("Las tarjetas amarillas deben ser un valor numérico válido.");
    }

    // 5. Retornar errores si se detectaron anomalías
    if (errores.length > 0) {
        return {
            valido: false,
            errores_detectados: errores,
            explicacion: "Se rechazó el registro debido a que no cumple con las reglas de validación de datos del torneo."
        };
    }

    // 6. Retornar éxito si pasa todas las validaciones
    return {
        valido: true,
        mensaje: `El jugador ${jugador.nombre} ha sido validado correctamente para el ranking de fútbol sala.`
    };
};

```

### Salida Esperada

```json
{
  "valido": true,
  "mensaje": "El jugador Carlos Ruiz ha sido validado correctamente para el ranking de fútbol sala."
}
{
  "valido": false,
  "errores_detectados": [
    "El nombre del jugador es obligatorio y debe ser un texto válido.",
    "Los goles deben ser un número entero mayor o igual a 0.",
    "Las tarjetas amarillas deben ser un valor numérico válido."
  ],
  "explicacion": "Se rechazó el registro debido a que no cumple con las reglas de validación de datos del torneo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-082/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velascoq