/* Ejercicio 1) obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array de números 
numeros y devuelva el menor de ellos. Ejemplo:
obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2 */

const numeros = [5, 7, 99, 34, 54, 2, 12]
 // Defino mi funcion que recibe como argumento un array de numeros
const obtenerMenor = (numeros) => {
    // Agrego una variable indicando que tome el primer valor de mi array
    let menor = numeros[0]
    // Recorro el array con un bucle for of
    for (const numero of numeros) {
        // Hago un condicional indicando que a cada numero de mi array, lo compare con mi variable menor hasta encontrar el numero mas pequeño
        if (numero < menor) {
            // Una vez encontrado el numero mas pequeño, lo guardo en mi variable menor
            menor = numero
        }
    }  
    // Retorno mi variable con el numero mas pequeño
    return menor
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) 



/* Ejercicio 2) sumar(numeros)
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
sumarNumeros([5, 7, 10, 12, 24]) // 58 */

const arrayNumeros = [5, 7, 10, 12, 24]

const sumarNumeros = (numeros) => {
    let suma = 0
    for (const numero of numeros) {
        suma = suma + numero 
    }
    return suma
}

console.log(sumarNumeros([5, 7, 10, 12, 24]))



/* Ejercicio 3) contiene(numero, numeros)
Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false */

// También se realizó en la clase
const array = [5, 7, 99, 3, 4, 54, 2, 12]

const contiene = (numero, arrayNumero) => {
    return array.includes(numero)
}

console.log(contiene(54))
console.log(contiene(103))



/* Ejercicio 4) invertirCaso(string)
Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt' */

// Prueba 1 con variable auxiliar
// Hago mi funcion con un argumento string
const invertirCaso = (string) => {
    // Inicializo mi variable con un string vacío, para utilizarla, guardando mis caracteres modificados
   let stringInvertido = ""
   // Recorro el array con un for clásico, y utilizo el método nativo length para considerar la longitud del string de mi array
   for (let i = 0; i < string.length; i++) {
    // Acudo a una variable auxiliar, para guardar los caracteres de mi string en mi variable denominada caracter
    let caracter = string[i]
    // Aplico condicional con operadores de condicion, y métodos nativos, indicandole que si mi caracter se comprueba que está en mayúscula, lo torne minúscula
    if (caracter === caracter.toUpperCase()) {
        stringInvertido += caracter.toLowerCase()
        // Y sino, torne mi caracter en mayúscula
    } else {
        stringInvertido += caracter.toUpperCase()
    }
    // Retorno el string con el caso invertido
   } return stringInvertido
}
console.log(invertirCaso("ADa lovelacE"))


// Prueba 2 omitiendo una variable auxiliar
const invertirCaso2 = (string) => {
    let stringInvertido = ""
    for (let i = 0; i < string.length; i++) {
     if (string[i] === string[i].toUpperCase()) {
         stringInvertido += string[i].toLowerCase()
     } else {
         stringInvertido += string[i].toUpperCase()
     }
    } return stringInvertido
}
console.log(invertirCaso2("ADa lovelacE"))



