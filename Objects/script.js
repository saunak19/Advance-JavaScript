// const user = {
//   firstName: "Saunak",
//   lastName: "Ahir",
//   age: 23,
// };

//Reverse a String
let rev_str = "hello";
rev_str = rev_str.split("").reverse().join("");
// console.log(rev_str)

// Capitalize First Letter of Each Word
let capitalFirstLetter = "hello world";
capitalFirstLetter = capitalFirstLetter
  .split(" ")
  .map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join(" ");
// console.log(capitalFirstLetter)

// Count Vowels in a String
let vowel_str = "hello";
let k = 0;
let j = 1;
let h;
for (let i = 0; i < vowel_str.length; i++) {
  if (vowel_str[k] == vowel_str[j]) {
    h = vowel_str[k] + vowel_str[j];
  }
  k++;
  j++;
}
// console.log(h.length)

//Check if String is a Palindrome
function palindrome_str(str) {
  return str.split("").reverse().join("") == str ? true : false;
}
// console.log(palindrome_str("madam"));
// Remove Duplicate Characters
function RemoveDuplicateChar(char){
    
}