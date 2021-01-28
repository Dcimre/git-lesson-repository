'use strict';

const prompt = require('prompt-sync')();

const fs = require ('fs');


// load JSON //

function loadJson(filename){

    if (fs.existsSync(filename)){

        return JSON.parse(fs.readFileSync(filename))
    }
    else{
        console.log("file not exist");
    }

}

// save JSON //

function saveJson(filename,json){

    return fs.writeFileSync(filename , JSON.stringify (json) );

}




let jsonObject = loadJson('todos.json');

let newestTask  = {task: "megintSemmi", date: "nincs", isReady : false};

jsonObject.push(newestTask);

saveJson ('todos.json', jsonObject);


console.log(jsonObject[1]);










// PROGRAM START //

// TO-DO-LIST 1.0 //

// How-To-Use //

// CURRENT LIST + DATE //



const command = prompt ( "Please type new command  :   ");

if (command == 'new'){
    newTask();
}

else if ( command == 'delete'){
    deleteTask();
}
else if (command == 'done'){
    readyTask();
}

else{
    console.log('\n');
    console.log('invalid command');

}

console.log('\n');
console.log(' there is more code to run');

function newTask(task){

    const newTodo = prompt ('please write a new toDO  :   ');
    const toDoDate = prompt ('Add date to your toDo    :   ');
    console.log('\n');
    console.log(`New ToDo saved! name     :   ${newTodo} , date : ${toDoDate} `);
}




