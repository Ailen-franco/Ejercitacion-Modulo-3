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
    }
    return stringInvertido
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
    } 
    return stringInvertido
}
console.log(invertirCaso2("ADa lovelacE"))



/* Ejercicio 5) gano(tragamonedas)
Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array 
tiene más de 5 símbolos, sólo debe comparar los 5 primeros.*/

//gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
//gano(['💫', '💫', '💫', '💫', '💫']) // true
//gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true 

//Creo mi funcion con su argumento tragamonedas
const gano = (tragamonedas) => {
    // Inicializo un bucle de tipo for clasico con indice en 0, para indicarle que itere sobre cada elemento de mi array, del 0 al 5 y en crecimiento 
    for (let i = 0; i < 5; i++ ) {
        // Aplico un condicional y le digo que Si el indice de mi array es distinto estricto de mi indice 0 de mi array..
        if (tragamonedas[i] !== tragamonedas[0]) {
            // Me retorne falso
            return false
        }
    } 
    // Y sino, me retorne verdadero
    return true
}

console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨']))
console.log(gano(['💫', '💫', '💫', '💫', '💫'])) 
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️']))



/*Ejercicio 6) estanJuntos(personajes)
Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true*/

//Genero mi funcion
const estanJuntos = (personajes) => {
    // Inicializo un for clasico con indice en 0, menor a 2 y en crecimiento
    for (let i = 0; i < 2; i++) {
        // Utilizo un condicional, y le digo que, Si el indice de mi array personajes, es estrictamente igual a SAM &&(y) el string siguiente a mi indice en 0 es estrictamente igual a Frodo, o la inversa ||, entonces me retorne verdadero y sino, me retorne falso
        if ((personajes[i] === "Sam" && personajes[i+1] === "Frodo") || (personajes[i] === "Frodo" && personajes [i+1] === "Sam")) 
        return true
    } 
    return false 
}

console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo']))
console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) 
// En el repo, figuran todos true, pero para mí está bien que se muestre así, el primero true, y los otros dos false



/*Ejercicio 7) - separar(perrosYGatos)
Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'*/

//Genero mi funcion
const separar = (mascotas) => {
    // Preparo dos variables con arrays vacios para guardar la cantidad de emoji segun animalito
    let perros = []
    let gatos = []
    // Inicializo un for clasico, con indice en 0, que recorra todo mi array mascotas
    for (let i = 0; i < mascotas.length; i++) {
        // Hago un condicional y le indico, Si mi indice de mi array mascotas es estrictamente igual al emoji de perrito
        if (mascotas[i] === 'p') {
            // Entonces que a mi variable perros, le agregue un emoji perrito dentro del array
            perros.push('p')
            // y si mi arrays mascotas es estictamente igual al emoji gatito
        } else if (mascotas[i] === 'g') {
            // Entonces que me agregue el emoji a mi array de gatos
            gatos.push('g')
        }   
    }  
    return perros + gatos 
}
// Me devuelve los elementos ordenados, pero separado con coma
console.log(separar('pgpggpp'))

 