'use strict';

 class Client{

    static  instance;

    constructor(){

        if (!Client.instance){
            Client.instance = this;
        }

        return Client.getInstance;

    }

    boot(){
        console.log("client is booting...");

    }
    static getInstance(){

        return this.instance;

    }

}

let Sanyi = new Client ();
new Client ();
new Client ();

console.log(Sanyi);



class SerialNo {  // a static az egész classra vonatkozik, minden pédány örölki, de ha megváltozik, az egész classban változik.

    static counter = 1;
    
    value = null;

    constructor() {
        this.value = 'SNO-000' + SerialNo.counter ++;
    }
}

console.log(new SerialNo());
console.log(new SerialNo());
console.log(new SerialNo());
console.log(new SerialNo());
console.log(new SerialNo());



console.log("---------------------------------------------------------------------------------------------------------------------------------");

/* function addNumbers ( a, b){
    
   let result = a+b;
    return result;
}

let myResult = addNumbers (8,13);

console.log(`the result is : ${myResult}`);

*/

class Dog{
    name;
    
    constructor(name){
        this.name = name;
    }

    bark(){
        console.log(`${this.name} Vau-Vau`);

    }
}

class DogFactory {

    static dogs = [];

    static createDog(name) {
        DogFactory.dogs.push (new Dog(name) );
    }

}

DogFactory.createDog("Buksi");
DogFactory.createDog("Morzsi");
DogFactory.createDog("DögDog");


DogFactory.dogs.filter(dog => dog instanceof Dog).forEach (dog => {
    dog.bark();
});

console.log("-------------------------------------------------------------------------------------------------------------------------");

class Rectangle {

    width = 0;
    height = 0;

    constructor(width, height){
        this.width = width;
        this.height = height;
    }


    static fromFeet(width, height){
        return new Rectangle ( width * 0.3048 , height * 0.3048);

    }



}


new Rectangle(2,3);

const widthInFeet = 6.5616;
const heightInFeet= 9.8425;

console.log(widthInFeet , heightInFeet );

console.log("-------------------------------------------------------------------------------------------------------------------------");



class Employer {

    employeeList = [];

    employ(employee){
        this.employeeList.push(employee);

    }

    pay(){

        this.employeeList.forEach( employee => employee.getSalary(1000*employee.rank));
    }
}

class Employee {

    name;
    rank = 1;
    money = 0;

    constructor(name, rank = 1){

        this.name = name;
        this.rank = rank;
    }

    getSalary(money){

        this.money += money;
    }


}

const employees = [

    new Employee ("Johny",1),
    new Employee ("Sanyika", 2),
    new Employee ("Petike", 3),
    new Employee ("Tomika", 5)
]

const employer = new Employer();

employees.forEach(employee => employer.employ(employee));

employer.pay();

console.log(employees);

class Teacher {

    kind;
    static EvilTeacherInstance = null;


    constructor(kind) {

        this.kind = kind;

    if (this.kind === "Evil"){
        
        if (Teacher.EvilTeacherInstance ===null){
           Teacher.EvilTeacherInstance = this;

            }

            return Teacher.EvilTeacherInstance;
    
    }
    
    }
}

const teachers = [
    new Teacher("Evil"),
    new Teacher ("kind"),
    new Teacher ("OK"),
    new Teacher ("Evil")
];

console.log(teachers);

class EvilTeacher extends Teacher{
    constructor(){
        super('evil');
    }
}

const evilTeacher = new EvilTeacher();

console.log('');
console.log(evilTeacher instanceof EvilTeacher);














