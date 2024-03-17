

class Person{

    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address{

    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("SpongeBob",30,"124 Conch Street",
                                            "Bikini Bottom",
                                            "Pacific Ocean");

const person2 = new Person("Patrick",30,"120 Conch Street",
                                            "Bikini Bottom",
                                            "Pacific Ocean");

const person3 = new Person("Squidward",30,"122 Conch Street",
                                            "Bikini Bottom",
                                            "Pacific Ocean");

console.log(person3.address.country); 