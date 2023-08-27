/*Ejercicio 3
Escribe un programa que solicite al usuario un número entero. Si el número
es mayor que cero, muestra en la consola el mensaje "El número es positivo".
Si el número es menor que cero, muestra el mensaje "El número es
negativo". Si el número es igual a cero, muestra el mensaje "El número es
cero"*/

function ejercicio3() {

    let numero = parseInt(prompt('Ingrese un numero:'));

    if (numero > 0) {
        console.log("El numero es positivo");
    } else if (numero < 0) {
        console.log("El numero es negativo");
    } else {
        console.log("El numero es igual a 0");
    }

}