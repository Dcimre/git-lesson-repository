
class Shelter{

    budget = 50
    animals = [];
    adopters = [];


    rescue(animal){
        this.animals.push(animal);
    }

    checkHealth(animal){
        if(animal.isHealthy == false){
            return animal;
        }
    }

    heal(){
       let sickArray = this.animals.filter(this.checkHealth);
       
       sickArray[0].isHealthy = true;
    }

    addAdopter(name){
        this.adopters.push(name);
    }

    findNewOwner(){
        
    let randomAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];

    let randomOwner = this.adopters[Math.floor(Math.random() * this.adopters.length)];

            this.adopters.splice(randomOwner,1);
            this.animals.splice(randomAnimal,1);

    }

    earnDonation(amount){
        this.budget += amount;
    }

};




export default Shelter;