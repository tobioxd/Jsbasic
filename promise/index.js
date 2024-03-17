

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('walk the dog');
        }, 1000);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('clean the kitchen');
        }, 2000);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('take out the trash');
        }, 3000);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value);})