'use strict';

const fs = require('fs');  //modul import  - node file system modul 

console.log ("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



function printFileContent (filename){

    try {

    const fileContent = fs.readFileSync (filename);         // filet olvasunk ezzel a metódussal, a file tartalmát adja vissza

    console.log ( fileContent.toString());
    }
    catch(err) {
        console.log( '\x1b[32m' + err.message + '\x1b[0m');
}

}

// printFileContent( 'C:\\Users\\Y530\\Desktop\\GIT\\git-lesson-repository\\JS-workshop\\gyak1.js' );

console.log ( "-------------------------------------------------------------------------------------------------------------------")


 /*fs.readFile( 'C:\\Users\\Y530\\Desktop\\GIT\\git-lesson-repository\\JS-workshop\\gyak1.js'  , (err,data) => {

    if (err) {

        return console.log( '\x1b[32m' + err.message + '\x1b[0m');   //async függvény -- nincs try-catch! 
    }
    console.log( data.toString());

} );

*/

// fs.writeFile();  - ASYNC

fs.writeFileSync ('.\\file.txt' , 'most került bele');

printFileContent ( '.\\file.txt' );

console.log ( "-------------------------------------------------------------------------------------------------------------------")


function isTxt (myFile){

    return !!myFile.match(/\.txt$/);
}
 function fileOpen(myFile){
     if (myFile === undefined) throw new Error ('file not exist');
     if (!isTxt(myFile)) throw new Error ('file is not txt');
     return 'file content' ;
 }

 const i=0;

 try {
     const file = fileOpen('non-existing pdf');
 }

 catch (err){

    console.log('USER WARNING: ', err.message);
 } 
console.log('IMPORTANT CODE TO RUN!');

console.log ( "-------------------------------------------------------------------------------------------------------------------");

// INNENTŐL


const myFile = "./file.txt";

/*fs.access(myFile, fs.constants.F_OK, err => {
    console.log(`${myFile} ${err ? "does not exist" : "exists"}`);
  });

  fs.access(myFile, fs.constants.W_OK, err => {
    console.log(`${myFile} ${err ? "is not writable" : "is writable"}`);
  });

  */



let newText = '.\\file.txt';


let exampleString = '11'


function testFunction (name, operation, text){

    if ( operation === "olvasás"){
        try{

            let contentOfFile = fs.readFileSync(name).toString();

             console.log (contentOfFile);
        }

        catch(err){

            console.log ('FILE READ ERROR', err.message);
        }
    }

    else if (operation === 'write'){

        try{
            if (fs.existsSync(name)){
                fs.writeFileSync(name,text);
                let contentOfFile = fs.readFileSync(name).toString();
            
            console.log (contentOfFile);
            }
            else{
                throw new error('file not esist');
            }
         
        }
        
        

        catch(err){
            console.log ('FILE WRITE ERROR', err.message);

        }
    }

    else {

        throw new Error( "nem megfelelő művelet" , err.message);
    }
   
}
testFunction(newText, 'write', exampleString);

 console.log ("Ez a program vége, futnia kell tovább!");


 // IDÁIG !!

