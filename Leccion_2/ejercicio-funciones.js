//ADIVINADOR

/* Crear un programa  en el que el usuario intente adivinar un númnero aleatorio secreto producido por la computadora.

1) Usar una función para generar un número aleatorio.
2) Crear una función que se encargue de manejar los intentos del usuario.
3) Usar variables globales y locales (scope o alcance de variables).
4) Dar un mensaje al usuario para que sepa si adivinó o no.

*/

//Variable global, se puede acceder a ella desde cualquier parte del código y se inicializa con let

let bienvenida = "BIENVENIDOS AL JUEGO DE ADIVINAR EL NÚMERO DE LA MUERTEEEE !"


//Función que genera un número aleatorio entre el 1 y el 600.
function generarNumeroAleatorio() {
    //variable local, solo puede ser accedida desde dentro del bloque de código  (función), si se intenta usar desde fuera de la función dará error, y se inicializa con var.
    var numeroAleatorio = Math.floor(Math.random() * 600) + 1

    return numeroAleatorio

}

//funcion para jugar
function juego(){
    console.log(bienvenida)

    let intentos = 0 //contador de intentos
    let adivinado = false

    //se usa const  porque su valor se mantiene constante
    const numeroSecreto = generarNumeroAleatorio()
 
    while(adivinado != true) {
        let intento = parseInt(prompt("Adivina el núnero que estoy pensando entre el 1 y el 600."))
        
        intentos++

        if(intento == numeroSecreto) {
            console.log(`¡Felicidades! Has adivinado el número en  ${intentos}    intentos`)
            adivinado = true
        }else if(intento < numeroSecreto) {
            console.log("El número es mayor, intenta de nuevo.")
        }else if(intento > numeroSecreto) {
            console.log("El número es menor, intenta de nuevo.")
        }else {
            console.log("Ingresa un número válido por favor.")

        }
    }

}

juego();