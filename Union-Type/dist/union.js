"use strict";
function isDog(obj) {
    return obj.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk();
    //   if ((<IDog>pet).bark) {
    //     (<IDog>pet).bark();
    //   } else {
    //     (<ICat>pet).meow();
    //   }
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
class Foo {
}
class Bar {
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
