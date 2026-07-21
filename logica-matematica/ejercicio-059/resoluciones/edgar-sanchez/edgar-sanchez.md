## Analisis

Para resolver este problema se diseñó un algoritmo de análisis sintáctico (parsing) y validación numérica estricta aplicado a fórmulas químicas representadas como cadenas de texto (ej. "H2O", "NaCl", "C6H12O6"). El objetivo es verificar la corrección gramatical de la fórmula según la nomenclatura estándar (símbolos químicos con inicial mayúscula seguida opcionalmente de minúsculas) y asegurar que los subíndices numéricos de cada elemento sean estrictamente positivos y bien formados, para posteriormente calcular el peso molecular total a partir de una tabla de pesos atómicos conocida.

- Entrada:
  - `formula`: Cadena de texto que representa la fórmula química a validar.
  - `pesos_atomicos`: Diccionario/objeto que asigna a cada símbolo químico su peso atómico correspondiente (ej. `{"H": 1.008, "O": 15.999}`).

- Proceso:
  1. Validar tipos de datos y sanitizar la entrada (eliminar espacios residuales en la fórmula y limpiar la tabla de pesos atómicos descartando pesos no numéricos o $\le 0$).
  2. Recorrer secuencialmente la cadena de la fórmula química:
     - Identificar el símbolo del elemento: debe comenzar obligatoriamente con una letra mayúscula (`A-Z`) y puede estar seguido por una letra minúscula (`a-z`).
     - Verificar que el símbolo exista en la tabla de pesos atómicos proporcionada.
     - Extraer el subíndice numérico inmediatamente posterior (si existe).
     - Validar que el subíndice no contenga ceros a la izquierda (ej. "02" es inválido) ni sea un número menor o igual a cero.
     - Si no hay subíndice explícito, asumir por regla química que la cantidad es $1$.
  3. Acumular las cantidades por símbolo en un diccionario de frecuencias de elementos.
  4. Calcular el peso molecular total multiplicando la cantidad de átomos de cada elemento por su peso atómico individual y sumar los subtotales.
  5. Redondear los resultados numéricos a cuatro decimales.

- Salida:
  - Un diccionario/objeto con la fórmula procesada, el peso molecular total y el desglose cuantitativo por elemento. Si la fórmula es inválida o contiene errores numéricos/sintácticos, la función retorna `None`.

## Reglas identificadas

1. **Sintaxis de Símbolos Químicos:** Todo elemento químico válido debe comenzar con una letra mayúscula. Puede incluir opcionalmente una única letra minúscula consecutiva.
2. **Validación Numérica de Subíndices:** 
   - Los números de subíndice deben ser enteros estrictamente mayores que cero ($> 0$).
   - No se permiten subíndices con ceros a la izquierda (ej. "H02O" es sintácticamente inválido).
   - Un elemento sin número explícito equivale a exactamente $1$ átomo.
3. **Existencia en Tabla de Referencia:** Cualquier símbolo no registrado en la tabla de pesos atómicos proporcionada invalida automáticamente la fórmula completa.
4. **Integridad de Datos:** Cualquier entrada que no cumpla con los tipos esperados (`str` y `dict`), o fórmulas vacías, retornan un resultado nulo (`None`).

## Pruebas

### Caso normal

Entrada:
- `formula`: `"H2O"`
- `pesos_atomicos`: `{"H": 1.008, "O": 15.999}`

Resultado esperado:
```json
{
  "formula": "H2O",
  "es_valida": true,
  "peso_molecular_total": 18.015,
  "desglose": {
    "H": {
      "cantidad": 2,
      "peso_atómico": 1.008,
      "subtotal_peso": 2.016
    },
    "O": {
      "cantidad": 1,
      "peso_atómico": 15.999,
      "subtotal_peso": 15.999
    }
  }
}