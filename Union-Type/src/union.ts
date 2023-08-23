interface IDog {
  bark(): void;
  walk(): void;
}

interface ICat {
  meow(): void;
  walk(): void;
}

function isDog(obj: IDog | ICat): obj is IDog {
  return (<IDog>obj).bark !== undefined;
}

function callMyPet(pet: IDog | ICat): void {
  pet.walk();
  //   if ((<IDog>pet).bark) {
  //     (<IDog>pet).bark();
  //   } else {
  //     (<ICat>pet).meow();
  //   }
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

class Foo {
  foo: number;
  commonProp: string;
}
class Bar {
  bar: number;
  commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
