//turn number divs into a array
let turnOff = 0;
let display = 0;
//let startNumber = Number(grabValue.join("")) //maybequeryselectorAll the values from the numbers div?  add them together?
let startNumber = [];
let endNumber = [];


const add = function(num1, num2) {
    return num1 + num2;
};
    //console.log(add(3, 4));

//turns array into a number =>
const sum = function(arr1, arr2) { //add array function
let convert1 = arr1.join('');
let convert2 = arr2.join('');

let display = (Number(convert1) + Number(convert2));
console.log(display);
};

const subtract = function(num1, num2) {
    return num1 - num2;
};
    //console.log(subtract(5, 2));


const multiply = function(num1, num2) {
    return num1 * num2;
};
    //console.log(multiply(5, 5));

const divide = function(num1, num2) {
    return num1 / num2;
};

    //console.log(divide(12, 3));


const operate = function(name, num1, num2) {
    return name(num1, num2);
};

    //console.log(operate(multiply, 3, 9));

// end of operator functions


let start = document.querySelector(".begin");
start.classList.add("start");
start.textContent = "0";


let num = 0; //do num-- when clearing the calculator, also decrement turnOff

function startCalc() {

    if (num == 0) {
        num++;
        start.textContent = "";
    }
    else {
        return;
    }
}

//THIS IS BEING TRIGGERED TWICE PLEASE FIX maybe you need to store the value than lock it out after + so it can't be accesed again till equal is pressed?
let pad = document.querySelector(".numpad1"); //store values in a array with querySelectorAll?
    pad.addEventListener("click", createValue1);

function createValue1() {
    if (turnOff == 0) {

    startNumber.push(7); //how are you going to store numbers before pressing add?
    let val = 7;
    displayValue(val);
    startCalc();
    }
    else {
        return;
    }
}


let pad1 = document.querySelector(".numpad2");
    pad1.addEventListener("click", createValue2);

function createValue2() {
    let val = 8;
    displayValue(val);
    startCalc();
}

let pad2 = document.querySelector(".numpad3"); 
    pad2.addEventListener("click", createValue3);

function createValue3() {
    let val = 9;
    displayValue(val);
    startCalc();
}

let pad3 = document.querySelector(".numpad4"); 
    pad3.addEventListener("click", createValue4);

function createValue4() {
    let val = 4;
    displayValue(val);
    startCalc();
}

let pad4 = document.querySelector(".numpad5"); 
    pad4.addEventListener("click", createValue5);

function createValue5() {
    let val = 5;
    displayValue(val);
    startCalc();
}

let pad5 = document.querySelector(".numpad6"); 
    pad5.addEventListener("click", createValue6);

function createValue6() {
    let val = 6;
    displayValue(val);
    startCalc();
}

let pad6 = document.querySelector(".numpad7");
    pad6.addEventListener("click", createValue7);

function createValue7() {
    let val = 1;
    displayValue(val);
    startCalc();
}

let pad7 = document.querySelector(".numpad8"); 
    pad7.addEventListener("click", createValue8);

function createValue8() {
    let val = 2;
    displayValue(val);
    startCalc();
}

let pad8 = document.querySelector(".numpad9"); 
    pad8.addEventListener("click", createValue9);

function createValue9() {
    let val = 3;
    displayValue(val);
    startCalc();
}


let pad10 = document.getElementById("zero");
    pad10.addEventListener("click", createValue11);

function createValue11() {
    let val = 0;
    displayValue(val);
    startCalc();
}
// end of number click events



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
            number.classList.add("number");
            number.textContent = 8;
            break;
        case 9:
            number.classList.add("number");
            number.textContent = 9;
            break;
        case 4:
            number.classList.add("number");
            number.textContent = 4;
            break;
        case 5:
            number.classList.add("number");
            number.textContent = 5;
            break;
        case 6:
            number.classList.add("number");
            number.textContent = 6;
            break;
        case 1:
            number.classList.add("number");
            number.textContent = 1;
            break;
        case 2:
            number.classList.add("number");
            number.textContent = 2;
            break;
        case 3:
            number.classList.add("number");
            number.textContent = 3;
            break;
        case 0:
            number.classList.add("number");
            number.textContent = 0;
            break;
    }
}

function displayValue2(val) {
    let display = document.querySelector(".text");
    let number = document.createElement("div");
    

    display.appendChild(number);


    switch(val) {
        case 7:
            number.classList.add("number2");
            number.textContent = 7;
            break;
        case 8:
            number.classList.add("number2");
            number.textContent = 8;
            break;
        case 9:
            number.classList.add("number2");
            number.textContent = 9;
            break;
        case 4:
            number.classList.add("number2");
            number.textContent = 4;
            break;
        case 5:
            number.classList.add("number2");
            number.textContent = 5;
            break;
        case 6:
            number.classList.add("number2");
            number.textContent = 6;
            break;
        case 1:
            number.classList.add("number2");
            number.textContent = 1;
            break;
        case 2:
            number.classList.add("number2");
            number.textContent = 2;
            break;
        case 3:
            number.classList.add("number2");
            number.textContent = 3;
            break;
        case 0:
            number.classList.add("number2");
            number.textContent = 0;
            break;
    }
}


//start of operator button listeners
let plus = document.getElementById("operator4"); //YOU NEED TO CREATE A NEW DIV WITH 7
plus.addEventListener("click", addAgain); //this is the add button


function addAgain() {
    turnOff = 1;
    let pad = document.querySelector(".numpad1"); //store values in a array with querySelectorAll?
    pad.addEventListener("click", makeValue);
   
}

function makeValue() {
    endNumber.push(7); //how are you going to store numbers before pressing add?
    let val = 7;
    displayValue2(val);

    let start = document.querySelectorAll(".number");
    for (let i = 0; i < start.length - 1; i++) {
        start[i].remove();
    }
    let start2 = document.querySelectorAll(".number2");
    for (let i = 0; i < start.length - 1; i++) {
        start2[i].remove();
    }
    
    

    let equal = document.getElementById("operator5"); //the equals function
    equal.addEventListener("click", addTogether);
}

function addTogether() {
    console.log(startNumber);
    console.log(endNumber);
    operate(sum, startNumber, endNumber);
}

//let val = "55";
//test
//console.log(Number(val) + 1);

