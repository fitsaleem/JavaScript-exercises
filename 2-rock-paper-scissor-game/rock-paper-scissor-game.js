//write javaScript to create game of rock, paper,scissor the game should ask you enter rock,paper,scissor the computer should be able to randomly generate rock,paper,scissor and declear win or loss using alert use confirm and prompt when ever required


let confirmMe = true;
do {
  let userInput = prompt(`enter "r" for rock, "p" for paper and "s" for scissor`);

  let myString = ["r", "p", "s"]
  let randomIndex = Math.floor(Math.random() * myString.length)
  let randomString = myString[randomIndex]

  if (userInput == randomString) {
    alert("the match has tie")
  }
  else if (userInput == "r" && randomString == "s") {
    alert("congrats you win " + "computer value is "+randomString)
  }
  else if (userInput == "p" && randomString == "r") {
    alert("congrats you win "+ "computer value is "+randomString)
  }
  else if (userInput == "s" && randomString == "p") {
    alert("congrats you win "+ "computer value is "+randomString)
  }
  else {
    alert("sorry you loss the game "+ "computer value is "+randomString)
    
  }
  confirmMe = confirm("do you want to play again")


} while (confirmMe)






