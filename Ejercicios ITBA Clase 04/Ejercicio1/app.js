/*Ejercicio 1
Escribe un programa que solicite al usuario su nombre y edad utilizando
el prompt. Almacena el nombre en una variable y la edad en una constante.
Luego, muestra en la consola un mensaje que diga: "Hola [nombre], tienes
[edad] años".*/

function ejercicio1() {

    let nombre = prompt("Introduce tu nombre");
    const edad = prompt("Introduce tu edad");
    console.log(`Hola ${nombre}, tienes ${edad} años`);

}