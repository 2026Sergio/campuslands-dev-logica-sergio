# Logica general 093 - resolución de casos y auditoría de condiciones de paracaidismo

## Motor de Evaluación de Protocolos y Simulación de Saltos en Paracaídas

Este script procesa un objeto con datos de simulación de paracaidismo, aplicando de forma secuencial múltiples reglas de control orientadas a validar la seguridad operativa, las condiciones meteorológicas y los rangos óptimos de altitud antes de autorizar un salto.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el objeto de datos del salto no existe o se encuentra vacío, retornando un mensaje de error preventivo.
* **Desestructuración de Parámetros**: Extrae las propiedades clave del objeto de entrada (`alturaMetros`, `velocidadVientoKmh`, `equipoRevisado`, `licenciaValida`).
* **Evaluación de Reglas por Fases (Cortocircuito Condicional)**:
* **Regla 1 (Seguridad Fundamental)**: Verifica la validez de la licencia y la revisión del equipo. Si alguno es falso, cancela el proceso inmediatamente mediante un retorno anticipado.
* **Regla 2 (Condiciones Meteorológicas)**: Comprueba si la velocidad del viento supera el límite seguro de 35 km/h. En caso afirmativo, suspende el salto de forma preventiva.
* **Regla 3 (Altura de Salto Óptima)**: Evalúa la altitud en metros para determinar si califica como un salto estándar profesional o si requiere advertencias por baja altura (< 1000 metros).


* **Bitácora de Resolución**: Almacena en un arreglo de trazabilidad cada paso verificado junto con su veredicto correspondiente.
* **Retorno del Reporte**: Devuelve un objeto estructurado que indica si el salto está autorizado, el estado final del mismo, la bitácora de pasos y la explicación del proceso.


* **Tecnologías:**
* JavaScript (desestructuración de objetos, sentencias de control condicional escalonadas, retornos anticipados, manipulación de arreglos de bitácora).



---

### Explicación técnica

1. **Flujo de Ejecución por Fases (Early Return)**: El algoritmo prioriza las validaciones críticas de seguridad en las etapas iniciales. Si una regla de alto riesgo falla, el script interrumpe la ejecución de inmediato (`return`), evitando procesar variables innecesarias y garantizando respuestas rápidas y seguras.
2. **Trazabilidad Detallada**: Utiliza un arreglo de bitácora que registra paso a paso el veredicto de cada evaluación, aportando transparencia y contexto completo sobre las razones por las cuales un salto fue aprobado, suspendido o cancelado.

### Lógica del Código

```javascript
const resolverCasoParacaidismo = (datosSalto) => {
    // 1. Validar si los datos de la simulación existen
    if (!datosSalto) {
        return { error: "Los datos de la simulación de paracaidismo están vacíos o no son válidos." };
    }

    const { alturaMetros, velocidadVientoKmh, equipoRevisado, licenciaValida } = datosSalto;

    let estadoSalto = "Aprobado para Despegue";
    let bitacoraResolucion = [];

    // 2. Regla 1: Validar documentación y equipo (seguridad fundamental)
    if (licenciaValida === false || equipoRevisado === false) {
        estadoSalto = "Cancelado por Protocolo de Seguridad";
        bitacoraResolucion.push({ paso: 1, veredicto: "Rechazado: licencia inválida o equipo sin revisar." });
        return {
            autorizado: false,
            estado_salto: estadoSalto,
            bitacora: bitacoraResolucion,
            explicacion: "El salto fue denegado preventivamente debido a incumplimientos en las normativas obligatorias de seguridad."
        };
    } else {
        bitacoraResolucion.push({ paso: 1, veredicto: "Aprobado: equipo y licencia en regla." });
    }

    // 3. Regla 2: Validar condiciones meteorológicas (viento)
    if (velocidadVientoKmh > 35) {
        estadoSalto = "Suspendido por Clima Adverso (Viento Fuerte)";
        bitacoraResolucion.push({ paso: 2, veredicto: `Viento a ${velocidadVientoKmh} km/h excede el límite seguro de 35 km/h.` });
        return {
            autorizado: false,
            estado_salto: estadoSalto,
            bitacora: bitacoraResolucion,
            explicacion: "Las condiciones de velocidad del viento representan un riesgo elevado para el despliegue del paracaídas."
        };
    } else {
        bitacoraResolucion.push({ paso: 2, veredicto: `Viento a ${velocidadVientoKmh} km/h dentro del rango seguro.` });
    }

    // 4. Regla 3: Validar altura de salto óptima
    if (alturaMetros < 1000) {
        estadoSalto = "Precaución: Salto de Baja Altura";
        bitacoraResolucion.push({ paso: 3, veredicto: "Altura menor a 1000 metros; requiere apertura inmediata." });
    } else {
        estadoSalto = "Autorizado para Salto Estándar / Profesional";
        bitacoraResolucion.push({ paso: 3, veredicto: "Altura óptima para ejecución del salto." });
    }

    // 5. Retornar el reporte consolidado de resolución del caso
    return {
        autorizado: true,
        estado_salto: estadoSalto,
        bitacora: bitacoraResolucion,
        explicacion: "Se resolvió el caso integrando múltiples reglas de control para paracaidismo, evaluando seguridad, clima y altitud."
    };
};

```

### Salida Esperada

```json
{
  "autorizado": true,
  "estado_salto": "Autorizado para Salto Estándar / Profesional",
  "bitacora": [
    {
      "paso": 1,
      "veredicto": "Aprobado: equipo y licencia en regla."
    },
    {
      "paso": 2,
      "veredicto": "Viento a 15 km/h dentro del rango seguro."
    },
    {
      "paso": 3,
      "veredicto": "Altura óptima para ejecución del salto."
    }
  ],
  "explicacion": "Se resolvió el caso integrando múltiples reglas de control para paracaidismo, evaluando seguridad, clima y altitud."
}
{
  "autorizado": false,
  "estado_salto": "Suspendido por Clima Adverso (Viento Fuerte)",
  "bitacora": [
    {
      "paso": 1,
      "veredicto": "Aprobado: equipo y licencia en regla."
    },
    {
      "paso": 2,
      "veredicto": "Viento a 40 km/h excede el límite seguro de 35 km/h."
    }
  ],
  "explicacion": "Las condiciones de velocidad del viento representan un riesgo elevado para el despliegue del paracaídas."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-093/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco