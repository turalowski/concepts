/* 
POLYMORPHISM - Polymorphism is a feature of object-oriented programming languages that allows a specific routine to use variables of different types at different times. Polymorphism in programming gives a program the ability to redefine methods for derived classes.
INHERITANCE - Inheritance in OOP = When a class derives from another class. The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods. An inherited class is defined by using the extends keyword.
ABSTRACTION - Abstraction is the concept of object-oriented programming that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the users.
ENCAPSULATION - In object-oriented computer programming (OOP) languages, the notion of encapsulation (or OOP Encapsulation) refers to the bundling of data, along with the methods that operate on that data, into a single unit.
*/

/*
 ===================
     FIRST WAY
 ===================
*/

// factory function make/create
{
  function createElf(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
      name: name,
      weapon: weapon,
      atack() {
        return 'atack with ' + weapon;
      },
    };
  }
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  sam.attack();
  peter.attack();
}
// When we create new object, we duplicate all functions.
// If we have >100 object, it can couse memory problem.

/*
 ===================
     SECOND WAY
 ===================
*/

{
  const elfFunctions = {
    attack: function () {
      return 'atack with ' + this.weapon;
    },
  };
  function createElf(name, weapon) {
    //Object.create creates __proto__ link to argument function.
    newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
  }

  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  // sam.__proto__ === peter.__proto__
  sam.attack();
  peter.attack();
}

/*
 ===================
     THIRD WAY
 ===================
*/

//Constructor Functions
{
  // This constructor function may be converted to a class declaration.
  function Elf(name, weapon) {
    // This values will be stored in the object
    this.name = name;
    this.weapon = weapon;
  }

  // This function will be stored in Elf.prototype
  Elf.prototype.attack = function () {
    return 'atack with ' + this.weapon;
  };

  Elf.prototype.build = function () {
    function building() {
      return this.name + ' builds a house';
    }
    return building.bind(this);
  };
  // Only functions have access to prototype
  const sam = new Elf('Sam', 'bow');
  const peter = new Elf('Peter', 'bow');
  sam.attack();
  peter.attack();
}

/*
 ===================
     THIRD WAY
 ===================
*/

{
  class Elf {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon;
    }
  }

  const fiona = new Elf('Fiona', 'ninja stars');
  console.log(fiona instanceof Elf); //
  const ben = new Elf('Ben', 'bow');
  fiona.attack();
  ben.attack();
}
