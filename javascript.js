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



    function clickNum() {
        let pad = document.querySelector(".numpad"); //store values in a array w ith querySelectorAll?
        pad.addEventListener("click", displayValue);
}

clickNum();




    function displayValue() {
        let display = document.querySelector(".text");
        
        let number = document.createElement("div");
        number.classList.add("number");
        number.textContent = "9";

        display.appendChild(number);
    }