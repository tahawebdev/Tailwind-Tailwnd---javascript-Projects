// Declare Variables
let passwordBox = document.getElementById("password");
let lengthBox = document.getElementById("length");
let length = "";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers  = "0123456789";
let symboles = "&é'(-è_çà)=$*ù¤[]{}+ù*<>./";
let allChars = upperCase + lowerCase + numbers + symboles;
// Create Password Function
function createPassword(){
    // if Password letters is less tahan 4 Letters !!
    if(lengthBox.value == 0){
        alert("Filll Out The box")
    }// if Password letters is more tahan 4 Letters 
    else if(lengthBox.value <= 4){
        alert("You Can't Generate a Password Less Than 4 ")
    }
    else{
        length = lengthBox.value;
        // allChars.length = lengthBox.value;
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password += numbers[Math.floor(Math.random() * numbers.length)]
        password += symboles[Math.floor(Math.random() * symboles.length)]
        while(length > password.length){
            password += allChars[Math.floor(Math.random() * allChars.length)]
        }
        passwordBox.value = password;
    }
    }
    // Copy Password
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}