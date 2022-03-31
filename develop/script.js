// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating password criteria 
var passwordcriteria = {
   Uppercase: ["ABCDFGHJIKMNLOPQRSTUVWXYZ"],
   lowercase: ["abcdefghiklmnopqrstuvwxyz"],
   Number: ["0123456789"],
   specialchara: ["!@#$%^&*()=+"],
   length: ["0"],
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//function the generate button to generate password
function generatePassword() {
  //
  var result ="";

  var length = 0;
  var Uppercase;
  var lowercase;
  var Number;
  var specialchara;

  length = 0;
  passwordcriteria.length= 0;
  result="";

  while (length < 8 || length > 128) {
    length = prompt("How many characters do you want to be in your password? at least 8 and no more than 128.");

    if (length == null){
      return "your secure password";
    }
    else {
    if (undefined(length)) {
      alert ("you did not enter a number");
      return "No Password was generate"
    }
    }
    else {
      if ( length < 8 || length > 128){
        alert("password must be between 8 and 128 character.");
        return "Your secure password";
      }
    }
    else{
      
    }
  }
}