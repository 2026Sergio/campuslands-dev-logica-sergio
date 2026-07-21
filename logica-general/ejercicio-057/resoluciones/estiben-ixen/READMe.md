# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre del proyecto arquitectónico.
  * Área del diseño en metros cuadrados.
  * Tipo de material utilizado.
  * Nivel de iluminación del modelo 3D.

* Proceso:

  * Analizar cada condición del proyecto.
  * Comparar los datos recibidos con las reglas definidas.
  * Registrar los problemas encontrados.
  * Tomar una decisión final según la cantidad de errores detectados.

* Salida:

  * Estado final del proyecto.
  * Lista de motivos cuando existen problemas.

## Reglas identificadas

1. Un proyecto con área menor a 50 metros cuadrados tiene espacio reducido.
2. El material utilizado debe ser resistente para cumplir la condición de calidad.
3. La iluminación debe ser igual o superior a 70 para considerarse adecuada.
4. Si existen dos o más problemas, el proyecto es rechazado.
5. Si existe un solo problema, el proyecto requiere mejoras.
6. Si no existen problemas, el proyecto es aprobado.

## Pruebas

### Caso normal

Entrada:

```text
nombre: Torre Moderna
area: 200
material: resistente
iluminacion: 90
```

Resultado esperado:

```text
proyecto:
Torre Moderna

resultado:
aprobado

motivos:
[]
```

El diseño cumple todas las condiciones de la tabla de decisión.

---

### Caso borde

Entrada:

```text
nombre: Casa Pequeña
area: 30
material: madera
iluminacion: 40
```

Resultado esperado:

```text
proyecto:
Casa Pequeña

resultado:
rechazado

motivos:
- espacio reducido
- material no recomendado
- iluminacion insuficiente
```

El proyecto falla varias reglas de evaluación.

## Explicacion final

La solución funciona porque transforma una tabla de decisiones en condiciones programadas. Cada regla representa una situación que puede ocurrir dentro del análisis de un proyecto arquitectónico 3D.

El programa revisa todas las condiciones antes de tomar una decisión final, permitiendo identificar exactamente qué aspectos necesitan corrección.

La estructura es flexible porque se pueden agregar nuevas reglas sin cambiar el funcionamiento principal.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
