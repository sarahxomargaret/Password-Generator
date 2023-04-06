// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialChar = ['!','@','#','$','%','^','&','*','(',')','-','=','+','_','<','>','?'];
  // var minLength = 8;
  // var maxLength= 128;
  var pool = [];
  // pool = pool.concat(passwordLength,lowerCase,upperCase,numbers,specialChar);
  var passwordGenerated = [];


// number of characters
var passwordLength = parseInt(prompt("Choose a password length between 8-128 characters"));
  if(passwordLength < 8 || passwordLength > 128){
    alert("Please choose between 8 and 128");
    pool = pool.concat(passwordLength);
    // console.log(pool);
  }

//include lowercase letters
var addLower = confirm("Would you like to add lowercase letters?");
  if (addLower === true){
    pool = pool.concat(lowerCase);
    // console.log(pool);
  }

//include uppercase letters
var addUpper = confirm("Would you like to add uppercase letters?");
  if (addUpper === true){
    pool = pool.concat(upperCase);
    // console.log(pool);
  }

//include numbers
var addNumbers = confirm("Would you like to add numbers?");
  if (addNumbers === true){
    pool = pool.concat(numbers);
    // console.log(pool);
  }

//include special characters
var addCharacters = confirm("Would you like to add special characters?");
 if (addCharacters === true){
  pool = pool.concat(specialChar);
  // console.log(pool);
 }

 if (!addLower && !addUpper && !addNumbers && !addCharacters){
  return alert("Must pick at least one");
 }


for(var i = 0; i < passwordLength; i++){
  passwordGenerated = (pool[Math.floor(Math.random() * pool.length)]);
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

