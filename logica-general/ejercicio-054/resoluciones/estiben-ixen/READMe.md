# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre o diseño del tatuaje.
  * Tamaño del tatuaje.
  * Estilo utilizado.
  * Zona del cuerpo donde será realizado.

* Proceso:

  * Revisar que todos los datos necesarios existan.
  * Validar que el tamaño sea correcto.
  * Comprobar que el estilo pertenezca a las opciones permitidas.
  * Verificar que la zona del cuerpo esté definida.
  * Registrar todos los errores encontrados.
  * Generar un diagnóstico final.

* Salida:

  * Estado del tatuaje.
  * Lista de errores detectados cuando existan.

## Reglas identificadas

1. Un tatuaje debe tener un diseño registrado para poder evaluarse.
2. El tamaño debe ser mayor que cero.
3. Los estilos permitidos son únicamente "color" y "negro".
4. La zona del cuerpo debe estar especificada.
5. Si existe al menos un error, el tatuaje requiere corrección.

## Pruebas

### Caso normal

Entrada:

```text
diseno: Dragon oriental
tamano: 25
estilo: color
zona: brazo
```

Resultado esperado:

```text
tatuaje:
Dragon oriental

estado:
aprobado

errores:
[]
```

El tatuaje cumple todas las reglas establecidas.

---

### Caso borde

Entrada:

```text
diseno:
tamano: 0
estilo: otro
zona:
```

Resultado esperado:

```text
tatuaje:
sin nombre

estado:
requiere correccion

errores:
- diseno faltante
- tamano invalido
- estilo no permitido
- zona no especificada
```

El sistema detecta todos los problemas encontrados.

## Explicacion final

La solución funciona porque analiza el tatuaje mediante reglas independientes. Cada validación revisa una posible fuente de error y guarda los problemas encontrados en una lista.

Al finalizar la revisión, el programa determina si el tatuaje está aprobado o necesita correcciones según la cantidad de errores detectados.

La estructura permite agregar nuevas validaciones fácilmente sin modificar la lógica principal.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código.
