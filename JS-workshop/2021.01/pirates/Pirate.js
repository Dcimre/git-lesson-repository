class Pirate{

    drunkness = 0;
    tiredness = 0;
    isAlive = true;

    constructor(name, age,title){
        this.name = name;
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

        if(this.isAlive == true && this.drunkness <= 4){

                console.log("Meg egy korsoval!");
        }
        else if (this.isAlive == true && this.drunkness > 4) {
            console.log("♫ Nyaaar van es semmi baaj, ... ♪");
            this.sleep();
           
        }
    
        else if (this.isAlive == false){
            this.deadMessage();
    }

    }

    sleep(){
        this.tiredness = 0;
        this.drunkness = 0;
        console.log("need some sleep zZzzzzZzzZZZzzZZz...");
    }
    die(){
        this.isAlive = false;
    }
    deadMessage(){
        console.log("Sailor is dead!")
    }

    brawl(otherPirate){

        var d = Math.floor(Math.random() * 10) + 1;
        console.log(d);

if (d <= 3 && otherPirate.isAlive){
    otherPirate.die();
    console.log(`${this.name} won the brawl! `)
    
}
    
else if (d < 7 && d > 3 && otherPirate.isAlive){
    this.die();
    console.log(`${otherPirate.name} won the brawl!`)
    

}
   
else if (d >= 7 && otherPirate.isAlive){

    otherPirate.die();
   this.die();
    console.log('Both two pirates are dead!')
    
    }

    else{ 
        console.log ("somebody already dead, cant fight")
    }

}

}

export default Pirate;