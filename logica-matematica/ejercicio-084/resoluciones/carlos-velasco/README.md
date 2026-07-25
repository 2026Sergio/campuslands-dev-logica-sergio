# Logica matematica 084 - análisis de rangos y máximos en inventario de motocicletas

## Motor de Cálculo de Dispersión de Precios, Valores Extremos y Clasificación Comercial

Este script procesa un arreglo de objetos que representan un inventario de motocicletas para extraer métricas financieras fundamentales (precio máximo, precio mínimo y rango de dispersión), identificar el modelo de mayor costo, y aplicar un sistema de categorización comercial basado en dichos rangos.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `motos` está vacío o es nulo, retornando un objeto de error en caso de cumplirse.
* **Extracción y Cálculo de Rangos**:
* Mapea el arreglo para aislar únicamente los valores numéricos de los precios.
* Utiliza los operadores matemáticos `Math.max` y `Math.min` con expansión de arreglos para encontrar los límites extremos.
* Calcula el `rangoPrecios` restando el precio mínimo al precio máximo.


* **Identificación del Elemento Máximo**: Localiza la primera coincidencia en el inventario cuyo precio coincida con el valor máximo calculado.
* **Clasificación Comercial por Umbrales**: Categoriza el inventario según la dispersión o el valor superior detectado:
* **Inventario Variado (Amplio Rango)**: Rango de precios $\ge$ 5000.
* **Gama Alta**: Precio máximo $\ge$ 10000 (en caso de no cumplir el rango amplio).
* **Gama Estándar**: Valores por defecto para dispersiones menores.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el precio máximo, precio mínimo, rango de precios, el modelo más caro, la categoría del inventario y la explicación del proceso.


* **Tecnologías:**
* JavaScript (mapeo de arreglos con `map`, búsqueda con `find`, métodos matemáticos globales `Math.max` y `Math.min` mediante operador *spread*, lógica condicional).



---

### Explicación técnica

1. **Extracción Funcional de Límites**: El uso de `map` combinado con el operador *spread* (`...`) permite transformar colecciones de objetos complejos en secuencias numéricas aptas para los métodos estáticos nativos de cálculo matemático.
2. **Resiliencia ante Arreglos Unitarios**: En inventarios de un solo elemento (casos borde), el precio máximo y mínimo coinciden, resultando en un rango de cero y asignando de forma limpia las categorías por defecto.

### Lógica del Código

```javascript
const analizarInventarioMotos = (motos) => {
    // 1. Validar si el inventario está vacío
    if (!motos || motos.length === 0) {
        return { error: "El inventario de motos está vacío." };
    }

    // 2. Extraer precios y calcular extremos y rangos
    let precios = motos.map(m => m.precio);
    let precioMaximo = Math.max(...precios);
    let precioMinimo = Math.min(...precios);
    let rangoPrecios = precioMaximo - precioMinimo;

    // 3. Buscar la moto con el precio máximo
    let motoMasCara = motos.find(m => m.precio === precioMaximo);

    // 4. Clasificar el inventario según el rango o precio máximo
    let categoriaInventario = "Gama Estándar";
    if (rangoPrecios >= 5000) {
        categoriaInventario = "Inventario Variado (Amplio Rango)";
    } else if (precioMaximo >= 10000) {
        categoriaInventario = "Gama Alta";
    }

    // 5. Retornar el reporte analítico consolidado
    return {
        precio_maximo: precioMaximo,
        precio_minimo: precioMinimo,
        rango_precios: rangoPrecios,
        modelo_mas_caro: motoMasCara ? motoMasCara.modelo : "Desconocido",
        categoria_inventario: categoriaInventario,
        explicacion: "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial."
    };
};

```

### Salida Esperada

```json
{
  "precio_maximo": 6800,
  "precio_minimo": 5500,
  "rango_precios": 1300,
  "modelo_mas_caro": "Kawasaki Ninja 400",
  "categoria_inventario": "Gama Estándar",
  "explicacion": "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial."
}
{
  "precio_maximo": 2000,
  "precio_minimo": 2000,
  "rango_precios": 0,
  "modelo_mas_caro": "Scooter 110cc",
  "categoria_inventario": "Gama Estándar",
  "explicacion": "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-084/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco