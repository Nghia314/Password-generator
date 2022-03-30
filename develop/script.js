// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password global scope
var criteria = {
uppercase: [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
lowercase: [abcdefghijklmnopqrdtuvwxyz]
number : [0123456789]
specialchara: [! , @ , # , $ , % , ^ , & , * , ( , ) , + , = ]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
