/*Ejercicio 4
Escribe un programa que solicite al usuario su nombre utilizando el prompt.
Luego, muestra un mensaje de alerta que diga: "Hola [nombre]". Finalmente,
muestra un cuadro de confirmación que pregunte al usuario si desea
continuar. Si el usuario hace clic en "Aceptar", muestra en la consola el
mensaje "Continuando". Si el usuario hace clic en "Cancelar", muestra en la
consola el mensaje "Operación cancelada".*/

function ejercicio4() {

    let nombreUsuario = prompt("Introduce tu nombre: ");
    alert(`Hola ${nombreUsuario}`);
    let confirmacion = confirm('Desea Continuar?')
    if (confirmacion) {
        console.log('Continuando');
    } else {
        console.log('Operacion cancelada');
    }

}