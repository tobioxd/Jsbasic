class Rectangle{

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else {
            console.log('Invalid width');
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else {
            console.log('Invalid height');
        }
    }
    
    get width(){
        return `${this._width.toFixed(2)} cm` ;
    }

    get height(){
        return `${this._height.toFixed(2)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(2)} cm`;
    }
}

const rectangle = new Rectangle(10, 20);

rectangle.width = 30;
rectangle.height = 40;

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else {
            console.log("Invalid first name");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else {
            console.log("Invalid last name");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else {
            console.log("Invalid age");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

}

const person = new Person("John", "Doe", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);