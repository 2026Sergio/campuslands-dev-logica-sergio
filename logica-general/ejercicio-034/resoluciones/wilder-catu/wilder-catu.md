# Diagnóstico de Errores - Tatuajes

## Descripción

Este programa revisa una lista de solicitudes de tatuajes para detectar posibles errores antes de programar una cita. Se analizan los datos de cada cliente y se informa si la solicitud es válida o cuál es el problema encontrado.

---

# Objetivo

Evaluar cada solicitud de tatuaje para identificar errores y generar un reporte con el resultado de la revisión.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const solicitudes = [];
```

Cada solicitud contiene:

- cliente
- edad
- diseño
- presupuesto

Ejemplo:

```javascript
{
    cliente: "Carlos Pérez",
    edad: 22,
    diseño: "Dragón",
    presupuesto: 800
}
```

---

# Salidas

El programa muestra un reporte con:

- Nombre del cliente.
- Resultado del diagnóstico.

---

# Reglas del diagnóstico

## Regla 1: Mayoría de edad

Si el cliente es menor de 18 años:

```javascript
if (solicitud.edad < 18)
```

Resultado:

```text
Error: el cliente es menor de edad.
```

---

## Regla 2: Diseño obligatorio

Si el campo del diseño está vacío:

```javascript
else if (solicitud.diseño.trim() === "")
```

Resultado:

```text
Error: no se especificó el diseño.
```

---

## Regla 3: Presupuesto válido

Si el presupuesto es menor o igual a cero:

```javascript
else if (solicitud.presupuesto <= 0)
```

Resultado:

```text
Error: presupuesto inválido.
```

---

## Regla 4: Solicitud válida

Si cumple todas las condiciones:

```javascript
else
```

Resultado:

```text
Solicitud válida para agendar.
```

---

# Funciones

## diagnosticarSolicitudes()

Esta función:

1. Recorre el arreglo de solicitudes.
2. Verifica cada regla.
3. Guarda el resultado correspondiente.
4. Devuelve un reporte con todas las evaluaciones.

---

## mostrarReporte()

Imprime el reporte de manera organizada en la consola.

---

# Conceptos utilizados

Durante el desarrollo se utilizaron:

- Variables.
- Constantes.
- Objetos.
- Arreglos.
- Funciones.
- Condicionales (`if`, `else if`, `else`).
- Ciclo `for`.
- Método `push()`.
- Método `forEach()`.

---

# Resultado esperado

```text
===================================
DIAGNÓSTICO DE ERRORES
SOLICITUDES DE TATUAJES
===================================

Cliente: Carlos Pérez
Resultado: Solicitud válida para agendar.

--------------------------------

Cliente: Ana López
Resultado: Error: el cliente es menor de edad.

--------------------------------

Cliente: Luis Gómez
Resultado: Error: no se especificó el diseño.

--------------------------------

Cliente: María Rodríguez
Resultado: Error: presupuesto inválido.

--------------------------------

Cliente: José Martínez
Resultado: Solicitud válida para agendar.

--------------------------------
```

---

# Aprendizajes

Con este reto se practicó:

- Identificar las entradas del problema.
- Definir las salidas esperadas.
- Detectar errores aplicando reglas de validación.
- Organizar la lógica mediante funciones.
- Procesar arreglos de objetos para obtener un resultado verificable.
- Presentar la información de forma clara y ordenada.
```