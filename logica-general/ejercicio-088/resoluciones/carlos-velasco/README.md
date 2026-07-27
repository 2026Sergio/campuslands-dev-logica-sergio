# Logica general 088 - flujos paso a paso para misiones de ciencia ficción

## Motor de Validación Secuencial de Protocolos Espaciales

Este script procesa un objeto de configuración que representa una misión de ciencia ficción, evaluando de forma estrictamente secuencial múltiples fases críticas de seguridad (energía, estado de escudos y autorización de inteligencia artificial) mediante un flujo de control condicional paso a paso.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el objeto de la misión es nulo o indefinido, retornando un objeto de error en caso de cumplirse.
* **Paso 1: Verificación de Energía**:
* Registra en la bitácora el estado del nivel de energía comparándolo frente al umbral requerido de 50 unidades.
* Interrumpe la misión de inmediato si la energía es insuficiente, retornando un reporte de fallo en el primer paso.


* **Paso 2: Análisis de Integridad de Escudos**:
* Registra la verificación del estado de los escudos protectores (`escudosActivos`).
* Detiene el protocolo y retorna un fallo si los escudos se encuentran desactivados.


* **Paso 3: Autorización de la IA Central**:
* Evalúa la bandera de aprobación de la inteligencia artificial (`iaAutorizada`).
* Bloquea la misión en caso de no contar con el permiso central dimensional.


* **Retorno del Reporte Exitoso**: Si todas las fases se superan satisfactoriamente, devuelve un objeto confirmando el éxito de la misión junto con la bitácora completa de los eventos.


* **Tecnologías:**
* JavaScript (estructuras de control secuencial, manipulación de arreglos y objetos, lógica condicional booleana).



---

### Explicación técnica

1. **Flujo Secundario de Cortocircuito (Fail-Fast)**: Cada paso actúa como una compuerta de validación obligatoria. Si un criterio no se cumple, el algoritmo aborta la ejecución de forma anticipada, evitando procesar fases posteriores innecesarias y registrando con precisión el punto exacto del fallo.
2. **Construcción Dinámica de Bitácora**: A medida que avanza la validación, se van acumulando de forma secuencial los estados de cada prueba en un arreglo de bitácora, garantizando trazabilidad completa tanto en escenarios exitosos como fallidos.

### Lógica del Código

```javascript
const procesarMisionCienciaFiccion = (mision) => {
    // 1. Validar si los datos de la misión existen
    if (!mision) {
        return { error: "Los datos de la misión de ciencia ficción están vacíos o no son válidos." };
    }

    let pasoActual = "Inicio de Protocolo";
    let bitacoraFlujo = [];

    // 2. Paso 1: Verificación de energía de la nave
    bitacoraFlujo.push({ paso: 1, accion: "Verificación de energía", estado: mision.energia >= 50 ? "Aprobado" : "Crítico" });
    if (mision.energia < 50) {
        return {
            mision_exitosa: false,
            paso_fallido: 1,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 1: nivel de energía insuficiente para el salto hiperespacial."
        };
    }

    // 3. Paso 2: Análisis de integridad del escudo
    bitacoraFlujo.push({ paso: 2, accion: "Análisis de escudos", estado: mision.escudosActivos ? "Aprobado" : "Desactivado" });
    if (!mision.escudosActivos) {
        return {
            mision_exitosa: false,
            paso_fallido: 2,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 2: los escudos protectores están desactivados frente a radiación cósmica."
        };
    }

    // 4. Paso 3: Autorización de Inteligencia Artificial (IA)
    bitacoraFlujo.push({ paso: 3, accion: "Validación de IA central", estado: mision.iaAutorizada ? "Aprobado" : "Bloqueado" });
    if (!mision.iaAutorizada) {
        return {
            mision_exitosa: false,
            paso_fallido: 3,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 3: la inteligencia artificial central denegó el acceso al sector dimensional."
        };
    }

    // 5. Retornar éxito general si se superaron todos los pasos
    return {
        mision_exitosa: true,
        bitacora: bitacoraFlujo,
        explicacion: "Se completaron exitosamente todos los flujos paso a paso requeridos para autorizar la expedición de ciencia ficción."
    };
};

```

### Salida Esperada

```json
{
  "mision_exitosa": true,
  "bitacora": [
    {
      "paso": 1,
      "accion": "Verificación de energía",
      "estado": "Aprobado"
    },
    {
      "paso": 2,
      "accion": "Análisis de escudos",
      "estado": "Aprobado"
    },
    {
      "paso": 3,
      "accion": "Validación de IA central",
      "estado": "Aprobado"
    }
  ],
  "explicacion": "Se completaron exitosamente todos los flujos paso a paso requeridos para autorizar la expedición de ciencia ficción."
}
{
  "mision_exitosa": false,
  "paso_fallido": 1,
  "bitacora": [
    {
      "paso": 1,
      "accion": "Verificación de energía",
      "estado": "Crítico"
    }
  ],
  "explicacion": "La misión se detuvo en el paso 1: nivel de energía insuficiente para el salto hiperespacial."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-088/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco