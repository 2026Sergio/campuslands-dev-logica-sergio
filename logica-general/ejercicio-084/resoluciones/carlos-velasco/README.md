# Logica general 084 - sistema de filtros por condiciones para inventario de motocicletas

## Motor de Filtrado Multicriterio de Existencias y Especificaciones

Este script procesa un inventario de motocicletas aplicando un conjunto de criterios condicionales configurables (cilindrada mínima, precio máximo y disponibilidad de stock) para aislar y retornar aquellos elementos que cumplan de forma simultánea con todos los parámetros de búsqueda establecidos.

* **Descripción del proceso:**
* **Validación de Integridad de Datos**: Comprueba si el inventario de motos está vacío/nulo o si el objeto de criterio no fue proporcionado, retornando un objeto de error en caso de anomalías.
* **Filtrado por Arreglos (`filter`)**: Itera sobre cada elemento del inventario inicial para evaluar su cumplimiento frente a las condiciones del criterio.
* **Acumulación de Condiciones Lógicas**:
* **Cilindrada Mínima**: Exige que la cilindrada de la moto sea mayor o igual al parámetro especificado.
* **Precio Máximo**: Exige que el precio de la moto sea menor o igual al límite estipulado.
* **Disponibilidad de Stock**: Verifica que el stock sea estrictamente mayor a cero cuando se requiere disponibilidad activa.


* **Retorno del Reporte Consolidado**: Devuelve un objeto que detalla el total de motocicletas encontradas que superaron el filtro, la lista de objetos correspondientes y la explicación de la operación.


* **Tecnologías:**
* JavaScript (método de filtrado de arreglos `filter`, lógica booleana acumulativa con operadores relacionales, manipulación de objetos).



---

### Explicación técnica

1. **Filtrado Acumulativo Modulable**: El uso de una bandera booleana (`cumpleCriterio`) evaluada condicionalmente permite activar o desactivar filtros de manera dinámica según las propiedades presentes en el objeto de criterios, evitando restricciones rígidas.
2. **Defensividad Inicial**: Valida la existencia tanto de la fuente de datos como del objeto de reglas de búsqueda antes de procesar operaciones complejas en los arreglos.

### Lógica del Código

```javascript
const filtrarMotosDisponibles = (inventario, criterio) => {
    // 1. Validar si el inventario o los criterios son inválidos
    if (!inventario || inventario.length === 0) {
        return { error: "El inventario de motos está vacío o no es válido." };
    }

    if (!criterio) {
        return { error: "No se especificó un criterio de filtrado." };
    }

    // 2. Filtrar motocicletas según múltiples condiciones lógicas
    const motosFiltradas = inventario.filter(moto => {
        let cumpleCriterio = true;

        if (criterio.cilindradaMinima) {
            cumpleCriterio = cumpleCriterio && moto.cilindrada >= criterio.cilindradaMinima;
        }

        if (criterio.precioMaximo) {
            cumpleCriterio = cumplesCriterio = cumpleCriterio && moto.precio <= criterio.precioMaximo;
        }

        if (criterio.soloDisponibles === true) {
            cumpleCriterio = cumpleCriterio && moto.stock > 0;
        }

        return cumpleCriterio;
    });

    // 3. Retornar el reporte consolidado del filtrado
    return {
        total_encontradas: motosFiltradas.length,
        motos_filtradas: motosFiltradas,
        explicacion: "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos."
    };
};

```

### Salida Esperada

```json
{
  "total_encontradas": 1,
  "motos_filtradas": [
    {
      "modelo": "Yamaha MT-03",
      "cilindrada": 321,
      "precio": 5500,
      "stock": 4
    }
  ],
  "explicacion": "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos."
}
{
  "total_encontradas": 0,
  "motos_filtradas": [],
  "explicacion": "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-084/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco