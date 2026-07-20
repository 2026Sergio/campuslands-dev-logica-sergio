# Logica general 054 - diagnostico de errores

## Analisis

- Entrada: Un código de error.
- Proceso: Identificar el tipo de error según el código.
- Salida: El mensaje de diagnóstico.

## Reglas identificadas

1. Si el código es 1, error de conexión.
2. Si el código es 2, error de datos.
3. Si el código es 3, error de sistema.
4. Si es otro código, error desconocido.

## Pruebas

### Caso normal

Entrada: codigo: 2

Resultado esperado: error de datos

### Caso borde

Entrada: codigo: 99

Resultado esperado: error desconocido

## Explicacion final

La función revisa el código de error y devuelve el mensaje correspondiente.