//Listing password criteria
// Array of uppercase letters
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array of lowercase letters
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of special characters
var specialArr = ["!", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Array of numeric characters
var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Defining boolean variables for user selection of character types
var upperTrue = true;
var lowerTrue = true;
var specialTrue = true;
var numberTrue = true;

// Defining a function for user selection of character types
function charType() {
  upperTrue = confirm("Click 'OK' to include capital letters in your password. If you do not wish to include capital letters, click 'Cancel'");
  lowerTrue = confirm("Click 'OK' to include lowercase letters in your password. If you do not wish to include lowercase letters, click 'Cancel'");
  specialTrue = confirm("Click 'OK' to include special characters in your password. Special characters include the following: !" + '"#$%&' + "'()*+,-./:;<=>?@[" + "\\]^_`{|}~. If you do not wish to include special characters, click 'Cancel'");
  numberTrue = confirm("Click 'OK' to include numbers in your password. If you do not wish to include numbers, click 'Cancel'");
}

// Defining a function for random selection
// Input requires an array
// Function takes a random integer number between 0 and the length of the array, like an index,
// and returns the element at the random position within the array inputted
function randSel(randArr) {
  x = Math.floor(Math.random()*(randArr.length));
  return randArr[x];
}


// Define generatePassword function
// This generatePassword function will output a password of user inputted length consisting of 
// random characters of a subset that the user specifies 
function generatePassword() {
  // Define an empty array to be populated with characters depending on user input
  var choiceArr = []; // Will be used later

  // Prompting user to enter character length of password and storing it as passLength variable
  var passLength = prompt("How long do you want your password to be?");
  // console.log(typeof passLength);

    // // Validity check that user entered a number
    // while (typeof passLength !== 'number') {
    //   passLength = prompt("Please enter a number.");
    // }

    // Validity check for required length of password
    while (passLength < 8 || passLength > 128 ) {
      passLength = prompt("Invalid password length. Password must be at least 8 characters long and not exceed 128 characters.");
    }

    // Validity check for integer value length of password
    while (passLength % 1 !== 0) {
      passLength = prompt("Invalid password entry. Password must be an integer at least 8 characters long and not exceed 128 characters.");
    }


  //console.log("Password will be " + passLength + " characters long");

  // Calls charType function 
  charType();

    //Validity check for user input to make sure they selected at least one type of character
    while (upperTrue === false && lowerTrue === false && specialTrue === false && numberTrue === false) {
      alert("Invalid selection. You must pick at least one characteristic.");
      charType();
    }

    // Populating the choice array based on user criteria
    if (upperTrue) {
      choiceArr.push(...upperArr);
    } 

    if (lowerTrue) {
      choiceArr.push(...lowerArr);
    } 

    if (specialTrue) {
      choiceArr.push(...specialArr);
    } 

    if (numberTrue) {
      choiceArr.push(...numArr);
    } 

    // console.log(choiceArr);

  // Defining an empty password string that will be populated with random characters from choice array
  var passString = "";

  // Iterates the same amount of times as the desired password length
  for (i=0; i<passLength; i++) {
    // Calls the function for random selection and stores it in variable a
    a = randSel(choiceArr);
    // Concatenates the passString with the random selection
    passString += a;
    // console.log(i);
  }
  
  // Finally, returns passString as a useable item
  return passString;
}

// Assignment Code
// Assigns a variable to DOM of HTML element with id of generate for shorthand use
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Takes the function generatePassword and assigns it to local variable password
  var password = generatePassword();

  // Assigns a variable to DOM of HTML element with id of password for shorthand use
  var passwordText = document.querySelector("#password");

  // Assigns the value of local variable password to the HTML value 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
