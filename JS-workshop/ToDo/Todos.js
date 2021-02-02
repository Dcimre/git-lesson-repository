'use strict';

import Task from './Task.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();


export default class ToDos{
    
    todos ;

    

    newTodo(){
        console.log('\n');
        const newTodo = prompt ('please write a new toDO  :   ');
        const toDoDate = prompt ('Add date to your toDo    :   ');
        console.log('\n');

        this.todos.push( new Task(newTodo.toString(),toDoDate.toString(), [] ));
        
        console.log("new ToDo added! ")
        console.log('\n');
    
    }

    deleteTodo(){

        const whatToDelete = prompt ( 'please write the task you want to delete  :   ');

        for( let i = 0; i < this.todos.length; i++){ 
    
            if ( this.todos[i].task === whatToDelete) { 
                this.todos.splice(i, 1); 
            }
            else{
                console.log('todo not exist, please try again');
                // return this.deleteTodo();

            }
        }
        console.log('\n');
        console.log(`${whatToDelete} was deleted from the list`);
        
    }

    done(){
        console.log('\n');
        const whatIsDone = prompt ( 'please write the name of your task that you want to check "ready"  :    ');

        for( let i = 0; i < this.todos.length; i++){ 
    
            if ( this.todos[i].task == whatIsDone) { 
                this.todos[i].isReady = "[X]";
            }

            else{

                console.log('invalid command.');
                // return this.done();
            }
        }

    }

    getList(){

        console.log(`ID: ,   TODO:   ,   DATE:,   READY?`)
        console.log('\n');


        for (let i=0; i< this.todos.length ; i++){
            console.log(`${i+1}: ${this.todos[i].task} ,  ${this.todos[i].date} ,  ${this.todos[i].isReady} `);
            
        }
        
    }

}