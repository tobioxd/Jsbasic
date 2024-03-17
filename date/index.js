

const date = new Date();

date.setFullYear(2020);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-12-31");

if(date1 < date2) {
    console.log("Happy New Year 2024");
}

function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();

}

outer();

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    function getCount(){
        return count;
    }

    return{increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The count is ${counter.getCount()}`);

function createGame(){

    let score = 0;

    function incrementScore(value){
        score += value;
    }

    function decrementScore(value){
        score -= value;
    }

    function getScore(){
        return score;
    }

    return {incrementScore, decrementScore, getScore};

}

const game = createGame();
game.incrementScore(10);
game.decrementScore(5);
game.incrementScore(20);
console.log(`The score is ${game.getScore()}`);
