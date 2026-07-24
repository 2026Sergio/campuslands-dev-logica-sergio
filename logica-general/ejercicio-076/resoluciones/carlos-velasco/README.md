# Logica general 076 - sistema de análisis de matrices y escenarios 3D

## Motor de Procesamiento Matricial (Carga Poligonal)

Este script procesa una matriz bidimensional que representa una escena en un entorno 3D, donde cada elemento numérico denota la cantidad de polígonos de un objeto específico. El sistema recorre la estructura para cuantificar los elementos, sumar la carga poligonal global y calcular el promedio por objeto.

* **Descripción del proceso:**
* **Inicialización de Acumuladores**: Define variables para contabilizar el total de polígonos (`totalPoligonos`) y la cantidad de elementos o nodos (`objetosConteo`) en cero.
* **Recorrido Bidimensional**: Utiliza un bucle anidado (`for` clásico) para navegar a través de filas y columnas de la matriz de entrada.
* **Procesamiento de Datos**: Suma el valor de cada celda a la acumulación poligonal e incrementa el contador de objetos por cada celda visitada.
* **Cálculo de Promedio**: Determina la media aritmética asegurándose de prevenir divisiones por cero en caso de recibir matrices vacías.
* **Normalización de Salida**: Formatea el promedio a dos decimales y retorna un reporte consolidado con las métricas del escenario.


* **Tecnologías:**
* JavaScript (bucles anidados para matrices, iteración de arreglos bidimensionales, manejo de condiciones ternarias y formato numérico).



---

### Explicación técnica

1. **Navegación de Matrices**: El uso de dos bucles anidados permite acceder de forma precisa a cada índice `[i][j]` de la estructura matricial, sin importar las dimensiones de la escena.
2. **Robustez ante Datos Vacíos**: La validación `objetosConteo > 0` protege la ejecución al evaluar escenarios vacíos, devolviendo ceros lógicos en lugar de errores de indeterminación matemática (`NaN`).

### Lógica del Código

```javascript
const analizarEscenario3D = (matrizEscena) => {
    let totalPoligonos = 0;
    let objetosConteo = 0;

    // 1. Recorrer la matriz bidimensional fila por columna
    for (let i = 0; i < matrizEscena.length; i++) {
        for (let j = 0; j < matrizEscena[i].length; j++) {
            totalPoligonos += matrizEscena[i][j];
            objetosConteo++;
        }
    }

    // 2. Calcular promedio seguro evitando división por cero
    const promedioPoligonos = objetosConteo > 0 ? totalPoligonos / objetosConteo : 0;

    // 3. Retornar reporte de análisis de la escena
    return {
        total_objetos: objetosConteo,
        suma_poligonos: totalPoligonos,
        promedio_poligonos_por_objeto: parseFloat(promedioPoligonos.toFixed(2)),
        explicacion: "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos."
    };
};

```

### Salida Esperada

```json
{
  "total_objetos": 6,
  "suma_poligonos": 9950,
  "promedio_poligonos_por_objeto": 1658.33,
  "explicacion": "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos."
}
{
  "total_objetos": 0,
  "suma_poligonos": 0,
  "promedio_poligonos_por_objeto": 0,
  "explicacion": "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-076/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco