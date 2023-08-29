const cardNumber = document.getElementById("number");
const fullName = document.getElementById("name");
const cardDate = document.getElementById("date")
const cardCvc = document.getElementById("cvc")
const cardBtn = document.querySelector("button");


let myNumber = document.getElementById("numberInput");
myNumber.onkeyup = function name(params) {
        cardNumber.innerHTML = myNumber.value;
    }

let myName = document.getElementById("nameInput");
myName.onkeyup = function name(params) {
        fullName.innerHTML = myName.value;
    }

let myDate = document.getElementById("dateInput");
myDate.onkeyup = function name(params) {
        cardDate.innerHTML = myDate.value;
    }

let myCvc = document.getElementById("cvcInput");
myCvc.onkeyup = function name(params) {
        cardCvc.innerHTML = myCvc.value;
    }