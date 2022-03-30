// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordcriteria = {
   Uppercase: ["ABCDFGHJIKMNLOPQRSTUVWXYZ"],
   lowercase: ["abcdefghiklmnopqrstuvwxyz"],
   Number: ["0123456789"],
   specialchara: ["!@#$%^&*()=+"],
   length: ["0"],

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generataPassword() {
  console.log("clicked the button");
  
  var length = ;
  var Uppercase;
  var lowercase;
  var Number;
  var specialchara

  var result = "";

  if((length < 8 || length >128))
  alert("Choose number between 8 and 128")



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

