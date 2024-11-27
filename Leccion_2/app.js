// ESTRUCTURA DE CONTROL CONDICIONAL IF

/* let clima = prompt("Hace frio o calor?");

if (clima === "frio") {
    console.log("Ponte un abrigo!")
} 
else if (clima === "calor") {
    console.log("Ponte una camiseta!")
} else { // 'de otro modo' o 'de otra forma'
    console.log("A caray pues que pregunte?")
} */

/*
Un else if en JavaScript se usa cuando tienes que tomar decisiones en tu código y necesitas 
verificar varias condiciones diferentes, pero solo quieres que una de ellas sea verdadera.

Imagina esto:
Estás en un restaurante y el mesero te pregunta qué quieres comer. Las opciones son:

Pizza
Pasta
Ensalada
El mesero solo te traerá una de esas opciones dependiendo de lo que elijas.

En programación, eso sería algo así:
*/


/* if (opcion === "Pizza") {
    console.log("Has pedido una pizza.");
  } else if (opcion === "Pasta") {
    console.log("Has pedido una pasta.");
  } else if (opcion === "Ensalada") {
    console.log("Has pedido una ensalada.");
  } else {
    console.log("Esa opción no está en el menú.");
  } */


/*
¿Cuándo lo usas?
Cuando tienes varias condiciones diferentes que verificar.
Cuando solo quieres ejecutar una opción entre todas las posibles.
Es como decir: "Si no es la primera opción, entonces revisa la segunda, y si 
tampoco es esa, revisa la siguiente".

¿Por qué no usar muchos if por separado?

Si usas solo if (sin else if), el código revisará todas las condiciones, incluso
 si una ya es verdadera. Esto puede hacer que el programa sea menos eficiente o 
 que dé resultados inesperados.

Con else if, en cuanto una condición se cumple, ya no revisa las demás. 🎉

En resumen, usa else if cuando tengas varias opciones posibles, pero solo quieras
 ejecutar una de ellas. ¡Es como elegir el platillo perfecto del menú!
*/


// ESTRUCTURA DE CÍCLICA FOR

for (let inicio = 0; inicio <= 100; inicio += 25) {
    console.log('for tipo 1', inicio);
}

for (let inicio = 0; inicio <= 100; ) {
    console.log('for tipo 2', inicio);
    inicio += 25;
}




