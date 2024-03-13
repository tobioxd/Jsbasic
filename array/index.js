let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximum = Math.max(...number);

console.log(maximum);

let fruits = ["apple", "banana", "orange", "mango", "grapes"];
let vegetables = ["potato", "tomato", "onion", "carrot", "cucumber"];

let allGroceries = [...fruits, ...vegetables,"eggs"];

console.log(allGroceries);

function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods){
    console.log(foods);
}

const foot1 = "pizza";
const foot2 = "burger";
const foot3 = "pasta";
const foot4 = "salad";
const foot5 = "cake";

const foods = [foot1, foot2, foot3, foot4, foot5];

console.log(foods);

function sum(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function getAverage(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum / numbers.length;
}

console.log(getAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function multiply(multiplier, ...numbers){
    return numbers.map((number) => multiplier * number);
}

console.log(multiply(2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function combineArrays(array1, array2){
    return [...array1, ...array2];
}

console.log(combineArrays(fruits, vegetables));

function combineStrings(...strings){
    return strings.join(" ");
}

console.log(combineStrings("Hello", "World", "How", "Are", "You"));