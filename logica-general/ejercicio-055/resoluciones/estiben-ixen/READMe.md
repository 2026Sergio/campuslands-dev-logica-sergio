# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre del dibujo digital.
  * Cantidad de capas utilizadas.
  * Estado del proyecto.
  * Resolucion de la imagen.

* Proceso:

  * Validar cada regla de negocio del sistema.
  * Revisar que el dibujo tenga un titulo.
  * Comprobar que tenga suficientes capas para edición.
  * Validar que el estado del proyecto sea permitido.
  * Revisar que la resolución cumpla el mínimo requerido.
  * Registrar las reglas que no se cumplen.

* Salida:

  * Resultado del análisis del dibujo.
  * Lista de reglas incumplidas cuando existan.

## Reglas identificadas

1. Todo dibujo debe tener un título registrado.
2. Un proyecto debe tener mínimo 3 capas para considerarse editable.
3. Los estados permitidos son únicamente "publico" y "privado".
4. La resolución mínima aceptada es de 1080 píxeles.
5. Si alguna regla falla, el dibujo debe pasar a revisión.

## Pruebas

### Caso normal

Entrada:

```text
titulo: Ciudad Futurista
capas: 8
estado: publico
resolucion: 1920
```

Resultado esperado:

```text
dibujo:
Ciudad Futurista

resultado:
aprobado

detalles:
[]
```

El dibujo cumple todas las reglas de negocio.

---

### Caso borde

Entrada:

```text
titulo:
capas: 1
estado: borrador
resolucion: 720
```

Resultado esperado:

```text
dibujo:
sin titulo

resultado:
requiere ajustes

detalles:
- titulo obligatorio
- cantidad de capas insuficiente
- estado no permitido
- resolucion baja
```

El sistema detecta todas las reglas incumplidas.

## Explicacion final

La solución funciona porque convierte las condiciones del negocio en reglas independientes que pueden evaluarse una por una.

Cada validación revisa un requisito específico del dibujo digital y almacena los problemas encontrados. Al finalizar el análisis se determina si el proyecto está aprobado o necesita ajustes.

La estructura permite agregar nuevas reglas de negocio fácilmente sin cambiar la lógica principal del programa.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
