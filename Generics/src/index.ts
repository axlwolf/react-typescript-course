// Generic function
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic interfaces
interface IGenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface IGenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic classes
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}
