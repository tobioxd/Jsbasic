const hello = (name,age) => { console.log(`hello ${name}!`);
                          console.log(`You are ${age} years old!`);                      

};

hello("Bro",20);

setTimeout(hello("Minh",21), 3000);

const number = [1,2,3,4,5,6];

const squares = number.map((element) => Math.pow(element,2));

const cubes = number.map((element) => Math.pow(element,3));

const evenNums = number.filter((element) => element % 2 === 0);

const oddNums = number.filter((element) => element % 2 !== 0);

console.log(evenNums);

