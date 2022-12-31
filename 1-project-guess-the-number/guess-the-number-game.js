let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessNumber;
let score = 0;

do {
  guessNumber = prompt("enter your number:");
  guessNumber = Number.parseInt(guessNumber);
  score++;
  totalScore = 100 - score;

  if (guessNumber < randomNumber && guessNumber > 0 && guessNumber < 101) {
    alert(`sorry you guess the wrong number \n the random number is greater then your guess number \n try again`)
    
  } 
  else if (guessNumber > randomNumber && guessNumber > 0 && guessNumber <= 100) {
    alert(`sorry you guess the wrong number \n the random number is less then your guess number \n try again`)

  } 
  else if (guessNumber == randomNumber) {
    alert(`you guess the right number \n your score out of 100 is  ${totalScore}`)
    

  }
   else {
    alert("please input the number between 1 to 100")

  }
}
 while (guessNumber != randomNumber);



