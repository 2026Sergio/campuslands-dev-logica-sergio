function organizarLista(items, prioridad) {
  let bloqueados = [];
  let otros = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] === "bloqueado") {
      bloqueados.push(items[i]);
    } else {
      otros.push(items[i]);
    }
  }
  let organizados = bloqueados.concat(otros);
  return "lista_organizada: " + organizados;
}