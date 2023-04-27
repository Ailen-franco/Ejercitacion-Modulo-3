/*Ejercicio 1) - obtenerIndice(valor, array)
Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.*/

//obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
//obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

const obtenerIndice = (valor, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return i
        }
    } return -1
}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]))



/*Ejercicio 2) - repetir(valor, cantidad)
Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.*/

//repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
//repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
//repetir('html', 0) // []

