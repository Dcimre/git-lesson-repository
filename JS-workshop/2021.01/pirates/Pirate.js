class Pirate{

    drunkness = 0;
    tiredness = 0;
    isAlive = true;
    


    constructor(name, age,title){
        this.name=name;
        this.age = age;
        this.title = title;
    }

    drinkSomeRum(amount){
        if(this.isAlive === true){
        this.drunkness +=amount;
        this.tiredness += amount;
        }
        else{
            this.deadMessage();
            
        }
    }

    howIsGoingMate(){

        if(this.alive == true && this.drunkness <=4){

                console.log("Meg egy korsoval!");
        }
        else if (this.alive == true && this.drunkness > 4) {
            console.log("♫ Nyaaar van es semmi baaj, ... ♪");
            this.sleep();
            console.log("need some sleep zZzzzzZzzZZZzzZZz...");
        }
    
        else if (this.alive == false){
            console.log( this.deadMessage());
    }

    }

    sleep(){
        this.tiredness = 0;
        this.drunkness = 0;
    }
    die(){
        this.isAlive = false;
    }
    deadMessage(){
        console.log("Sailor is dead!")
    }

}

export default Pirate;