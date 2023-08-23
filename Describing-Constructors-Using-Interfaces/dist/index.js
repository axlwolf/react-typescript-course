"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
const initializeAnimal = (Animal, name) => {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
};
const cat = initializeAnimal(Cat, 'Kitty');
const dog = initializeAnimal(Dog, 'Blacky');
