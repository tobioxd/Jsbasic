const fruits = [{name: 'apple', color: 'red',calories: 95}, 
                {name: 'banana', color: 'yellow',calories: 105}, 
                {name: 'grape', color: 'purple',calories: 62},
                {name: 'orange', color: 'orange',calories: 62},
                {name: 'watermelon', color: 'green',calories: 46},];

fruits.push({name: 'pineapple', color: 'yellow',calories: 50});

fruits.pop();
                
console.log(fruits);

fruits.forEach(fruit => { console.log(fruit) });

const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');

const lowCalFruits = fruits.filter(fruit => fruit.calories <80);

const highCalFruits = fruits.filter(fruit => fruit.calories >=80);

console.log(yellowFruits);

console.log(lowCalFruits);

console.log(highCalFruits);

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(minFruit);

let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a, b) => a - b);

console.log(numbers);

const people = [{name: "Spongebob", age:30, gpa :3.0},
                {name: "Patrick", age:31, gpa :3.5},
                {name: "Squidward", age:32, gpa :3.2},
                {name: "Sandy", age:33, gpa :3.7},]

//people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

cards.sort(() => Math.random() - 0.5);

shuffle(cards);

console.log(cards);

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

}