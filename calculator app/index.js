

const display = document.getElementById("display");

function appendToDisplay(text) {
  display.value += text;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}