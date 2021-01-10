'use strict';

const person = {
    name: 'Sanyika',
    age: 18,
    idNumber: '123456AB'
}

const personValue = Object.values(person);
const personKeys = Object.keys(person);

console.log ( personValue);
console.log ( personKeys);

person.married = false;
console.log(person);

console.log("..................................................................................................................................");

const matrixSize =  4;
const matrix = [];

for (let i=0 ; i<matrixSize; i++){
    matrix [i] = [];

for (let j=0; j<matrixSize; j++) {

    if (i===j){
    
    matrix[i][j] = 1;


    }
    else {
        matrix[i][j] = 0;
    }
    
  }
}

for (let i=0;  i<matrixSize; i++){
    console.log(matrix[i]);
}
console.log("..................................................................................................................................");

const matrix2 = [];

let matrixElements = [
    1,2,3,4,
    5,6,7,8,
    9,10,11,12,
    13,14,15,16
]


for (let i=0; i<matrixSize; i++){
    matrix2 [i] = [];

for (let j = 0; j < matrixSize; j++){
    matrix2[i][j] = matrixElements [i* matrixSize +j]
}

}
for (let i=0; i<matrixSize; i++){
    console.log (matrix2 [i]);
}


let car = new Object();

car.id = 1001;
car.name = 'Toyota';
car.occupied = false;

console.log(car);