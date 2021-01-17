class Thing {

    constructor(name) {
      this.name = name;
    }
  
    complete() {
      this.completed = true;
      return `[${this.completed ? 'x' : ' '}] ${this.name}`;

    }
  
    getName() {
      return this.name;
    }
  
    getCompleted() {
       return this.completed;
    }
  
    toString() {

    }
  }
  
  export { Thing };

