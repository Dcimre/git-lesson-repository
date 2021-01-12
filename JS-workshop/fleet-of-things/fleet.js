import { Thing } from './thing.js';

class Fleet {

  constructor() {
    this.things = [];
  }

  add(thing) {
    this.things.push(thing);
  }

  getThings() {
    return this.things;
  }

  toString() {
    return this.things
      .map((thing, index) => `${index + 1}. ${thing.toString()}`)
      .join('\n');
  }
}

export { Fleet };