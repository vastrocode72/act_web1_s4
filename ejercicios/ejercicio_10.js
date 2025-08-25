/* ### 10. **Calcular factorial**
- **Tarea**: Crea una función que calcule el factorial de un número.
- **Tipo de función**: Función recursiva
- **Ejemplo**: `factorial(5)` → `120` */

function factorial(n) {
  if (n < 0) {
    return "No se puede calcular el factorial de un número negativo.";
  } else if (n === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
