/*
### 5. **Contar vocales en una cadena**
- **Tarea**: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
- **Tipo de función**: Función recursiva
- **Ejemplo**: `contarVocales("hola")` → `2`
*/


function contarVocales(cadena){
    let contador=0;
    if(cadena.length>0){
        if(cadena[0]==='a'||cadena[0]==='e'||cadena[0]==='i'||cadena[0]==='o'||cadena[0]==='u'){
            contador++;
        }
        return contador+contarVocales(cadena.slice(1));
    }
    return contador;
}

console.log(contarVocales("hola"));