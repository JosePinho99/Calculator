let display_value = 0;
let first_value = 0;
let current_operation = "0";

const numbers = ["0", "1", "2" ,"3" ,"4", "5", "6", "7", "8", "9"]

function add(value1, value2) {
    return value1 + value2;
}

function subtract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

function operate(operator, value1, value2) {
    let result = 0;
    if (operator === "sum") {
        result = add(value1, value2);
    }
    else if (operator === "sub") {
        result = subtract(value1, value2);
    }
    else if (operator === "mul") {
        result = multiply(value1, value2);
    }
    else {
        result = divide(value1, value2);
    }
    return result;
}

function update(event) {
    let turn_to_zero = 0;
    let value = document.querySelector("id");
    if (event.id in numbers){
        if (display_value / 1000000000 < 1){
            display_value = parseInt(display_value + event.id);    
        }  
    }
    else if (event.id === "del"){
        console.log("hi");
        display_value = 0;
        first_value = 0;
        current_operation = "0";
    }
    
    else if (event.id === "sub" || event.id === "sum" || event.id === "div" || event.id === "mul"){
        current_operation = event.id;
        first_value = display_value;
        turn_to_zero = 1;
        
    }

    else {
        display_value = operate(current_operation, first_value, display_value);
    }

    let display = document.getElementById("disp");
    display.textContent = display_value.toString();
    if (turn_to_zero === 1){
        display_value = 0;
    }

}


