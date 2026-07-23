# Logica general 080 - sistema de estrategias de selección para comida urbana

## Motor de Filtrado y Selección Óptima por Presupuesto y Calificación

Este script analiza un menú de opciones de comida urbana para recomendar el plato ideal, aplicando una estrategia de filtrado estricto por presupuesto máximo y una selección posterior basada en la mayor calificación de calidad disponible.

* **Descripción del proceso:**
* **Validación de Menú**: Comprueba si la lista de opciones (`menuPuestos`) está vacía o es nula, retornando un objeto de error en caso de cumplirse.
* **Filtrado por Presupuesto**: Utiliza el método `filter` para retener únicamente aquellos platos cuyo `precio` sea menor o igual al `presupuestoMaximo` provisto.
* **Evaluación de Casos Sin Cobertura**: Si ninguna opción se ajusta al presupuesto, retorna un mensaje indicando que no hay platos accesibles.
* **Selección por Mayor Calificación**: Itera sobre las opciones ya filtradas mediante un bucle de comparación para hallar el plato con la `calificacion` más alta.
* **Retorno del Dictamen**: Devuelve un objeto detallando el plato recomendado, su precio, su calificación y la explicación de la estrategia aplicada.


* **Tecnologías:**
* JavaScript (método de filtrado de arreglos `filter`, bucles iterativos de comparación, manipulación de objetos y lógica condicional).



---

### Explicación técnica

1. **Estrategia Combinada (Filtrado + Reducción)**: El uso secuencial de `filter` seguido de un recorrido comparativo optimiza la toma de decisiones al acotar primero el universo de opciones viables a un subconjunto financiero seguro.
2. **Resiliencia ante Límites Económicos**: El control preventivo cuando el filtro de presupuesto resulta vacío evita errores de ejecución y entrega una respuesta clara al usuario.

### Lógica del Código

```javascript
const seleccionarPlatoUrbano = (menuPuestos, presupuestoMaximo) => {
    if (!menuPuestos || menuPuestos.length === 0) {
        return { error: "No hay opciones disponibles en el menú de comida urbana." };
    }

    // 1. Filtrar platos que estén dentro del presupuesto
    const opcionesValidas = menuPuestos.filter(plato => plato.precio <= presupuestoMaximo);

    if (opcionesValidas.length === 0) {
        return {
            seleccion: null,
            motivo: "Ningún plato se ajusta al presupuesto máximo proporcionado."
        };
    }

    // 2. Estrategia: Seleccionar el plato con mayor calificación dentro de los accesibles
    let mejorPlato = opcionesValidas[0];

    for (let i = 1; i < opcionesValidas.length; i++) {
        if (opcionesValidas[i].calificacion > mejorPlato.calificacion) {
            mejorPlato = opcionesValidas[i];
        }
    }

    // 3. Retornar el reporte del plato recomendado
    return {
        plato_recomendado: mejorPlato.nombre,
        precio: mejorPlato.precio,
        calificacion: mejorPlato.calificacion,
        explicacion: `Se aplicó la estrategia de selección eligiendo la mejor calificación dentro del presupuesto de $${presupuestoMaximo}.`
    };
};

```

### Salida Esperada

```json
{
  "plato_recomendado": "Tacos al Pastor",
  "precio": 7,
  "calificacion": 4.6,
  "explicacion": "Se aplicó la estrategia de selección eligiendo la mejor calificación dentro del presupuesto de $10."
}
{
  "seleccion": null,
  "motivo": "Ningún plato se ajusta al presupuesto máximo proporcionado."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-080/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco