// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialChar = ['!','@','#','$','%','^','&','*','(',')','-','=','+','_','<','>','?'];
  var passwordOptions = [];
  var passwordMinLength = 8;
  var passwordMaxLength = 128;
  var passwordGenerated = [];


// number of characters
var passwordLength = prompt("Choose a password length between 8-128 characters");
  if(passwordLength < passwordMinLength || passwordLength > passwordMaxLength){
    alert("Please choose between 8 and 128");
    return null;
    // console.log(pool);
  }

//include lowercase letters
var addLower = confirm("Would you like to add lowercase letters?");
  if (addLower === true){
    passwordOptions = passwordOptions.concat(lowerCase);
    // console.log(pool);
  }

//include uppercase letters
var addUpper = confirm("Would you like to add uppercase letters?");
  if (addUpper === true){
    passwordOptions = passwordOptions.concat(upperCase);
    // console.log(pool);
  }

//include numbers
var addNumbers = confirm("Would you like to add numbers?");
  if (addNumbers === true){
    passwordOptions = passwordOptions.concat(numbers);
    // console.log(pool);
  }

//include special characters
var addCharacters = confirm("Would you like to add special characters?");
 if (addCharacters === true){
  passwordOptions = passwordOptions.concat(specialChar);
  // console.log(pool);
 }
console.log(passwordOptions);
for(var i = 0; i <passwordLength; i++){
    passwordGenerated.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
}
console.log(passwordOptions);
return passwordGenerated.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

