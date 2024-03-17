const person1 = {
    firstName: `SpongeBob`,
    lastName: `SquarePants`,
    age: 20,
    isEmployed: true,
    sayHello: function() {console.log(`Hi! I am SpongeBob SquarePants!`)},
    eat: function() {console.log(`I am eating a Krabby Patty!`)},
}

const person2 = {
    firstName: `Patrick`,
    lastName: `Star`,
    age: 40 ,
    isEmployed: false,
    sayHello: () => console.log(`Hey, I am Patrick Star!`),
    eat: () => console.log(`I am eating a roast beef sandwich!`),
}

console.log(person1.firstName); // SpongeBob
console.log(person1.lastName); // SquarePants
console.log(person1.age); // 20
console.log(person1.isEmployed); // true

console.log(person2.firstName); // SpongeBob
console.log(person2.lastName); // SquarePants
console.log(person2.age); // 20
console.log(person2.isEmployed); // true

person1.eat(); // Hi! I am SpongeBob SquarePants!
person2.eat(); // Hi! I am Patrick Star!