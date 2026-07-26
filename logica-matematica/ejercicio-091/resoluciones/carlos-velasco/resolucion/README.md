# Plantilla de solucion

## Analisis

* **Entrada**: Tres arreglos independientes (`peleadoresRojo`, `peleadoresAzul` y `categoriasPeso`) que representan los contendientes de cada esquina y las categorías habilitadas para los combates.
* **Proceso**: Validación de integridad global y de tipos de datos, control defensivo ante arreglos vacíos que retornan cero combinaciones, iteración mediante tres ciclos anidados (`for`) aplicando un producto cartesiano para cruzar categorías de peso, esquina roja y esquina azul, incremento de un contador de combinaciones, y clasificación comercial del tipo de cartelera según el volumen total de enfrentamientos.
* **Salida**: Un objeto que detalla el `total_combinaciones_posibles`, el `tipo_cartelera`, el `detalle_enfrentamientos` con cada combinación estructurada y una `explicacion` (o un objeto con un mensaje de `error` si las entradas no son válidas).

## Reglas identificadas

1. **Validación de Integridad y Arreglos Vacíos**: Todas las entradas deben ser obligatoriamente arreglos válidos; si alguno de los grupos (esquinas o categorías) está vacío, el sistema interrumpe el cálculo devolviendo un total de cero combinaciones.
2. **Aplicación de Conteo Combinatorio (Producto Cartesiano)**: El número total de enfrentamientos posibles se obtiene multiplicando dinámicamente la cantidad de categorías de peso por el número de peleadores de la esquina roja y de la esquina azul.
3. **Clasificación de la Cartelera Deportiva**: El volumen total de combinaciones genera una categorización automática de la velada en "Super Evento / Gran Torneo" ($\ge$ 20), "Velada Competitiva" ($\ge$ 10) o "Cartelera Estándar" (< 10).

## Pruebas

### Caso normal

* **Entrada**: `peleadoresRojo = ["Carlos Pérez", "Andrés Silva"]`, `peleadoresAzul = ["Julián Gómez", "Mateo Ruiz", "David Torres"]`, `categoriasPeso = ["Peso Ligero", "Peso Welter"]`
* **Resultado esperado**: `{ total_combinaciones_posibles: 12, tipo_cartelera: "Velada Competitiva", detalle_enfrentamientos: [ { combate_id: 1, categoria_peso: "Peso Ligero", esquina_roja: "Carlos Pérez", esquina_azul: "Julián Gómez" }, { combate_id: 2, categoria_peso: "Peso Ligero", esquina_roja: "Carlos Pérez", esquina_azul: "Mateo Ruiz" }, { combate_id: 3, categoria_peso: "Peso Ligero", esquina_roja: "Carlos Pérez", esquina_azul: "David Torres" }, { combate_id: 4, categoria_peso: "Peso Ligero", esquina_roja: "Andrés Silva", esquina_azul: "Julián Gómez" }, { combate_id: 5, categoria_peso: "Peso Ligero", esquina_roja: "Andrés Silva", esquina_azul: "Mateo Ruiz" }, { combate_id: 6, categoria_peso: "Peso Ligero", esquina_roja: "Andrés Silva", esquina_azul: "David Torres" }, { combate_id: 7, categoria_peso: "Peso Welter", esquina_roja: "Carlos Pérez", esquina_azul: "Julián Gómez" }, { combate_id: 8, categoria_peso: "Peso Welter", esquina_roja: "Carlos Pérez", esquina_azul: "Mateo Ruiz" }, { combate_id: 9, categoria_peso: "Peso Welter", esquina_roja: "Carlos Pérez", esquina_azul: "David Torres" }, { combate_id: 10, categoria_peso: "Peso Welter", esquina_roja: "Andrés Silva", esquina_azul: "Julián Gómez" }, { combate_id: 11, categoria_peso: "Peso Welter", esquina_roja: "Andrés Silva", esquina_azul: "Mateo Ruiz" }, { combate_id: 12, categoria_peso: "Peso Welter", esquina_roja: "Andrés Silva", esquina_azul: "David Torres" } ], explicacion: "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing." }`

### Caso borde

* **Entrada**: `peleadoresRojo = ["Esteban Solo"]`, `peleadoresAzul = ["Lucas Único"]`, `categoriasPeso = ["Peso Completo"]`
* **Resultado esperado**: `{ total_combinaciones_posibles: 1, tipo_cartelera: "Cartelera Estándar", detalle_enfrentamientos: [ { combate_id: 1, categoria_peso: "Peso Completo", esquina_roja: "Esteban Solo", esquina_azul: "Lucas Único" } ], explicacion: "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing." }`

## Explicacion final

La solución funciona porque implementa de forma exacta un principio fundamental de la combinatoria: el producto cartesiano. Mediante el uso de tres ciclos anidados estructurados, el algoritmo cruza exhaustivamente cada categoría de peso con todas las posibles duplas de contrincantes de ambas esquinas. Además, incorpora validaciones defensivas iniciales y un sistema de clasificación por umbrales, garantizando un cálculo de enfrentamientos robusto, escalable y perfectamente trazable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para conteo combinatorio**: Multiplica manualmente la longitud de tus conjuntos de entrada (número de categorías $\times$ peleadores rojos $\times$ peleadores azules) para comprobar que el volumen total de combinaciones esperadas coincida exactamente con el resultado que arrojará el algoritmo antes de programar la lógica de ciclos anidados.