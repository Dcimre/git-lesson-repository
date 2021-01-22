'use strict';

 class Animal{

        ownerName;
        isHealthy = true;
        
        healCost = 0;

    constructor(name,ownerName){

        this.name = name;
        this.ownerName = ownerName;
       
    }

    getOwnerName(){
        return this.ownerName;
    }

    heal(){

        this.isHealthy = true;            
        
    }

    isAdoptable(){
        return this.isHealthy;

    }
    toString(){
        let output = `${this.name} is `

      if  (!this.isHealthy){
            output += `not healthy ( ${this.healCost} euro ), and `;
        }
    else{ 
            output += `healthy, and `;
    }
    if(this.isAdoptable()){
        output += 'adoptable'
    }
    else{
        output += 'not adoptable'
    }
    return output;

    }
    print(anything){
        console.log (anything);
    }

    setToSick(){
        this.isHealthy = false;
    }
}

export default Animal;