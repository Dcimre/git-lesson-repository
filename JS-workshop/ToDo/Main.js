'use strict';

//import Task from './Task.js';
import ToDos from './Todos.js';
import {utility} from './Utilities.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let listOfTodos = new ToDos;

listOfTodos.todos = utility.loadJson('todos.json');



console.log('\n');

console.log( " TO-DO-LIST 1.0");
console.log('\n');

console.log( "COMMANDS =  type 'new' : (add new todo) 'delete': (delete todo) 'done': (check todo is ready) 'exit': (exit the program)");

console.log('\n');



// DATE //



mainFunction();

function mainFunction(){

    
    console.log('Current list:');

    console.log(listOfTodos.getList());
    console.log('\n');


    const command = prompt ( "Please type new command  :   ");

if (command == 'new'){

    listOfTodos.newTodo();
    console.log(listOfTodos.getList());
    console.log('\n');
    utility.saveJson('todos.json', listOfTodos.todos);
    return mainFunction();
}

else if ( command == 'delete'){

    listOfTodos.deleteTodo();
    console.log(listOfTodos.getList());
    console.log('\n');
    utility.saveJson('todos.json', listOfTodos.todos);
    return mainFunction();
}
else if (command == 'done'){
    
    listOfTodos.done();
    console.log(listOfTodos.getList());
    console.log('\n');
    utility.saveJson('todos.json', listOfTodos.todos);
    return mainFunction();
}
else if (command == "exit"){
    
    console.log('\n');
    console.log( "EXIT TO-Do-LIST! HAVE A NICE DAY!")
    console.log('\n');
    utility.saveJson('todos.json', listOfTodos.todos);
    return;
}

else{
    console.log('\n');
    console.log('invalid command, please try again!');
    console.log('\n');
    utility.saveJson('todos.json', listOfTodos.todos);
    return mainFunction();

}

// CHECK: undefined a lista végén? //

}
