


const colors = ["red", "green", "blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors); // ["white", "green", "blue","black","red"]

const[firstColor,secondColor,thirdColor,...extraColors] = colors;

console.log(firstColor); // white
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // ["black","red"]

function displayPerson({firstName,lastName,age,job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}, age: ${age}, job: ${job}`)
}

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

const{firstName,lastName,age,job = "Unemployed"} = person2;

displayPerson(person1); // name: SpongeBob SquarePants, age: 30, job: Fry cook
displayPerson(person2); // name: Patrick Star, age: 30, job: Unemployed
