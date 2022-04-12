// Assignment Code
var generateBtn = document.querySelector("#generate");
//password criteria
var pwcriteria = {
  pwlowercase: ["abcdfghijklmnopqrstuvwxyz"],
  pwuppercase: ["ABCDEFGHIJKLMOPQRSTUVWXYZ"],
  pwnumber: ["0123456789"],
  pwspecial: ["!@#$%^&*()=+"],
};
// ask the user how long they want the password
function generatePassword() {
  var pwlength = prompt(
    "How long do you want the password to be? (at least 8 and max 128)"
  );
  //if user return undefine password length
  if (pwlength < 8 || pwlength > 128) {
    alert("Please enter the length between 8 and 128 chareacter Please!");
    return generatePassword();
  }
  //if the user meet the length requirement
  if (pwlength >= 8 && pwlength <= 128) {
    // password criteria confirm
    var pwlowercase = confirm(
      "would you like lowercase to be in your password?"
    );
    var pwuppercase = confirm(
      "would you like Uppercase to be in your password?"
    );
    var pwnumber = confirm("would you like number to be in your password?");
    var pwspecial = confirm(
      "would you like specical character to be in your password?"
    );
  }

  //if the user doesnt select any criteria requirement
  if (
    pwlowercase === false &&
    pwuppercase === false &&
    pwnumber === false &&
    pwspecial === false
  ) {
    alert("please confirm at least one set of criteria!!");
    return generatePassword();
  }
  //if function return to select criteria
  if (pwlowercase === false) {
    var pwlowercase = [""];
  } else {
    if (pwlowercase === true) {
      var pwlowercase = ["abcdfghijklmnopqrstuvwxyz"];
    }
  }
  if (pwuppercase === false) {
    var pwuppercase = [""];
  } else {
    if (pwuppercase === true) {
      var pwuppercase = ["ABCDEFGHIJKLMOPQRSTUVWXYZ"];
    }
  }
  if (pwnumber === false) {
    var pwnumber = [""];
  } else {
    if (pwnumber === true) {
      var pwnumber = ["0123456789"];
    }
  }
  if (pwspecial === false) {
    var pwspecial = [""];
  } else {
    if (pwspecial === true) {
      var pwspecial = ["!@#$%^&*()=+"];
    }
  }
  //variable that is decide by the select criteria
  var randomChar = pwlowercase + pwnumber + pwspecial + pwuppercase;
  // for loop in order to generate password length is select by user
  var password = "";
  for (var i = 0; i < pwlength; i++) {
    var trueRandom = randomChar[Math.floor(Math.random() * randomChar.length)];
    password += trueRandom;
  }
  return password;
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
