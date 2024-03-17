

function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1 = new Car('Eagle', 'Talon TSi', 1993, 'red');
const car2 = new Car('Nissan', '300ZX', 1992, 'black');
const car3 = new Car('Mazda', 'Miata', 1990, 'red');

car1.drive(); // You drive the Talon TSi
car2.drive(); // You drive the 300ZX
car3.drive(); // You drive the Miata

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    displayProduct(){
        console.log(`The product is ${this.name} and it costs $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
    
}

const saleTax  = 0.05;

const product1 = new Product('TV', 500.99);
const product2 = new Product('Phone', 700.50);
const product3 = new Product('Laptop', 900.00);

product1.displayProduct(); // The product is TV and it costs $500
product2.displayProduct(); // The product is Phone and it costs $700
product3.displayProduct(); // The product is Laptop and it costs $900

const total = product1.calculateTotal(saleTax);
console.log(`Total price (with tax) is $${total.toFixed(2)}`); 

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return this.PI * this.getDiameter(radius);
    }

    static getArea(radius){
        return this.PI * (radius ** 2);
    }
}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(5)); // 10
console.log(MathUtil.getCircumference(5)); // 31.4159
console.log(MathUtil.getArea(5)); // 78.53975

class User{

    static userCount = 0 ;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

}

const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello(); // Hello, my username is SpongeBob
user2.sayHello(); // Hello, my username is Patrick
user3.sayHello(); // Hello, my username is Sandy
User.getUserCount(); // There are 3

class Animal{

    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }

}

class Dog extends Animal{
    name = "Dog";

    run(){
        console.log(`${this.name} is running`);
    }

}

class Cat extends Animal{
    name = "Cat";

    meow(){
        console.log(`${this.name} is meowing`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`${this.name} is flying`);
    }

}

const dog = new Dog();
const cat = new Cat();
const hawk = new Hawk();

dog.alive = false;

console.log(dog.alive);
dog.eat();
dog.sleep();
dog.run();
console.log(cat.alive);
cat.meow();
console.log(hawk.alive);
hawk.fly();