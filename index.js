console.log('Hello World')
const options = ['rock', 'paper', 'scissors']
let score = [0, 0]
function computerPlay() {
  let randomChoice = Math.random() * 3
  let chosenOption = options[Math.floor(randomChoice)]
  return chosenOption

}


function playRound(playerInput) {
  let compInput = computerPlay()
  console.log(`Computerinput: ${compInput} Playerinput: ${playerInput}`)
  let result = ''
  if (compInput === playerInput) {

    result = "Tie"

  } else if (compInput == options[0] && playerInput == options[1]) {
    score[0] += 1
    result = "Player won"
  } else if (compInput == options[0] && playerInput == options[2]) {
    score[1] += 1
    result = `You Lose! Computer beat you with ${compInput}`
  } else if (compInput == options[1] && playerInput == options[2]) {
    score[0] += 1
    result = "Player won"
  } else if (compInput == options[1] && playerInput == options[0]) {
    score[1] += 1
    result = `You Lose! Computer beat you with ${compInput}`
  } else if (compInput == options[2] && playerInput == options[0]) {
    score[0] += 1
    result = "Player won"
  } else if (compInput == options[2] && playerInput == options[1]) {
    score[1] += 1
    result = `You Lose! Computer beat you with ${compInput}`
  }
  let bodyNode = document.querySelector("body")
  let resNode = document.createElement("h1")
  resNode.innerText = result
  bodyNode.appendChild(resNode)

}

function playerSelection(e) {
  const selectedItem = e.target.innerText.toLowerCase()
  playRound(selectedItem)
}
console.log("Select Buttons")
let buttonEvents = document.querySelectorAll("button")

buttonEvents.forEach(button => button.addEventListener('click', playerSelection))










