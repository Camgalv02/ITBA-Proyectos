/*Ejercicio 2
Escribe un programa que calcule el área de un triángulo. Solicita al usuario
que ingrese la base y la altura del triángulo utilizando el prompt. Luego,
muestra en la consola el resultado del cálculo del área.*/

function ejercicio2() {

    let base = parseFloat(prompt('Ingrese la base del triángulo'));
    let altura = parseFloat(prompt('Ingrese la altura del triángulo'));
    let area = (base * altura) / 2;
    console.log((`El area del triangulo es: ${area}`));

}


