

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello World"), 3000);
    console.log("Timer started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Timer cleared");
}