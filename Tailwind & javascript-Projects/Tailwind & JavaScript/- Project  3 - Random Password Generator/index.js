const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symboles = "&é'(-è_çà)=$*ù¤[]{}+ù*<>./";
const allChars = upperCase + lowerCase + numbers + symboles;
function createPassword(params) {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password  += numbers[Math.floor(Math.random() * numbers.length )]
    password  += symboles[Math.floor(Math.random() * symboles.length)]
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}