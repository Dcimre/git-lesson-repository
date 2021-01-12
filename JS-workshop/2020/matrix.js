'use strict' ;

const matrix = [

    [25,30,25] ,
    [60,30,75] ,
    [12,21,53]  

];
const doubleMatrix = [];


console.log(matrix[0][0]);
console.log(matrix[1][1]);

for(let i =0; i< matrix.length; i++) {
    let row = matrix[i];

    for(let j=0; j<row.length; j++){
        console.log(doubleMatrix[i]);
        doubleMatrix[i][j] = 2 * matrix[i][j];

    }


    }
console.log(doubleMatrix);



