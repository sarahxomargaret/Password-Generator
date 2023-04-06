// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!#%$'()*+,-./:;<=>?@[\]^_`{|}~"
  var pool = [];
  var passwordGenerated = [];


// number of characters
var passwordLength = parseInt(prompt("Choose a password length between 8-128 characters"));
  if(passwordLength < 8 || passwordLength > 128){
    prompt("Please choose between 8 and 128");
  }

//include lowercase letters
var addLower = confirm("Would you like to add lowercase letters?");
  if (addLower === true){
    pool = pool.concat(lowerCase);
  }

//include uppercase letters
var addUpper = confirm("Would you like to add uppercase letters?");
  if (addUpper === true){
    pool = pool.concat(upperCase);
  }

//include numbers
var addNumbers = confirm("Would you like to add numbers?");
  if (addNumbers === true){
    pool = pool.concat(numbers);
  }

//include special characters
var addCharacters = confirm("Would you like to add special characters?");
 if (addCharacters === true){
  pool = pool.concat(specialChar);
 }

 if (!addLower && !addUpper && !addNumbers && !addCharacters){
  return alert("Must pick at least one");
 }


for(var i = 0; i < passwordLength; i++){
  passwordGenerated = pool[Math.floor(Math.random() * pool.length)];
  return passwordGenerated;
}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

