# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`autos`) que representa el catálogo de vehículos hiperdeportivos y una cadena de texto (`modeloBuscado`) con el nombre del modelo a localizar.
- **Proceso:** Validar la integridad de los parámetros de entrada. Posteriormente, recorrer el arreglo utilizando un método de búsqueda lineal para interceptar el primer objeto cuya propiedad de identificación coincida con el criterio solicitado.
- **Salida:** El objeto con los datos técnicos del automóvil encontrado o, en su defecto, una estructura de control que detalla la ausencia del registro.

## Reglas identificadas

1. **Control de Entrada:** Si la colección no contiene elementos o el parámetro de búsqueda se encuentra ausente o en un formato incorrecto, se interrumpe la ejecución del algoritmo.
2. **Insensibilidad a Mayúsculas:** El criterio de búsqueda debe normalizarse (por ejemplo, pasándolo a minúsculas) para garantizar coincidencias exactas sin importar cómo lo digite el usuario.
3. **Manejo de Ausencias:** Si el elemento solicitado no existe en la estructura de datos, el sistema debe retornar una respuesta clara y controlada en lugar de un valor nulo o indefinido.

## Pruebas

### Caso normal

Entrada:
```javascript
const autos = [
  { modelo: "Chiron", marca: "Bugatti", velocidadMax: 420 },
  { modelo: "Jesko", marca: "Koenigsegg", velocidadMax: 480 },
  { modelo: "Nevera", marca: "Rimac", velocidadMax: 412 }
];
const modeloBuscado = "Jesko";
```

## Resultado esperado:
```
{
  "modelo": "Jesko",
  "marca": "Koenigsegg",
  "velocidadMax": 480
}
```

## Caso borde
Entrada:
```
const autos = [
  { modelo: "Chiron", marca: "Bugatti", velocidadMax: 420 }
];
const modeloBuscado = "Veneno";
```

## Resultado esperado 
```
{
  "accion": "notificar ausencia",
  "motivo": "El auto con el modelo 'Veneno' no se encuentra registrado en la colección."
}

```


Explicacion final
```
La solución es efectiva porque delega la inspección de la estructura al método nativo .find(), el cual detiene su recorrido inmediatamente al encontrar la primera coincidencia, optimizando el rendimiento. Al normalizar los textos comparados mediante .toLowerCase() y encapsular la validación de vacíos al inicio, blindamos la función contra errores de tipeo y referencias nulas, garantizando un comportamiento predecible bajo cualquier circunstancia.

```


