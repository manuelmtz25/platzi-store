//const myName = 'Manuel';
//const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 2);

class Persona {
  //   private age;
  //   private name;

  //   constructor(age: number, name: string) {
  //       this.age = age;
  //       this.name = name;
  //   }

  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const manuel = new Persona(33, 'Manuel');
manuel.getSummary();
