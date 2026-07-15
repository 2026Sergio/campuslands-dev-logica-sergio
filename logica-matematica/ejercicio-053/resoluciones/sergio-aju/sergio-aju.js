function calcularAterrizaje(salto, objetivo, radio) {
    // Aplicar fórmula de distancia euclidiana
    const dx = objetivo.x - salto.x;
    const dy = objetivo.y - salto.y;
    const distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    // Comparar con zona segura
    const esExitoso = distancia <= radio;
    
    return {
        distancia_calculada: distancia.toFixed(2),
        resultado: esExitoso ? "Aterrizaje exitoso" : "Fuera de zona",
        explicacion: `El paracaidista aterrizó a ${distancia.toFixed(2)} unidades del objetivo.`
    };
}