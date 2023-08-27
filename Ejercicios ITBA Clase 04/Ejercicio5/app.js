/*Ejercicio 5
Escribe una función llamada sumarNumeros que tome dos parámetros
numéricos y devuelva la suma de ambos números. Luego, realiza unallamada a la función con valores de ejemplo y muestra el resultado en la
consola.*/

function ejercicio5() {

    function sumarNumeros(a, b) {
        return a + b;
    }

    let resultado = sumarNumeros(5, 3);

    console.log(`El resultado de la suma es: ${resultado}`);
}