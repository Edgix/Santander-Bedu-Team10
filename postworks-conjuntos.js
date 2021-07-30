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

//Chunk

function chunk(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
  }
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Frequency

function lettersInWord(str) {
    let newStr = str.toLowerCase();
    let letters = [];
  
    letters = [...new Set(newStr)].sort();
  
    return letters;
  }
  
  const countLetter = (arr, word) => {
    let newWord = word.toLowerCase();
    let count = 0;
    let box = [];
  
    arr.forEach(element => {    
      [...newWord].forEach(letter => {
        if (element === letter) {
          count++;
        }
      });
      box.push(count);
      count = 0;
    });
  
    return box;
  };
  
  function createObject(arrLetters, arrFrequency) {
    let newObject = {};
  
    arrLetters.forEach((element, i) => {    
      newObject[element] = arrFrequency[i];
      console.log(newObject);
    });
  
    return newObject;
  }
  
  const frequency = (word) => {
    let $name = lettersInWord(word);
    let $numbersLetter = countLetter($name, word);  
    return createObject($name,$numbersLetter);
  }
  
  console.log(frequency("MARCO"));