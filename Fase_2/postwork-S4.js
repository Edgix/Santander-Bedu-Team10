// ******************************************************************************************* //
// ***************                                                             *************** //
// ***************                      POSTWORK SESION 4                      *************** //
// ***************                                                             *************** //
// ******************************************************************************************* //

function deepEqual(a, b) {

    // Si la variable es de tipo object, iteramos sobre el arreglo verificando que ambos objects tengan
    // la misma cantidad de keys. Si es asi, llamamos de forma recursiva a deepEqual pero con los values
    // correspondientes a la key de esa iteración.
    // Si en cualquier punto de la iteración los values no son iguales, retorna false.
    if ((typeof a === 'object') || (typeof b === 'object')) {

        if (Object.keys(a).length === Object.keys(b).length) {
            
            for (const i of Object.keys(a)) {
                if (deepEqual(a[i], b[i]) === false) return false
            }

            return true
        }

        return false
    }
    else {
        if (a === b) {
            return true;
        }
        false
        return false;
    }
}
  
var john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log('Test 6:', deepEqual({ firstName: 'John' }, john)) // false
  


// ******************************************************************************************* //

function chunk(array, size) {
    
    chunkArray = [];
    chunkAux   = [];
    for (let i = 0; i < array.length; i++) {
        
        chunkAux.push(array[i]);

        // Si el array auxiliar contiene tantos caracteres como indica size
        // Anexamos a chunckArray y resetamos el array
        if (chunkAux.length >= size) {
            chunkArray.push(chunkAux);
            chunkAux = [];   
        }
    }

    return chunkArray;
}


var data = [1, 2, 3, 4, 5, 6, 7, 8]

//console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
//console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
//console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// ******************************************************************************************* //

function sortObject(objet) {

    let sortFreq = {}
    let ordKeys = Object.keys(objet).sort()     // Obtenemos las llaves del objeto y las ordenamos

    // Agregamos las llaves en orden y recuperamos su valor del objeto recibido
    for (const i in ordKeys) {
        sortFreq[ ordKeys[i] ] = objet[ ordKeys[i] ];
    }

    return sortFreq;
}


function frequency(string) {

    let charFreq = {}

    // Dividimos el string caracter por caracter
    chunkString = chunk(string, 1);

    for (const item of chunkString) {
    
        // Si el caracter no se encuentra en el objeto, lo agregamos
        // E incrementamos su frecuencia a 1
        if (!charFreq.hasOwnProperty( String(...item) )) {
            charFreq[String(...item)] = 1;
        }
        // Si ya existia en el objeto, incrementamos la frecuencia
        else {
            charFreq[String(...item)] += 1;
        }

    }
    
    // Ordenamos el objeto
    sortFreq = sortObject (charFreq);

    return sortFreq;
}


//console.log('Test 1:', frequency('cccbbbaaa'))           // {a: 3, b: 3, c: 3}
//console.log('Test 2:', frequency('www.bedu.org'))        // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
//console.log('Test 3:', frequency('john.doe@domain.com')) // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}