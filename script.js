// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = 'abcdefghijklmnopqrstuvyz';
var upperCaseLetters = 'ABCEDEFGHIJKLMNOPQRSTUVYZ';
var numbers = '1234567890';
var specialCharacters = "!@#$%^&*()_+-=[]\\{};:'\"<>?/.,`~";
var passwordLength = 8;
var lowerCaseC = false;
var upperCaseC = false;
var numberC = false;
var specialCharactersC = false;

function createCharacterPool(){
  var pool = "";
  if (lowerCaseC) pool += lowerCaseLetters;
  if (upperCaseC) pool += upperCaseLetters;
  if (numberC) pool += numbers;
  if (specialCharactersC) pool += specialCharacters;
    
  return pool;
}

function getRandomCharacter(characterPool) {
  var indexMax = characterPool.length;
  var index = Math.floor(Math.random() * (indexMax));

  return characterPool.charAt(index);
}

function generateRandomPassword() {
  var createdPool = createCharacterPool();
  var password = "";
  if (lowerCaseC) password += getRandomCharacter(lowerCaseLetters);
  if (upperCaseC) password += getRandomCharacter(upperCaseLetters);
  if (numberC) password += getRandomCharacter(numbers);
  if (specialCharactersC) password += getRandomCharacter(specialCharacters);
  var criteriaLength = password.length;
  for (var i = 0; i < passwordLength - criteriaLength; i++) {
  password += getRandomCharacter(createdPool);
  }

  return password;
}

function validatedCriteria() {

  return lowerCaseC || upperCaseC || numberC || specialCharactersC;
  
}

function validatedPasswordLength () {
  var longEnough = passwordLength >= 8;
  var shortEnough = passwordLength <= 128;

  return longEnough && shortEnough;
}


function validateUserInput () {
  return validatedCriteria() && validatedPasswordLength();  
}

function generatePassword () {
  passwordLength = parseInt (window.prompt("How long does the password need to be?"));
  if (!validatedPasswordLength()) {
    alert ("Password Must be between 8 and 128 characters.");
    return;
  }
  lowerCaseC = window.confirm("Does the password need to contain lower case letters?");
  upperCaseC = window.confirm("Does the password need to contain upper case letters?");
  numberC = window.confirm("Does the password need to contain numbers?");
  specialCharactersC = window.confirm("Does the password need to contain special charaters?");
  if (!validatedCriteria()) {
    alert ("You must pick at least one criteria.");
    return;
}
return generateRandomPassword();

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
