/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/
//*googlee las formas de hacer este ejercicio, si estan mal, me gustaria que me lo comenten, gracias :)
function devolverString(string) {
   // Debe retornar un string.
   // Tu código: 
  function reverseString(string) {
return string.split("").reverse().join("")
}
console.log(asesert(reversestring(11>8))) 

function asesert(a,b) {
    return a===b;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código: 
   console.log(1+2);
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log(3-5);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   console.log(7/8);
   // Tu código:
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
    console.log(5*23);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
    console.log(43%12);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
