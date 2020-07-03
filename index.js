
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. 
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

let number1 = parseInt(prompt("Type a random number."));
let number2 = parseInt(prompt("Type another random number."));

 const multiplication = () => {
  let product = 0;
     for (let i = 1; i <= number2; i += 1){
       product = product + number1;
     }
     return product
}

const answer1 = multiplication (number1, number2)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1

//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. 
// You have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

// My Answer
let word = prompt("Type a random word.").toLowerCase();
let vowels = [];
let consonants = [];

vowelOrConsonant = (word) => {
  for(let i = 0; i < word.length; i += 1) {
  if(word[i] === 'a'|| word[i] === 'e' || word[i] === 'i' ||  word[i] === 'o' || word[i] === 'u'){
   vowels.push(word[i]);
 } else {
   consonants.push(word[i]);
 }
  }
 let result = prompt("Show vowels first or consonants first? - type in either 'vowels' or 'consonants'.");
 if (result.toLowerCase() === 'vowels') {
  return (vowels.concat(consonants));
} else if(result.toLowerCase() === 'consonants') {
  return (consonants.concat(vowels));
} else {
  alert('Type either vowels or consonants.');}
}

const answer2 = vowelOrConsonant(word)

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2


/* another way to do the question2

str = prompt('Intoduce the string to evaluate if it is vowel or consonant');
function vowelcons(str){
    var allvowels = ['a','e','i','o','u','A','E','I','O','U'] //Array of vowels
    arrvowels = []; //Empty array to push vowels
    arrcons = []; //Empty array to push consonants
    finalarray =[];
    strfinal = false;
    for (let i =0; i < str.length; i++){
      if(allvowels.includes(str.charAt(i))){
      console.log("String is:" + str[i],'a vowel');
      arrvowels.push(str.charAt(i));
      }
      else {
      console.log("String is:" + str[i],'a consonant');
      arrcons.push(str.charAt(i));  
      }
    }
    strfinal = prompt ('Do u want me to show u first the consonant or vowel of your string');
 
 */

//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins

let player = {
  player_name: prompt('Type your name.'),
  lives: 3, 
  fail_numbers: []
};
let guess;
const randomNumber = Math.round(Math.random() * 40 + 10);
console.log(randomNumber);

guessTheNumber  = () => {
for (let i = player.lives; i > 0; i --){
  guess = parseInt(prompt("Guess a number between 10 and 50."));
 if(guess === randomNumber){
   alert('Congrats!');
   return 'Congrats';
   break;
} else if (guess !== randomNumber) {
  player.lives -= 1
  player.fail_numbers.push(guess)
  alert('Try Again!');
  console.log(player);}
  if (player.lives == 0) {
  alert('You lost the game.');
  return 'You lost the game.';
   }
} 
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"


let sortedLibrary = [];
let searchBy;

sort = (searchBy) => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
   
    searchBy = prompt("You can sort it by 'title', 'author' and 'libraryID'. How do you want to sort it?").toLowerCase();
   
    for (let i = 0; i < library.length; i ++){
    if (searchBy === 'title'){
      sortedLibrary.push(library[i]['title']);
      sortedLibrary.sort((a, b) => b.length - a.length);
    } else if (searchBy === 'author') {
      sortedLibrary.push(library[i]['author']);
      sortedLibrary.sort((a, b) => b.length - a.length);
    } else if (searchBy === 'libraryID') {
      sortedLibrary.push(library[i]['libraryID']);
      sortedLibrary.sort((a, b) => b.length - a.length);
    } 
   }  
   if(searchBy !== 'title' & searchBy !== 'author' & searchBy !== 'libraryid') 
    {alert('Type in a valid criteria!');
  }
  return sortedLibrary.join('; ');
}
const answer4 = sort(searchBy)

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4