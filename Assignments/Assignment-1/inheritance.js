// ==================================================
// 1. SINGLE INHERITANCE
// ==================================================

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();


// ==================================================
// 2. MULTIPLE INHERITANCE
// ==================================================

class Father {
    fatherProperty() {
        console.log("Father's property");
    }
}

class Mother {
    motherProperty() {
        console.log("Mother's property");
    }
}

class Child {}

// Copy methods from Father and Mother
Object.getOwnPropertyNames(Father.prototype).forEach((method) => {
    if (method !== "constructor") {
        Child.prototype[method] = Father.prototype[method];
    }
});

Object.getOwnPropertyNames(Mother.prototype).forEach((method) => {
    if (method !== "constructor") {
        Child.prototype[method] = Mother.prototype[method];
    }
});

const child = new Child();

child.fatherProperty();
child.motherProperty();


// ==================================================
// 3. MULTILEVEL INHERITANCE
// ==================================================

class Animal1 {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("Dog is barking");
    }
}

class Puppy extends Dog1 {
    play() {
        console.log("Puppy is playing");
    }
}

const puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.play();


// ==================================================
// 4. HIERARCHICAL INHERITANCE
// ==================================================

class Animal2 {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log("Dog is barking");
    }
}

class Cat extends Animal2 {
    meow() {
        console.log("Cat is meowing");
    }
}

const dog2 = new Dog2();
const cat = new Cat();

dog2.eat();
dog2.bark();

cat.eat();
cat.meow();


// ==================================================
// 5. HYBRID INHERITANCE
// ==================================================
class Animal3 {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog3 extends Animal3 {
    bark() {
        console.log("Dog is barking");
    }
}

class Cat3 extends Animal3 {
    meow() {
        console.log("Cat is meowing");
    }
}

class Running {
    run() {
        console.log("Dog is running");
    }
}

// Add Running functionality to Dog3
Object.getOwnPropertyNames(Running.prototype).forEach((method) => {
    if (method !== "constructor") {
        Dog3.prototype[method] = Running.prototype[method];
    }
});

const dog3 = new Dog3();

dog3.eat();
dog3.bark();
dog3.run();

const cat3 = new Cat3();

cat3.eat();
cat3.meow();