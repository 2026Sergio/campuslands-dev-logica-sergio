  # Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`peleadores`) que contiene los atributos de cada atleta (`nombre`, `categoria`, `victorias` y `pesoKg`).
* **Proceso**: Validación de integridad global del arreglo, mapeo de un diccionario de pesos por categoría para establecer prioridades de experiencia, creación de una copia inmutable del arreglo, y aplicación de un algoritmo de ordenamiento multicriterio (`sort`) basado en jerarquía de categoría, récord descendente de victorias y peso corporal ascendente.
* **Salida**: Un objeto que detalla el `total_peleadores`, la lista de `peleadores_organizados` bajo los criterios aplicados y una `explicacion` (o un objeto con un mensaje de `error` si los datos de entrada no son válidos).

## Reglas identificadas

1. **Regla de Jerarquía por Categoría de Experiencia**: Los peleadores deben organizarse prioritariamente por su nivel de experiencia (profesionales primero, seguidos por semiprofesionales y amateurs) utilizando un diccionario de pesos numéricos.
2. **Regla de Desempate por Récord de Victorias**: En caso de que dos o más peleadores compartan la misma categoría, se aplica un ordenamiento secundario descendente basado en la cantidad de victorias (`b.victorias - a.victorias`).
3. **Regla de Desempate por Peso Corporal**: Si persiste la igualdad tanto en categoría como en victorias, se desempata de forma definitiva ordenando los atletas de manera ascendente por su peso en kilogramos (`a.pesoKg - b.pesoKg`).

## Pruebas

### Caso normal

* **Entrada**: `peleadores = [ { nombre: "Carlos 'The Lion' Pérez", categoria: "Amateur", victorias: 5, pesoKg: 70 }, { nombre: "Julián Gómez", categoria: "Profesional", victorias: 12, pesoKg: 75 }, { nombre: "Andrés Silva", categoria: "Profesional", victorias: 15, pesoKg: 72 }, { nombre: "Mateo Ruiz", categoria: "SemiProfesional", victorias: 8, pesoKg: 68 } ]`
* **Resultado esperado**: `{ total_peleadores: 4, peleadores_organizados: [ { nombre: "Andrés Silva", categoria: "Profesional", victorias: 15, pesoKg: 72 }, { nombre: "Julián Gómez", categoria: "Profesional", victorias: 12, pesoKg: 75 }, { nombre: "Mateo Ruiz", categoria: "SemiProfesional", victorias: 8, pesoKg: 68 }, { nombre: "Carlos 'The Lion' Pérez", categoria: "Amateur", victorias: 5, pesoKg: 70 } ], explicacion: "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador." }`

### Caso borde

* **Entrada**: `peleadores = [ { nombre: "Esteban Solitario", categoria: "Amateur", victorias: 0, pesoKg: 65 } ]`
* **Resultado esperado**: `{ total_peleadores: 1, peleadores_organizados: [ { nombre: "Esteban Solitario", categoria: "Amateur", victorias: 0, pesoKg: 65 } ], explicacion: "Se organizó la lista de peleadores de kickboxing jerarquizando por categoría de experiencia, luego por cantidad de victorias y finalmente por peso corporal según las reglas del reto integrador." }`

## Explicacion final

La solución funciona porque implementa un algoritmo de ordenamiento multicriterio encadenado dentro del método `sort`. Al utilizar un diccionario de mapeo numérico para las categorías y evaluar de forma secuencial múltiples condiciones de desempate, el sistema jerarquiza la colección de atletas con absoluta precisión. Además, garantiza la inmutabilidad de los datos originales mediante el operador de propagación, logrando un proceso robusto, predecible y seguro.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para ordenamientos multicriterio**: Simula manualmente la comparación entre pares de elementos considerando las prioridades de categoría, victorias y peso antes de aplicar la función de ordenamiento en el código para asegurar que los criterios devuelvan el orden exacto esperado.