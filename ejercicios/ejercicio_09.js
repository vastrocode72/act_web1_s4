/*### 9. **Crear un contador privado**
- **Tarea**: Crea una función que devuelva otra función para contar incrementos, manteniendo el contador privado.
- **Tipo de función**: IIFE con closure
- **Ejemplo**: `contador()` → `0`, `contador()` → `1`, `contador()` → `2`*/

function crearContador() {
  let contador = 0; 
  return function() {
    contador++; 
    return contador;
  };
}


let miContador = crearContador();

console.log(miContador()); // Salida: 1
console.log(miContador()); // Salida: 2
console.log(miContador()); // Salida: 3

