


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
    randomAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];

            this.animals.slice(randomAnimal,randomAnimal);

    randomOwner = this.adopters[Math.floor(Math.random() * this.adopters.length)];

            this.adopters.slice(randomOwner,randomOwner);

    }

    earnDonation(amount){
        this.budget += amount;
    }

};




export default Shelter;