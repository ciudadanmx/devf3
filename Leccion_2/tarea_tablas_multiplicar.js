/*
Ejercicio de tarea: Generar una tabla de multiplicar (usando funciones)
Crea un programa que solicite al usuario un número y genere la tabla de multiplicar para ese número.
Divide el programa en funciones y usa ciclos para generar los resultados.

Requisitos del ejercicio:
- Usa una función para solicitar el número al usuario.
- Crea otra función para generar y mostrar la tabla de multiplicar.
- El programa debe generar la tabla desde el 1 hasta el 10.
- Asegúrate de usar variables locales para manejar los cálculos.

*/

//solicita el número al usuario y lo convierte a número entero
function solicitarNumero() {
    var numero = parseInt(prompt("Ingresa un número del 1 al 10 para ver su tabla de multiplicar."))
    //devuelve el número
    return numero
}

//función que genera y muestra la tabla de multiplicar del número que se le pasa.
function tablaMultiplicar(numero) {

    //usa variable local
    var multiplicador = numero
    //verifica que el dato sea un número en caso contrario devuelve false
    if(typeof numero=== "number") {
        
        //verifica que el número no sea negativo y menor a 10
        if(numero < 0) {
            console.log("El número no puede ser negativo, ingresa un número positivo!!")
            return(false)
        }else if(numero > 10) {
            console.log("El número no puede ser mayor a 10, ingresa un número menor a 10!!")
            return(false)

        //si el número es positivo y menor a 10
        }else {
            //ciclo para generar la tabla de multiplicar
            for (var i = 1; i <= 10; i++) {
                if (multiplicador > 0){
                    console.log(multiplicador + " x " + i + " = " + multiplicador * i)
                }
                else {
                    //si el dato ingresado no es número se notifica el error al usuario.
                    console.log("El dato no es un número, ingresa un número, zape virtual !!")
                    return(false)
                }
            }
            //se retorna true solo una vez que se ha acabado de iterar el ciclo
            return(true)
        }
    }
       
    //si el dato ingresado no es número se notifica el error al usuario.
    else {
        console.log("El dato no es un número, ingresa un número, zape virtual !!")
        return(false)
    }
}


//ciclo que solicita un número al usuario por si ingresara un dato inválido, si ingresa un dato válido llama a la función tablaMultiplicar para generar la tabla de multiplicar del número ingresado.


while(tablaMultiplicar(solicitarNumero()) == false) {

    tablaMultiplicar(solicitarNumero())

}










