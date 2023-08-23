interface IAnimal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

class Cat implements IAnimal {
  name: string;
  group: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string): void {
    this.group = group;
  }
}

class Dog implements IAnimal {
  name: string;
  group: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string): void {
    this.group = group;
  }
}

interface IAnimalConstructor<T> {
  new (name: string): T;
}

const initializeAnimal = <T extends IAnimal>(
  Animal: IAnimalConstructor<T>,
  name: string
) => {
  const animal = new Animal(name);
  animal.setGroup('mammals');
  return animal;
};

const cat = initializeAnimal(Cat, 'Kitty');
const dog = initializeAnimal(Dog, 'Blacky');
