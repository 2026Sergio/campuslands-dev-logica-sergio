# Logica general 086 - búsqueda de elementos en catálogo de hiperdeportivos

## Motor de Búsqueda Exacta y Normalizada de Vehículos

Este script procesa un catálogo de automóviles hiperdeportivos para localizar un modelo específico mediante una búsqueda estricta y normalizada, manejando de forma defensiva tanto las colecciones vacías como los términos de búsqueda mal formados.

* **Descripción del proceso:**
* **Validación de Integridad del Catálogo**: Comprueba si el arreglo de `catalogo` es nulo, no corresponde a una estructura de tipo arreglo o se encuentra vacío, retornando un objeto de error en caso de anomalías.
* **Validación del Término de Búsqueda**: Verifica que el `modeloBuscado` haya sido proporcionado y sea estrictamente una cadena de texto válida.
* **Normalización de Cadenas**: Convierte el texto buscado a minúsculas y elimina los espacios en blanco sobrantes en los extremos utilizando `toLowerCase()` y `trim()`.
* **Búsqueda por Coincidencia Exacta (`find`)**: Itera sobre el catálogo comparando cada propiedad `modelo` (previamente normalizada) frente al término de búsqueda estipulado.
* **Retorno del Reporte**: Devuelve un objeto estructurado que indica si el vehículo fue encontrado, adjuntando sus detalles técnicos en caso de éxito o un mensaje de ausencia en caso contrario.


* **Tecnologías:**
* JavaScript (método de búsqueda de arreglos `find`, normalización de cadenas, validación de tipos de datos, condicionales defensivos).



---

### Explicación técnica

1. **Normalización de Datos para Comparaciones Robustas**: Al transformar tanto el parámetro de entrada como los valores almacenados en minúsculas y eliminar espacios accidentales, se previenen fallos de coincidencia causados por errores de digitación o mayúsculas.
2. **Defensividad Estricta de Parámetros**: Asegura que el algoritmo no ejecute métodos de búsqueda sobre estructuras nulas o tipos de datos incompatibles, garantizando una alta estabilidad de ejecución.

### Lógica del Código

```javascript
const buscarHiperdeportivo = (catalogo, modeloBuscado) => {
    // 1. Validar si el catálogo no es válido o está vacío
    if (!catalogo || !Array.isArray(catalogo) || catalogo.length === 0) {
        return { error: "El catálogo de autos hiperdeportivos está vacío o no es válido." };
    }

    // 2. Validar que el modelo buscado sea un texto válido
    if (!modeloBuscado || typeof modeloBuscado !== 'string') {
        return { error: "El modelo buscado no es un texto válido." };
    }

    const busquedaNormalizada = modeloBuscado.toLowerCase().trim();

    // 3. Buscar el elemento normalizando las cadenas del catálogo
    const autoEncontrado = catalogo.find(auto => 
        auto.modelo && auto.modelo.toLowerCase().trim() === busquedaNormalizada
    );

    // 4. Retornar mensaje si no se encuentra el vehículo
    if (!autoEncontrado) {
        return {
            encontrado: false,
            modelo_buscado: modeloBuscado,
            mensaje: "El vehículo hiperdeportivo no se encuentra registrado en el catálogo actual."
        };
    }

    // 5. Retornar los detalles del vehículo encontrado
    return {
        encontrado: true,
        detalle_auto: autoEncontrado,
        explicacion: "Se aplicó una búsqueda exacta por nombre de modelo dentro del catálogo de hiperdeportivos siguiendo las reglas de la lógica general."
    };
};

```

### Salida Esperada

```json
{
  "encontrado": true,
  "detalle_auto": {
    "modelo": "Koenigsegg Jesko",
    "caballosDeFuerza": 1600,
    "velocidadMaxKmh": 480
  },
  "explicacion": "Se aplicó una búsqueda exacta por nombre de modelo dentro del catálogo de hiperdeportivos siguiendo las reglas de la lógica general."
}
{
  "encontrado": false,
  "modelo_buscado": "Ferrari F40",
  "mensaje": "El vehículo hiperdeportivo no se encuentra registrado en el catálogo actual."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-086/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco