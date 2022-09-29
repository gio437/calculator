let num = 0;



const add = function(num1, num2) {
    return num1 + num2;
};
    console.log(add(3, 4));


const subtract = function(num1, num2) {
    return num1 - num2;
};
    console.log(subtract(5, 2));


const multiply = function(num1, num2) {
    return num1 * num2;
};

    console.log(multiply(5, 5));

const divide = function(num1, num2) {
    return num1 / num2;
};

    console.log(divide(12, 3));


const operate = function(name, num1, num2) {
    return name(num1,num2);
};

    console.log(operate(multiply, 3, 9));

// end of operator functions




    let pad = document.querySelector(".numpad"); //store values in a array with querySelectorAll?
    pad.addEventListener("click", createValue);

function createValue() {
    let val = 7
    displayValue(val);
}



function displayValue(val) {
    let display = document.querySelector(".text");
    let number = document.createElement("div");
    

    display.appendChild(number);


    switch(val) {
        case 7:
            number.classList.add("number");
            number.textContent = 7;
            break;
        case 8:
            second = 8;
            break;
        case 9:
            third = 9;
            break;
        case 4:
            fourth = 4;
            break;
        case 5:
            fith = 5;
            break;
        case 6:
            sixth = 6;
            break;
        case 1:
            seventh = 1;
            break;
        case 2:
            eigth = 2;
            break;
        case 3:
            ninth = 3;
            break;
        case 0:
            tenth = 0;
            break;
    }

  
}


