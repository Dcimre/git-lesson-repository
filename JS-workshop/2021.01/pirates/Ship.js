import Pirate from './Pirate.js';

class Ship{

    crew = [];
    crewCounter = 1;
    shipScore = 0;
    captainsRumAmount = 0;
    crewAlive;

    constructor(name){
        this.name = name;
    }
    
    
    

    fillShip(){
        this.makeCaptain();
        this.makeRandomSailor();
    }
    makeCaptain(){
        this.crew.push(new Pirate(this.randomName(), this.randomAge(), "Captain"));
    }
    makeRandomSailor(){
        let randomNumber=Math.floor(Math.random()*20)-9;

        for(let i =0; i <=randomNumber; i++ ){
            this.crewCounter++

        this.crew.push(new Pirate(this.randomName(),this.randomAge(),"Sailor"));
        }
    }
    randomName(){
        let names = [  "Mateo", 
                        "Angel", 
                        "Jose", 
                        "Santiago",
                        "Leonardo",
                        "Diego",
                        "Luis",
                        "Antonio",
                        "Miguel",
                        "Gael",
                        "Alejandro",
                        "Lorenzo",
                        "Hugo",
                        "Pablo",
                        "Alvaro",
                        "Mario",
                        "Manuel",
                        "Javier"]

        return names[Math.floor(Math.random() * names.length)];
    }
    randomAge(){
        let min = 20;
        let max = 50;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    info(){

    }

    rumCounter(){
        this.captainsRumAmount = this.crew[0].drunkness;
    }

   // numberOfPiratesAlive(){
   //     this.crew.forEach(this.sailorisAlive()) 
   // }

    sailorisAlive(){

        let livingSailors = this.crew.filter(sailor => sailor.isAlive == true);
        this.crewAlive = livingSailors.length;
    }
        
    


      


}

export default Ship;