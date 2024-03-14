hello(leave);

function hello(callback) {
  console.log('hello');
  callback();
} 

function wait(){
    console.log('wait');
}

function leave() {
  console.log('leave');
}

function goodbye() {
  console.log('goodbye');
}

sum(displayPage,1,2);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

let number = [1,2,3];

number.forEach(cube);
number.forEach(display);

function double(element,index,array){
    array[index] = element * 2;
}

function triple(element,index,array){
    array[index] = element * 3;
}

function square(element,index,array){
    array[index] = element * element;
}

function cube(element,index,array){
    array[index] = Math.pow(element,3);
}

function display(element){
    console.log(element);
}

let fruits = ["Apple","banana","cherry"];

fruits.forEach(capitalize);
fruits.forEach(displayFruit);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function displayFruit(element){
    console.log(element);
}