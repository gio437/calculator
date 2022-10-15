//turn number divs into a array
let turnOff = 0;
let display = 0;
let forceEval = 0;

//let startNumber = Number(grabValue.join("")) //maybequeryselectorAll the values from the numbers div?  add them together?
let startNumber = [];
let endNumber = [];

let addition = 0;
let multiplication = 0;
let division = 0;
let subtraction = 0;

let equalTwice = 0; //allows you to spam a number addition


//turns array into a number =>
const sum = function(arr1, arr2) { //add array function
let convert1 = arr1.join('');
let convert2 = arr2.join('');

display += Number(convert1) + Number(convert2);
console.log(display);

let start2 = document.querySelectorAll(".number2");
    for (let i = 0; i < start2.length; i++) {
        start2[i].remove();
    }

let show = document.querySelector(".text");
let number = document.createElement("div");
    
show.appendChild(number);

number.classList.add("number3");
number.textContent = display;

startNumber = [];
endNumber = [];

forceEval = 0;
};


const subtract = function(arr1, arr2) {
let convert1 = arr1.join('');
let convert2 = arr2.join('');

display += Number(convert1) - Number(convert2);
console.log(display);


let start2 = document.querySelectorAll(".number2");
    for (let i = 0; i < start2.length; i++) {
        start2[i].remove();
    }

let show = document.querySelector(".text");
let number = document.createElement("div");
    
show.appendChild(number);

number.classList.add("number3");
number.textContent = display;

startNumber = [];
endNumber = [];

forceEval = 0;
};
    //console.log(subtract(5, 2));

const multiply = function(arr1, arr2) {
let convert1 = arr1.join('');
let convert2 = arr2.join('');

display += Number(convert1) * Number(convert2);
console.log(display);

let start2 = document.querySelectorAll(".number2");
    for (let i = 0; i < start2.length; i++) {
        start2[i].remove();
    }

let show = document.querySelector(".text");
let number = document.createElement("div");
    
show.appendChild(number);

number.classList.add("number3");
number.textContent = display;

startNumber = [];
endNumber = [];

forceEval = 0;
};
    //console.log(multiply(5, 5));

const divide = function(arr1, arr2) {
let convert1 = arr1.join('');
let convert2 = arr2.join('');

display += Number(convert1) / Number(convert2);
console.log(display);

let start2 = document.querySelectorAll(".number3");
    for (let i = 0; i < start2.length; i++) {
        start2[i].remove();
    }

let show = document.querySelector(".text");
let number = document.createElement("div");
    
show.appendChild(number);

number.classList.add("number3");
number.textContent = display;

startNumber = [];
endNumber = [];

forceEval = 0;
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


let num = 0; //do num-- when clearing the calculator, also decrement turnOff, and maybe forceEval?

function startCalc() { //clears beginning 0
    if (num == 0) {
        num = 1;
        start.textContent = "";
    }
    else {
        return;
    }
}

let clear = document.getElementById("clear");
clear.addEventListener("click", clearCalc);

function clearCalc() { //clears calculator
    display = 0;
    num = 0;
    turnOff = 0;
    forceEval = 0;
 
    startNumber = [];
    endNumber = [];

    addition = 0;
    multiplication = 0;
    division = 0;
    subtraction = 0;

    equalTwice = 0;

    let start = document.querySelectorAll(".number");
    for (let i = 0; i < start.length; i++) {
        start[i].remove();
    }

    let start2 = document.querySelectorAll(".number2");
    for (let i = 0; i < start2.length; i++) {
        start2[i].remove();
    }

    let start3 = document.querySelectorAll(".number3");
    for (let i = 0; i < start3.length; i++) {
        start3[i].remove();
    }

    let start4 = document.querySelector(".begin");
    start4.classList.add("start");
    start4.textContent = "0";
}


let plus = document.getElementById("operator4"); //YOU NEED TO CREATE A NEW DIV WITH 7
plus.addEventListener("click", addAgain); //this is the add button

let times = document.getElementById("operator2");
times.addEventListener("click", multiplyAgain);

let minus = document.getElementById("operator3");
minus.addEventListener("click", subtractAgain);

let half = document.getElementById("operator1");
half.addEventListener("click", divideAgain);

function addAgain() {
    turnOff = 1;
    addition = 1;

    if (forceEval == 1) {
        let displayOutput = document.querySelectorAll(".number3");
        for (let i = 0; i < displayOutput.length; i++) {
            displayOutput[i].remove();
        }
        addTogether();
    }
   
        let seven = document.querySelector(".numpad1");
        seven.addEventListener("click", addDifNum1);

        let eight = document.querySelector(".numpad2");
        eight.addEventListener("click", addDifNum2);

        let nine = document.querySelector(".numpad3");
        nine.addEventListener("click", addDifNum3);

        let four = document.querySelector(".numpad4");
        four.addEventListener("click", addDifNum4);

        let five = document.querySelector(".numpad5");
        five.addEventListener("click", addDifNum5);

        let six = document.querySelector(".numpad6");
        six.addEventListener("click", addDifNum6);

        let one = document.querySelector(".numpad7");
        one.addEventListener("click", addDifNum7);

        let two = document.querySelector(".numpad8");
        two.addEventListener("click", addDifNum8);

        let three = document.querySelector(".numpad9");
        three.addEventListener("click", addDifNum9);

        let zero = document.getElementById("zero");
        zero.addEventListener("click", addDifNum10);
}

function multiplyAgain() {
    turnOff = 1;
    multiplication = 1;

    if (forceEval == 1) {
        let displayOutput = document.querySelectorAll(".number3");
        for (let i = 0; i < displayOutput.length; i++) {
            displayOutput[i].remove();
        }
        addTogether();
    }
   
        let seven = document.querySelector(".numpad1");
        seven.addEventListener("click", addDifNum1);

        let eight = document.querySelector(".numpad2");
        eight.addEventListener("click", addDifNum2);

        let nine = document.querySelector(".numpad3");
        nine.addEventListener("click", addDifNum3);

        let four = document.querySelector(".numpad4");
        four.addEventListener("click", addDifNum4);

        let five = document.querySelector(".numpad5");
        five.addEventListener("click", addDifNum5);

        let six = document.querySelector(".numpad6");
        six.addEventListener("click", addDifNum6);

        let one = document.querySelector(".numpad7");
        one.addEventListener("click", addDifNum7);

        let two = document.querySelector(".numpad8");
        two.addEventListener("click", addDifNum8);

        let three = document.querySelector(".numpad9");
        three.addEventListener("click", addDifNum9);

        let zero = document.getElementById("zero");
        zero.addEventListener("click", addDifNum10);
}

function subtractAgain() {
    turnOff = 1;
    subtraction = 1;

    if (forceEval == 1) {
        let displayOutput = document.querySelectorAll(".number3");
        for (let i = 0; i < displayOutput.length; i++) {
            displayOutput[i].remove();
        }
        addTogether();
    }
   
        let seven = document.querySelector(".numpad1");
        seven.addEventListener("click", addDifNum1);

        let eight = document.querySelector(".numpad2");
        eight.addEventListener("click", addDifNum2);

        let nine = document.querySelector(".numpad3");
        nine.addEventListener("click", addDifNum3);

        let four = document.querySelector(".numpad4");
        four.addEventListener("click", addDifNum4);

        let five = document.querySelector(".numpad5");
        five.addEventListener("click", addDifNum5);

        let six = document.querySelector(".numpad6");
        six.addEventListener("click", addDifNum6);

        let one = document.querySelector(".numpad7");
        one.addEventListener("click", addDifNum7);

        let two = document.querySelector(".numpad8");
        two.addEventListener("click", addDifNum8);

        let three = document.querySelector(".numpad9");
        three.addEventListener("click", addDifNum9);

        let zero = document.getElementById("zero");
        zero.addEventListener("click", addDifNum10);
}

function divideAgain() {
    turnOff = 1;
    division = 1;

    if (forceEval == 1) {
        let displayOutput = document.querySelectorAll(".number3");
        for (let i = 0; i < displayOutput.length; i++) {
            displayOutput[i].remove();
        }
        addTogether();
    }
   
        let seven = document.querySelector(".numpad1");
        seven.addEventListener("click", addDifNum1);

        let eight = document.querySelector(".numpad2");
        eight.addEventListener("click", addDifNum2);

        let nine = document.querySelector(".numpad3");
        nine.addEventListener("click", addDifNum3);

        let four = document.querySelector(".numpad4");
        four.addEventListener("click", addDifNum4);

        let five = document.querySelector(".numpad5");
        five.addEventListener("click", addDifNum5);

        let six = document.querySelector(".numpad6");
        six.addEventListener("click", addDifNum6);

        let one = document.querySelector(".numpad7");
        one.addEventListener("click", addDifNum7);

        let two = document.querySelector(".numpad8");
        two.addEventListener("click", addDifNum8);

        let three = document.querySelector(".numpad9");
        three.addEventListener("click", addDifNum9);

        let zero = document.getElementById("zero");
        zero.addEventListener("click", addDifNum10);
}

function addDifNum1() {
    set = 7;
    makeValue();
}

function addDifNum2() {
    set = 8;
    makeValue();
}

function addDifNum3() {
    set = 9;
    makeValue();
}

function addDifNum4() {
    set = 4;
    makeValue();
}

function addDifNum5() {
    set = 5;
    makeValue();
}

function addDifNum6() {
    set = 6;
    makeValue();
}

function addDifNum7() {
    set = 1;
    makeValue();
}

function addDifNum8() {
    set = 2;
    makeValue();
}

function addDifNum9() {
    set = 3;
    makeValue();
}

function addDifNum10() {
    set = 0;
    makeValue();
}

//picks the number for the second array //set is becoming only the first value**

function makeValue() {
forceEval = 1;

   switch(set){
    case 7:
        endNumber.push(7);
        val = 7;
        displayValue2(val);
        break;
    case 8:
        endNumber.push(8);
        val = 8;
        displayValue2(val);
        break;
    case 9:
        endNumber.push(9);
        val = 9;
        displayValue2(val);
        break;
    case 4:
        endNumber.push(4);
        val = 4;
        displayValue2(val);
        break;
    case 5:
        endNumber.push(5);
        val = 5;
        displayValue2(val);
        break;
    case 6:
        endNumber.push(6);
        val = 6;
        displayValue2(val);
        break;
    case 1:
        endNumber.push(1);
        val = 1;
        displayValue2(val);
        break;
    case 2:
        endNumber.push(2);
        val = 2;
        displayValue2(val);
        break;
    case 3:
        endNumber.push(3);
        val = 3;
        displayValue2(val);    
        break;
    case 0:
        endNumber.push(0);
        val = 0;
        displayValue2(val);
        break;
   }


    let start = document.querySelectorAll(".number");
    for (let i = 0; i < start.length; i++) {
        start[i].remove();
    }
    
    let equal = document.getElementById("operator5"); //the equals function
    equal.addEventListener("click", addTogether);
}


//maybe you need to store the value than lock it out after + so it can't be accesed again till equal is pressed?
let seven = document.querySelector(".numpad1"); //store values in a array with querySelectorAll?
    seven.addEventListener("click", createValue1);

function createValue1() {
    if (turnOff == 0) {
        startNumber.push(7); 
        val = 7;
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
    if (turnOff == 0) {
        startNumber.push(8); 
        val = 8;
        displayValue(val);
        startCalc();
    }
    else {
        return;
    }
}

let pad2 = document.querySelector(".numpad3"); 
    pad2.addEventListener("click", createValue3);

function createValue3() {
    if (turnOff == 0) {
    startNumber.push(9);
    let val = 9;
    displayValue(val);
    startCalc();
    }
    else {
        return;
    }
}

let pad3 = document.querySelector(".numpad4"); 
    pad3.addEventListener("click", createValue4);

function createValue4() {
    if (turnOff == 0) {
    startNumber.push(4);
    let val = 4;
    displayValue(val);
    startCalc();
    }
    else {
        return;
    }
}

let pad4 = document.querySelector(".numpad5"); 
    pad4.addEventListener("click", createValue5);

function createValue5() {
    if (turnOff == 0) {
    startNumber.push(5);
    let val = 5;
    displayValue(val);
    startCalc();
     } else {
        return;
    }
}

let pad5 = document.querySelector(".numpad6"); 
    pad5.addEventListener("click", createValue6);

function createValue6() {
    if (turnOff == 0) {
    startNumber.push(6);
    let val = 6;
    displayValue(val);
    startCalc();
    } else {
        return;
    }
}

let pad6 = document.querySelector(".numpad7");
    pad6.addEventListener("click", createValue7);

function createValue7() {
    if (turnOff == 0) {
    startNumber.push(1);
    let val = 1;
    displayValue(val);
    startCalc();
    } else {
        return;
    }
}

let pad7 = document.querySelector(".numpad8"); 
    pad7.addEventListener("click", createValue8);

function createValue8() {
    if (turnOff == 0) {
    startNumber.push(2);
    let val = 2;
    displayValue(val);
    startCalc();
    } else {
        return;
    }
}

let pad8 = document.querySelector(".numpad9"); 
    pad8.addEventListener("click", createValue9);

function createValue9() {
    if (turnOff == 0) {
    startNumber.push(3);
    let val = 3;
    displayValue(val);
    startCalc();
    } else {
        return;
    }
}


let pad10 = document.getElementById("zero");
    pad10.addEventListener("click", createValue10);

function createValue10() {
    if (turnOff == 0) {
    startNumber.push(0);
    let val = 0;
    displayValue(val);
    startCalc();
    } else { 
        return;
    }
}
// end of number click events

function addTogether() { //adds the inputs together
if (addition == 1) {
    console.log(startNumber);
    console.log(endNumber);
    operate(sum, startNumber, endNumber);
}
if (multiplication == 1) {
    console.log(startNumber);
    console.log(endNumber);
    operate(multiply, startNumber, endNumber);
}
if (subtraction == 1) {
    console.log(startNumber);
    console.log(endNumber);
    operate(subtract, startNumber, endNumber);
}
if (division == 1) {
    console.log(startNumber);
    console.log(endNumber);
    operate(divide, startNumber, endNumber);
}

    addition = 0;
    multiplication = 0;
    subtraction = 0;
    division = 0;
}


function displayValue(val) {
    let display = document.querySelector(".text");
    let number = document.createElement("div");
    

    display.appendChild(number);


    switch(val) { //maybe add querySelector and just add a if statemant to create the first unique div than if its already there add the regular number div?
        case 7:
            number.classList.add("number");
            number.textContent = 7;
            set = 7;
            break;
        case 8:
            number.classList.add("number");
            number.textContent = 8;
            set = 8;
            break;
        case 9:
            number.classList.add("number");
            number.textContent = 9;
            set = 9;
            break;
        case 4:
            number.classList.add("number");
            number.textContent = 4;
            set = 4;
            break;
        case 5:
            number.classList.add("number");
            number.textContent = 5;
            set = 5;
            break;
        case 6:
            number.classList.add("number");
            number.textContent = 6;
            set = 6;
            break;
        case 1:
            number.classList.add("number");
            number.textContent = 1;
            set = 1;
            break;
        case 2:
            number.classList.add("number");
            number.textContent = 2;
            set = 2;
            break;
        case 3:
            number.classList.add("number");
            number.textContent = 3;
            set = 3;
            break;
        case 0:
            number.classList.add("number");
            number.textContent = 0;
            set = 0;
            break;
    }

    let first = document.querySelectorAll(".number");
   
    if (display >= 1) { // to get rid of the numbers displayed after the sum is displayed
        for (let i = 0; i < first.length; i++) {
        first[i].remove();
        }
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
            set = 7;
            break;
        case 8:
            number.classList.add("number2");
            number.textContent = 8;
            set = 8;
            break;
        case 9:
            number.classList.add("number2");
            number.textContent = 9;
            set = 9;
            break;
        case 4:
            number.classList.add("number2");
            number.textContent = 4;
            set = 4;
            break;
        case 5:
            number.classList.add("number2");
            number.textContent = 5;
            set = 5;
            break;
        case 6:
            number.classList.add("number2");
            number.textContent = 6;
            set = 6;
            break;
        case 1:
            number.classList.add("number2");
            number.textContent = 1;
            set = 1;
            break;
        case 2:
            number.classList.add("number2");
            number.textContent = 2;
            set = 2;
            break;
        case 3:
            number.classList.add("number2");
            number.textContent = 3;
            set = 3;
            break;
        case 0:
            number.classList.add("number2");
            number.textContent = 0;
            set = 0;
            break;
    }
    let first = document.querySelectorAll(".number2");

    if (display >= 1) { // to get rid of the numbers displayed after the sum is displayed
        for (let i = 0; i < first.length; i++) {
        first[i].remove();
        }
    }
}


