// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Please enter a how long you would like your password. Must be between 8 and 128", "8");
 // force restart on user if they insert an invalid answer
  if (passwordLength < 8 || passwordLength > 128){
   alert("The password length you submitted does not meet criteria")
  return;
}
   var upperCase = confirm("Do you want to use uppercase letters? (Press cancel if you do not want these characters in your password.)");
   var lowerCase = confirm("Do you want to use lowercase letters? (Press cancel if you do not want these characters in your password.)");
   var numericalChar = confirm("Do you want to use numbers? (Press cancel if you do not want these characters in your password.)");
   var specialChar = confirm("Do you want to use special characters? (Press cancel if you do not want these characters in your password.)");
// if we have no way to generate force restart
   if(!upperCase && !lowerCase && !numericalChar && !specialChar){
  alert("No available criteria to generate a password")
  return;
}
//characters by ascii codes
  var characterAsc = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
     45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
       77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
         107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
          120, 121, 122, 123, 124, 125, 126]
// filtering out ascii codes by checking value and filtering from array
if(!upperCase){
  var characterAsc = characterAsc.filter(function(value) {
      return value < 65 || value > 90 ;
  })
}
if(!lowerCase){
  var characterAsc = characterAsc.filter(function(value) {
    return value < 97 || value > 122 ;
})
}
if(!numericalChar){
  var characterAsc = characterAsc.filter(function(value) {
    return value < 48 || value > 57 ;
})
}
if(!specialChar){
  var characterAsc = characterAsc.filter(function(value) {
    return value < 33 || value > 47 && value < 58 || value > 64 
    && value < 91 || value > 96 && value < 123 || value > 126 ;
})
}
//generate random item from new array  after all filters 
var password = '';
for(var i, i=0; i < passwordLength; i++){
  var randChar = characterAsc[(Math.floor(Math.random() * (characterAsc.length)))];
  //items are ascii codes being converted and added to the password string
  password += String.fromCharCode(randChar);
}
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







//let x = Math.floor(Math.random() * 93) + 33;

//console.log(String.fromCharCode(x));
// &#x; will be what we need to convert random number to ascii character
 


// 93 33 for full range 48 57(numbers) + 65 90(uppercase) + 97 122 (lowercase)